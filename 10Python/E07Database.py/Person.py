# =============
# モデル(Person)
# =============
# 個人情報テーブル
class Person:
    def __init__(self,name,gender, age,id=0):
        self.id = id
        self.name = name
        self.gender = gender
        self.age = age
    
    # 文字列に変換時の対応
    def __str__(self):
        return f"{self.id},{self.name},{self.gender},{self.age}"