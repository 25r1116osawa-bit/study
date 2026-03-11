from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from werkzeug.security import generate_password_hash, check_password_hash
from typing import Optional


db = SQLAlchemy()

class User(UserMixin, db.Model):

    # ユーザーID（主キー）
    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True
    )

    username: Mapped[str] = mapped_column(
        String(50),
        unique=True,
        nullable=False
    )

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