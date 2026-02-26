# =============
# クロージャー
# =============
def func():
    def closure():
        print("クロージャーです。")
    closure()

func()

# クロージャを返す関数
def func2():
    def closure():
        print("クロージャー2です。")
    return closure

closure01 = func2()
closure01()