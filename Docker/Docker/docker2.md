# **Docker応用演習：マルチコンテナ環境の構築**

本演習では、既存の「全部入り」環境を、Dockerの標準的な設計思想である「1コンテナ・1サービス」の疎結合な構成へ移行します。これにより、保守性、拡張性、およびセキュリティが劇的に向上したモダンなシステムアーキテクチャを実現します。

## **1. 演習のゴールと最終構成図**
本演習を通じて、以下の3つの役割が独立して協調動作する環境を構築します。

* **Webコンテナ (Apache + PHP)**:
    * WordPressを動作させるメインの窓口。
    * ポート80番でWebページを公開し、PHPスクリプトを実行。
    * 8080番へのリクエストを検知し、バックエンドのFlaskへ橋渡しする「リバースプロキシ」としても機能。
* **Appコンテナ (Python + Flask)**:
    * 独立したアプリケーションサーバーとして動作。
    * Gunicorn（WSGIサーバ）を使用して、高速かつ安定したPython実行環境を提供。
* **DBコンテナ (MariaDB)**:
    * データの永続化を担うデータベース。
    * Webコンテナ（WordPress用）とAppコンテナ（独自データ用）の両方から安全にアクセス可能なハブ。

---

## **2. WindowsとWSL2のファイル連携：シームレスな開発体験**

Windows上で使い慣れたVS Code等のエディタでファイルを作成し、それをLinux（Docker）側で実行できるのは、WSL2の高度な**自動マウント機能**とファイルシステム連携のおかげです。

| 項目 | 内容・技術的背景 |
| :--- | :--- |
| **自動マウント** | Windowsの `C:\` ドライブは、WSL2内では `/mnt/c/` として認識されます。これによりOSを跨いだファイル操作が標準機能として提供されています。 |
| **リアルタイム反映** | Windows側での「保存」イベントは即座にWSL2カーネルに通知され、Dockerコンテナ内のファイルも一瞬で更新されます。 |
| **パフォーマンスの最適化** | ファイルI/Oを高速化したい場合、`/mnt/c/` 経由ではなく、WSL2内の `/home/user/` 領域にプロジェクトを置くことで、Linuxネイティブの速度が得られます。 |

---

## **3. プロジェクトのディレクトリ構造：整理された環境の重要性**

複雑なマルチコンテナ環境では、どこに何があるかを明確にすることがトラブル回避の第一歩です。Docker Composeファイル（`docker-compose.yml`）は、必ずプロジェクトの**ルートディレクトリ**に配置します。

```bash
# プロジェクトルートの作成と階層構築
mkdir -p lamp-python-app/{web/conf,web/html,app/src,db/data}
cd lamp-python-app

# ここ（lamp-python-app直下）に docker-compose.yml を作成します
```

| ディレクトリ/ファイル | 役割と管理のポイント |
| :--- | :--- |
| **docker-compose.yml** | **【重要】** サービス全体の定義書。各フォルダのDockerfileを読み込み、連携させます。 |
| **web/Dockerfile** | ApacheとPHPのビルド定義。OSライブラリの管理もここで行います。 |
| **web/conf/000-default.conf** | Apacheの挙動を支配する設定ファイル。プロキシの経路定義を含みます。 |
| **app/Dockerfile** | Python実行環境の定義。軽量なイメージを選択し、ビルド時間を短縮します。 |
| **app/src/** | Flaskのソースコードや `requirements.txt` を配置する、開発のメイン拠点。 |
| **db/data/** | **重要**: コンテナが削除されてもDBデータが消えないよう、ホスト側に永続化する領域。 |

---

## **4. 各コンテナの定義（Dockerfile）：詳細解説**

### **4.1 Webサーバー (Apache/PHP)**

WordPressの画像処理に必要なGDライブラリや、DB接続に必要な拡張機能をインストールし、さらにリバースプロキシを有効化します。

```dockerfile
# 安定性の高い公式イメージをベースに使用
FROM php:8.2-apache

