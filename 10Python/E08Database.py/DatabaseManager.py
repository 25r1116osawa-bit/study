# =============
# データベースマネージャー(自作のライブラリ)
# =============
from Person import Person,Base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

class DatabaseManager:
    
    # イニシャライザ(DB接続処理)
    def __init__(self,dbFilePath):
        # ORMエンジンの使用準備
        db = create_engine("sqlite:///" + dbFilePath)
        Base.metadata.create_all(bind=db,checkfirst=True)
        Session = sessionmaker(bind=db)
        self.__connection = Session()

    # 切断処理
    def disConnect(self):
        # self.__connection.close()
        pass

    # データ追加
    def add(self,data:Person):
        self.__connection.add(data)
        self.__connection.commit()

    # 全データ取得
    def getAll(self):
        res = self.__connection.query(Person).all()
        pList = []
        for data in res:
            pList.append(data)
        return pList

# 単体テストコード
if __name__ == "__main__":
    p = Person(name="木内",gender=1,age=25)
    db = DatabaseManager("./TestPerson.db")
    db.add(p)

    res = db.getAll()
    for record in res:
        print(record)
    db.disConnect()
