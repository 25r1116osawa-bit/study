# =============
# モデル(Person)SQLAlchemy版
# =============
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base

# モデルのベースクラスの取得
Base = declarative_base()

# 個人情報テーブル
class Person(Base):

    # テーブル名
    __tablename__ = "person"

    # カラムの定義
    id = Column(Integer,primary_key=True)
    name = Column(String(30))
    gender = Column(Integer)
    age = Column(Integer)

    def getData(self):
        try:
            id = int(self.id)
        except:
            id = -1
        return{
            "id":id,
            "name":str(self.name),
            "gender":int(self.gender),
            "age":int(self.age)
        }

    # 文字列に変換時の対応
    def __str__(self):
        data = self.getData()
        return f"{data["id"]},{data["name"]},{data["gender"]},{data["age"]}"
