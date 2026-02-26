# =============
# リフレクション
# =============
import functools

class Calculator:
    def do_add(self,num1,num2):
        print(num1+num2)

# 普通の使い方
calc = Calculator()
calc.do_add(2,3)

# その場で実行
functools.partial(calc.do_add,3,4)()

# 変数に代入
add = functools.partial(calc.do_add,4,5)
add()