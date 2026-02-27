# =============
# SQLAlchemy(ORMの利用)
# =============

from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# モデルのベースクラスの取得
Base = declarative_base()

# モデルの定義
class Person(Base):
    
    # テーブル名
    __tablename__ = "person"

    # カラムの定義
    id = Column(Integer,primary_key=True)
    name = Column(String(30))
    gender = Column(Integer)
    age = Column(Integer)
    
    def getData(self):
        return{
            "id":int(self.id),
            "name":str(self.name),
            "gender":int(self.gender),
            "age":int(self.age)
        }

if __name__ == "__main__":
    # ORMエンジンの使用準備
    db = create_engine("sqlite:///InputOutput/PersonAlchemy.db")

    # テーブルを自動生成する準備
    Base.metadata.create_all(bind=db,checkfirst=True)

    # セッション(DBとのやり取りを行うオブジェクト)の準備
    Session = sessionmaker(bind=db)

    # セッション開始
    ses = Session()

    # データベースの操作
    # データの挿入
    p1 = Person(name="木内",gender=1,age=37)
    p2 = Person(name="大澤",gender=1,age=37)
    p3 = Person(name="沙織",gender=1,age=37)
    # DBへ追加処理
    ses.add(p1)
    # DBへコミット実行
    ses.commit()

    people = ses.query(Person).all()

for p in people:
    print(p.getData())
    
