# =============
# 反復構文
# =============

print("-- for文 --")
# 配列の要素を一つずつ取り出す処理を行う。
print("0 - 9")
for i in range(10):
    print(i,end=",")
print()

print("1 - 9")
for i in range(1,10):
    print(i,end=",")
print()

print("文字を一文字ずつ取り出す")
str01 = "abcdefg"
for c in str01:
    print(c,end=",")
print()

print("-- while文 --")

print("0 - 9")
int01 = 0
while int01 < 10:
    print(int01,end=",")
    int01 += 1
print()

print("-- continue,break --")

import random
count = 0

while True:
    count += 1
    rnd = random.randint(1,9)
    print(count,":",rnd)
    if rnd == 4:
        break
    elif rnd % 3 == 0:
        continue
    print("3の倍数じゃないよ！")
print(count,"回繰り返しました。",sep="")

print("-- elseについて --")
arr01 = ["A","B","C","D","E"]
arr02 = []
for element in arr01:
    print(element)
else:
    print("出力完了")

print("-- elseとbreakについて --")
for element in arr01:
    print(element)
    if element == "C":
        break
else:
    print("最後まで出力完了")

# おまけ
print("0 - 9")
end = 10
for index,element in enumerate(range(2,end)):
    print(index,element)
print()
