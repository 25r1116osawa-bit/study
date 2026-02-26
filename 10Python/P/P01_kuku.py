# 課題1:4の段の積を表示
for i in range(1,10):
    print(i * 4)

# 課題2:1の段から9の段の積を表示
for i in range(1,10):
    for j in range(1,10):
        print(i * j)

# 課題3:1の段から9の段の式と積を表示
for i in range(1,10):
    for j in range(1,10):
        print(i , "*" , j ,"=", i * j)

# 課題4:九九表を作成して下さい。
for i in range(1,10):
    for j in range(1,10):
        print(i*j,end=" ")
    print()

# 課題5:九九表を作成して整えて下さい。
for i in range(1,10):
    for j in range(1,10):
        ans = i * j
        print(ans,end=" ") if ans > 9 else print(" ",ans,end=" ",sep="")
    print()
