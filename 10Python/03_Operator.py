# =============
# 演算子
# =============

print("-- 演算子 --")
print("-- 四則演算子 --")
int01 = 2
int02 = 5

# 加算
print(int01 + int02)
# 減算
print(int01 - int02)
# 乗算
print(int01 * int02)
# 除算
print(int01 / int02)
print(type(int01 / int02))
# 除算(小数点以下切り捨て)
print(int01 // int02)
print(type(int01 // int02))
# 剰余算
print(int01 % int02)
# 冪乗
print(int01 ** int02)

print("-- 代入演算子 --")
# 代入
int03 = 10
# 加算代入
int03 += 3
print(int03)

int04 = 10
# 冪乗代入
int04 **= 5
print(int04)

# インクリメント、デクリメントは無い
# i = 10
# i++,i--

print("-- 比較演算子 --")

# 計算結果は真偽値
bool01 = 10 != 1
print(bool01)

# 等号
print(10 == 1)
# 不等号
print(10 != 1)
# 以下
print(10 >= 1)
# より小さい
print(10 >  1)
# 以上
print(10 <= 1)
# より大きい
print(10 <  1)

print("-- 論理演算子 --")

# かつ
print(True and True)
# または
print(True or True)
# 否定
print(not True)
# 等価
print(1 is 10)
# 不等価
print(1 is not 10)

# 配列の中に存在するか確認する演算子
print(3 in [1,2,3,4,5,6])
print(3 not in [1,2,3,4,5,6])
