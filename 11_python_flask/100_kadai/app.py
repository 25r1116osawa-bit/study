from flask import Flask, render_template
from flask_login import LoginManager, login_required
from User import User, db
from auth import auth_bp
app = Flask(__name__)


app.config['SECRET_KEY'] = 'abc'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'


db.init_app(app)

login_manager = LoginManager()
login_manager.login_view = 'auth.login'
login_manager.login_message = 'このページにアクセスするにはログインが必要です。'
login_manager.login_message_category = 'error'
login_manager.init_app(app)
app.register_blueprint(auth_bp, url_prefix='/auth')
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
    app.run(debug=True,port=1234)