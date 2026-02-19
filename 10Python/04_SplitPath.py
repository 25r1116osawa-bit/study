# =============
# 分岐構文
# =============

# 標準入力
print("数値を入力してください。\n>",end="")
str01 = input() # プログラムが一時停止する。(str型)
print(str01)
# キャスト(型変換)
# 文字列を数値に変換
int01 = int(str01)
print(int01)
print(type(str01))
print(type(int01))
print(str01 + "100") # 型を合わせてください。
print(int01 + 100)

print("-- 分岐構文 --")
print("-- if文 --")

print("--| if文 |-- ")
if int01 >= 60:
    print("60点以上です。")

print("--| if-else文 |-- ")
if int01 >= 60:
    print("60点以上です。")
else:
    print("60点未満です。")

print("--| if-else if-else文 |-- ")
if int01 >= 80:
    print("80点以上です。")
elif int01 >= 60:
    print("60点以上です。")
else:
    print("60点未満です。")

# 三項演算子
print("はい[Y],いいえ[N]\n>",end="")
str02 = input()
str03 = "[Y]と入力された。" if str02 == "Y" else "[Y]以外が入力された。"
print(str03)