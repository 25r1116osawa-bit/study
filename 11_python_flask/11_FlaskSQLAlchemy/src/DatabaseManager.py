from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# モデル定義(テーブルの設計図 db.Modelを継承)
# 「このクラスはデータベースのテーブルになりますよ」
class Todo(db.Model):
    # データベース上のテーブル名を "todo" にしている。
    __tablename__ = "todo"

    # ID
    id = db.Column(db.Integer, primary_key=True)
    # TODO
    todo = db.Column(db.String(80),unique=True)

    # 辞書型で取得
    def getData(self):
        return {
            "id":int(self.id),
            "todo":str(self.todo)
        }