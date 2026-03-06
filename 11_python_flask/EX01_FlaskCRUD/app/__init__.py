print("--- 初期化処理実行 ---")
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# サーバー設定
app = Flask("app")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///DB.db'
app.config['DEBUG'] = True
app.config['PORT'] = 8080
app.config['HOST'] = "0.0.0.0"
# Sessionのシークレットキー
app.secret_key = b"abc"
# Flaskインスタンスと連動設定
db = SQLAlchemy(app)


# DBの初期化
with app.app_context():
    db.create_all()