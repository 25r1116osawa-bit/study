# =============
# ロジック
# =============
from Person import Person
import DatabaseManager as DM

def add(db:DM.DatabaseManager):
    print("名前を入力して下さい。")
    name = input()
    gender = numberInput("性別を入力して下さい。\n[1]男[2]女[3]その他")
    age = numberInput("年齢を入力して下さい。")
    p = Person(name,gender,age)

    # DBへ追加
    db.add(p)
    print("登録が実行されました。")

def getAll(db:DM.DatabaseManager):
    res = db.getAll()
    if len(res) == 0:
        print("データがありません。")
    else:
        print("ID,氏名,性別,年齢")
        for record in res:
            print(record.id,end=",")
            print(record.name,end=",")
            print(record.gender,end=",")
            print(record.age)
        print("全件表示が完了しました。")

# 数値チェック付き標準入力
def numberInput(msg):
    while True:
        print(msg)
        cmd = input()
        try:
            return int(cmd)
        except ValueError:
            print("整数を入れてください。")
