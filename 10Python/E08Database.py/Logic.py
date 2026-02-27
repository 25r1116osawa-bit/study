# =============
# ロジック
# =============
from Person import Person
import DatabaseManager as DM

# DBに追加
def add(db:DM.DatabaseManager):
    print("名前を入力して下さい。")
    name = input()
    gender = numberInputRange("性別を入力して下さい。\n[1]男[2]女[3]その他",1,3)
    age = numberInputRange("年齢を入力して下さい。",0,120)
    p = Person(name=name,gender=gender,age=age)
    print("ID,氏名,性別,年齢")
    print(p)
    if confirm("本当に登録してもよろしいでしょうか？"):
        # DBへ追加
        db.add(p)
        print("登録が実行されました。")
    else:
        print("登録がキャンセルされました。")

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

# 範囲指定、数値チェック付き標準入力
def numberInputRange(msg,min,max):
    while True:
        cmd = numberInput(msg)
        if min <= cmd <= max:
            return cmd
        else:
            print(f"{min}~{max}の範囲の整数を入力してください。")

# YES、NOワンクッション
def confirm(msg=""):
    while True:
        if msg != "":
            print(msg)
        print("[y]YES[n]NO")
        cmd = input()
        if cmd in ["y","Y"]:
            return True
        elif cmd in ["n","N"]:
            return False
        else:
            print("正しく入力してください。")