# =============
# 関数
# =============

# 関数の定義
def add(x,y):
    print(x+y)

add(3,5)
add("aaa","bbb")


# 型が固定されていないため実行時エラーを起こしてしまう。
# add(3,"a")

def add2(x:int,y:int):
    print(x+y)

add2(1,2)


def add_ex(x,y):
    #キャスト
    num1 = int(x)
    num2 = int(y)
    print(num1+num2)
add_ex("1",2)

def add_ex2(x,y):
    if isinstance(x,(int,float)) and isinstance(y,(int,float)):
        print(x+y)

add_ex2(1,2)
add_ex2("4",2)
add_ex2(1.2,3.4)

# 戻り値
def add_re(x,y):
    return x + y

print(add_re(4,6))


# 仮引数の指定
def say(name,msg):
    print(f"{name}さんは『{msg}』と言っている。")


say("A","こんにちは")

# 呼び出しのときに仮引数名を指定できる。
say(msg="こんばんわ",name="B")


# default引数は右側を空欄にすることができない。
def say(msg,name="ななしのごんべえ"):
    print(f"{name}さんは「{msg}と言っている。")
