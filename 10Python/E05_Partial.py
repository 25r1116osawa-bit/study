# =============
# リフレクション
# =============
import fanctools
functools.partial

class Calculator:
    def do_add(self,num1,num2):
        print(num1+num2)

# 普通の使い方
calc = Calculator()
calc.do_add(2,3)

# その場で実行
(calc,"do_add")(3,4)

# 変数に代入
add = getattr(calc,"do_add")
add(4,5)