# システムパッケージの更新と、WPに必要なライブラリのインストール
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd mysqli pdo_mysql \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Apacheモジュール（Proxy/Rewrite）の有効化
RUN a2enmod proxy proxy_http rewrite
```

### **4.2 アプリサーバー (Python/Flask)**

本番環境に耐えうるWSGIサーバ「Gunicorn」を導入し、開発用サーバでは対応できない並列処理を実現します。

```dockerfile
# 軽量なslimイメージを採用し、コンテナの起動速度とセキュリティを向上
FROM python:3.11-slim

WORKDIR /app

# 依存関係ファイルのみコピー
COPY src/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 実行環境の指定
CMD ["gunicorn", "--workers", "3", "--bind", "0.0.0.0:8080", "main:app"]
```

---

## **5. コンテナ間連携の設定（Apacheリバースプロキシ）**

`web/conf/000-default.conf` を作成します。ここでは「名前解決」の仕組みを利用し、localhost ではなくコンテナ名で通信を行います。

```apache
# 80番ポート：WordPress（PHP）のフロントエンド
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html

    <Directory /var/www/html>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

# 8080番ポート：Flaskアプリケーションへのゲートウェイ
Listen 8080
<VirtualHost *:8080>
    ProxyPreserveHost On
    # docker-compose.ymlで定義したサービス名 "app" を指定
    ProxyPass / http://app:8080/
    ProxyPassReverse / http://app:8080/

    ErrorLog ${APACHE_LOG_DIR}/flask_proxy_error.log
</VirtualHost>
```

---

## **6. Docker Compose によるオーケストレーション：インフラをコード化する**

**Docker Compose** の設定は、プロジェクトのルートにある `docker-compose.yml` に記述します。

```yaml
version: '3.8'

services:
  # 1. データベースコンテナ：データの心臓部
  db:
    image: mariadb:10.11
    restart: always
    environment:
      MARIADB_ROOT_PASSWORD: root_password
      MARIADB_DATABASE: wp_db
      MARIADB_USER: wp_user
      MARIADB_PASSWORD: wp_password
    volumes:
      - ./db/data:/var/lib/mysql

  # 2. Webサーバーコンテナ：ユーザーとの接点
  web:
    build: ./web
    ports:
      - "80:80"     # WordPressアクセス用
      - "8080:8080" # Flaskプロキシ経由アクセス用
    volumes:
      - ./web/html:/var/www/html
      - ./web/conf/000-default.conf:/etc/apache2/sites-available/000-default.conf
    depends_on:
      - db
      - app
    networks:
      - app-network

  # 3. アプリケーションコンテナ：ロジックの実行
  app:
    build: ./app
    volumes:
      - ./app/src:/app
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
```

---

## **7. 実行と検証：トラブルシューティングの視点**

```bash
# 1. コンテナの一括起動（初回やDockerfile変更時は --build を付ける）
docker compose up -d --build

# 2. ログの確認（接続エラーなどはここでチェック）
docker compose logs -f
```

### **検証ステップ**
* **疎通確認**: ブラウザで `http://localhost` を開きWordPressが表示されるか。
* **プロキシ確認**: `http://localhost:8080` を開き、Flaskのレスポンスが返るか。
* **DB接続テスト**: `docker compose exec web php -m | grep mysqli` でPHPからDBが扱えるか。

---

## **8. 今回の構成を採用した理由と技術的展望**

| 理由 | 詳細な影響（インプリケーション） |
| :--- | :--- |
| **依存関係の完全隔離** | PythonのアップデートがApacheの設定に影響を与えず、個別にメンテナンス可能です。 |
| **迅速なスケーリング** | 負荷に応じて `docker compose up --scale app=3` のように特定サービスだけ増強できます。 |
| **障害の局所化** | Web側が止まっても、バックエンドやDBは安全に稼働し続け、復旧を早めます。 |
| **CI/CDとの親和性** | 各パーツが独立しているため、自動テストやデプロイのパイプライン構築が容易です。 |

### **演習の振り返り：Dockerならではのポイント**
* **DNSの魔法**: `http://app:8080` という記述は、Dockerがサービス名を自動でIPアドレスに変換することで成立しています。
* **環境のポータビリティ**: Windowsで作ったこの構成は、MacやLinuxサーバーでも、Dockerさえあれば全く同じ挙動をします。