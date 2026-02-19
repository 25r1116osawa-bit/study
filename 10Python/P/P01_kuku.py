print("Hello World")
Num4 = 4
NumDouble = 2


print("0 - 9")
end = 10
for index,element in enumerate(range(2,end)):
    print(index,element)
print()


# 材料、4 8 12 ... 4の倍数を計算する。　結果を9個ならべる



# 課題1: 4の段を表示
for i in range(1,10):
    print(i*Num4,end=" ")
print()

# 課題2: 1の段から9の段を表示
for i in range(1,10):
    print(i,end=" ")
print()

print("--------")
# 課題3: 1の段から9の段の式と積を表示
for i in range(1, 10):
	for j in range(1, 10):
		print(i ,"×" ,j ,"=" ,i*j, end= "\n")
	print()

# 課題4: 九九表を作成
for i in range(1, 10):
	for j in range(1, 10):
		print(i * j, end=" ")


# 課題5: 九九表を作成し、整える。
sample1_list = list(range(10))
for i in range(1, 10):
	for j in range(1, 10):
		test = map(i * j,sample1_list)
		
		
