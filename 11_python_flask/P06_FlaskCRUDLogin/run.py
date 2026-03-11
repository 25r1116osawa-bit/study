# 課題：
# ログイン機能を導入して下さい。
# ログイン機能はBlueprintでモジュール化して下さい。
# 従業員モジュールと部署モジュール、メインメニューにログイン制限をかけて下さい。

# 機能：
# ログイン
# ログアウト
# 新規登録
from app import app

if __name__ == "__main__":
    # WEBサーバー実行
    app.run(host=app.config['HOST'],port=app.config['PORT'])