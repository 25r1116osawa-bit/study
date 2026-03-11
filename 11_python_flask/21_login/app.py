# Flask本体
from flask import Flask, render_template
# Flask-Login（ログイン管理ライブラリ）
from flask_login import LoginManager, login_required
# Userモデルとデータベース
from User import User, db
# 認証用Blueprint
from auth import auth_bp
# Flaskアプリ作成
app = Flask(__name__)


# セッション・CSRFなどで使用する秘密鍵
# 本番ではもっと長くランダムな文字列にする
app.config['SECRET_KEY'] = 'abc'

# 使用するデータベース
# sqlite:///app.db → app.db というSQLiteファイル
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'


# SQLAlchemyをFlaskアプリに登録
db.init_app(app)


# Flask-Loginの管理クラス
login_manager = LoginManager()

# ログインしていないユーザーが
# login_requiredページへアクセスした場合のリダイレクト先
login_manager.login_view = 'auth.login'

# ログインしていない時に表示するメッセージ
login_manager.login_message = 'このページにアクセスするにはログインが必要です。'

# flashメッセージのカテゴリー
login_manager.login_message_category = 'error'

# FlaskアプリとLoginManagerを連携
login_manager.init_app(app)


# Blueprintの登録
# auth.py に書いた認証ルートを追加
# url_prefix='/auth' なのでURLはこうなる
# /auth/login
# /auth/register
# /auth/logout
app.register_blueprint(auth_bp, url_prefix='/auth')


# Flask-Loginがユーザーを取得する関数
# セッションに保存された user_id から
# データベースのUserを取得する
@login_manager.user_loader
def load_user(user_id):

    # DBからUserを取得
    return db.session.get(User, int(user_id))


# トップページ
@app.route("/")
def index():

    # templates/index.html を表示
    return render_template('index.html')


# ログインが必要なページ
@app.route('/profile')
@login_required
def profile():

    # ログインしている人だけアクセス可能
    return "ログイン必須画面"


# アプリ起動
if __name__ == '__main__':

    # アプリのコンテキスト内でDB作成
    with app.app_context():

        # テーブルを自動作成
        db.create_all()

    # Flask起動
    app.run(debug=True)