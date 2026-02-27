# =============
# データベースマネージャー(自作のライブラリ)
# =============
import sqlite3
from Person import Person

class DatabaseManager:
    
    # イニシャライザ(DB接続処理)
    def __init__(self,dbFilePath):
        self.__connection = sqlite3.connect(dbFilePath)

    # 切断処理
    def disConnect(self):
        self.__connection.close()

    # テーブルを生成するメソッド
    def __createTable(self):
        sql = "CREATE TABLE person(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,gender INTEGER, age INTEGER)"
        self.__connection.execute(sql)

    # データ追加
    def add(self,data:Person):
        try:
            sql = "INSERT INTO person(name,gender,age) VALUES('{}',{},{})".format(data.name,data.gender,data.age)
            self.__connection.execute(sql)
            self.__connection.commit()
        except sqlite3.OperationalError as ex:
            if ex.args[0] == "no such table: person":
                # テーブル生成
                self.__createTable()
                # 挿入に失敗しているので、再度追加命令
                self.add(data)
            else:
                raise ex
        except Exception as ex:
            raise ex

    # 全データ取得
    def getAll(self):
        try:
            sql = "SELECT * FROM person"
            res = self.__connection.execute(sql)
            # Person型の配列へ変換
            pList = []
            for p in res:
                # 分割代入
                id,name,gender,age = p
                pList.append(Person(name,gender,age,id))
            return pList
        except sqlite3.OperationalError as ex:
            # personテーブルが存在しない時
            if ex.args[0] == "no such table: person":
                return []
            else:
                raise ex

# 単体テストコード
if __name__ == "__main__":
    p = Person("木内",1,25)
    db = DatabaseManager("./TestPerson.db")
    db.add(p)

    res = db.getAll()
    for record in res:
        print(record)
    db.disConnect()
