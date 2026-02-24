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
print("a")
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

print(10 == 1)
print(10 != 1)
print(10 >= 1)
print(10 >  1)
print(10 <= 1)
print(10 <  1)
