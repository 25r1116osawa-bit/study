# =============
# クラス
# =============

class Car:
    # アトリビュート(クラス変数)
    # speed = 0
    # number = 0

    def __init__(self):
        # インスタンス変数
        self.speed = 0
        self.number = 0

    # 情報表示メソッド
    def disp(self):
        print("------------")
        print(f"番号：{self.number}")
        print(f"速度：{self.speed}")

# 引数なしでインスタンス化
car01 = Car()
car01.disp()

# 値を代入し再度表示
car01.speed = 10
car01.number = 1
car01.disp()

car02 = Car()
car02.disp()


class CarEx(Car):
    # 加速メソッド
    def accel(self,speed=1):
        self.speed += speed

    # オーバーライド
    def disp(self):
        print("------------")
        print(f"車種：{self.__class__.__name__}")
        # 親のメソッドの呼び出し方
        super().disp()
    
carEx01 = CarEx()
carEx01.disp()
print()
carEx01.accel(5)
carEx01.disp()
print()


print("-----多重継承-----")
class Mobile:
    def __init__(self,driver="名無しさん"):
        self.driver = driver

    def disp(self):
        print(f"運転：{self.driver}")

class Vehicle(CarEx,Mobile):
    def __init__(self, speed=0, number=0,driver="名無しさん"):
        CarEx.__init__(self,speed,number)
        Mobile.__init__(self,driver)
    
    def disp(self):
        CarEx.disp(self)
        Mobile.disp(self)

vehicle01 = Vehicle()
vehicle01.disp()
print()

vehicle02 = Vehicle(driver="木内")
vehicle02.disp()
vehicle02.accel(15)
vehicle02.disp()
print()