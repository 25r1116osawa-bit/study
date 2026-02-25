def func():
    def closure():
        print("クロージャです。")
    closure()

func()


def func2():
    def closure():
        print("クロージャ2です。")
    return closure

closure01 = func2()
closure01()