# =============
# モデル(Person)
# =============
# 個人情報テーブル　今回は、実際のテーブルを見ながら作る。
class Person:
    def __init__(self,name,gender,age,id=0):
        print("イニシャライザーが実行されました")
        self.id = id
        self.name = name
        self.gender = gender
        self.age = age

    # 文字列に変換時の対応
    def __str__(self):
        return f"{self.id},{self.name},{self.gender},{self.age}"

