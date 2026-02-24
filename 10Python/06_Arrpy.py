#==========
#配列
#==========

print("--配列--")


# 文字列の配列
arr01 = ["a","b","c"]
print(arr01)
print(type(arr01))

#様々が型を混同させることができる
arr02 = ["a",1,False]
print(arr02)
print(type(arr02))


# 要素の取得方法
print(arr02[0])
print(arr02[1])
print(arr02[2])
# print(arr02[3]) 存在しない要素を叩くと実行時エラーが発生する。


# 配列操作
print("--配列の操作--")
arr03 = [6,2,4,3,5,1]
print(arr03)


#要素の最後に追加
arr03.append(7)
print(arr03)

#要素の挿入　
arr03.insert(2,8)
print(arr03)


# 要素の削除
# その要素の値を削除（インデックスではないので気を付ける。)
arr03.remove(6)
print(arr03)

# 要素を取得してからその要素を削除
# 引数にインデックスを指定することができる。
print(arr03.pop())
print(arr03)

# 検索結果に何件当たりましたなどでよく使う。
print(len(arr03))

# ソート
arr03.sort()
print(arr03)

# 要素の全削除
arr03.clear()
print(arr03)


# 拡張for文
arr04 = ["A","B","C","D","E"]
for element in arr04:
    print(element)
else:
    print("出力完了")


# おまけ
print("おまけ")
while True:
    if len(arr04) == 0:
        break
    elif len(arr04) == 1:
        print(arr04.pop(0))
    else:
        print(arr04.pop(0),end=",")
