# SQLAlchemy（データベース操作ライブラリ）
from flask_sqlalchemy import SQLAlchemy

# Flask-Loginのユーザークラス用Mixin
# login_user / current_user / login_required などを使うために必要
from flask_login import UserMixin

# SQLAlchemyのカラム型
from sqlalchemy import Integer, String

# SQLAlchemy2系の書き方（型付きORM）
from sqlalchemy.orm import Mapped, mapped_column

# パスワードを安全に保存するためのハッシュ関数
from werkzeug.security import generate_password_hash, check_password_hash

# Optional型（Noneを許可する）
from typing import Optional


# SQLAlchemyのインスタンス作成
# app.pyで db.init_app(app) してFlaskと接続する
db = SQLAlchemy()


# Userテーブルのモデル
# UserMixinを継承することでFlask-Loginと連携できる
class User(UserMixin, db.Model):

    # ユーザーID（主キー）
    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True
    )

    # ユーザー名
    # unique=True → 同じユーザー名を登録できない
    # nullable=False → 空は許可しない
    username: Mapped[str] = mapped_column(
        String(50),
        unique=True,
        nullable=False
    )

    # パスワード（ハッシュ値）
    # Optional → Noneも許可
    password_hash: Mapped[Optional[str]] = mapped_column(
        String(128)
    )

    # パスワードをハッシュ化して保存するメソッド
    # 生パスワードをそのまま保存しないための重要な処理
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    # 入力されたパスワードが正しいか確認するメソッド
    # ログイン処理で使用
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)