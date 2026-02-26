# =============
# 関数
# =============

# 関数の定義
def add(x,y):
    print(x+y)

# 関数の呼び出し
add(3,5)
add("aaa","bbb")

# 型が固定されていないため実行時エラーを起こしてしまう。
# add(3,"a")

# 型指定(プログラムを実行時にはエラーにはならないが、
# ヒントとして表示できる。)
def add2(x:int,y:int):
    print(x+y)

# プログラミング時方が表示される
add2(3,4)

# ヒントなので、動作してしまう。
add2("a","b")

# 型対策1
def add_ex(x,y):
    # キャスト
    num1 = int(x)
    num2 = int(y)
    print(num2+num1)

add_ex("1",2)
add_ex(1,2)
print()

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

# 通常通りに呼び出す
say("A","こんにちは")
# 呼び出しのときに仮引数名を指定できる。
say(msg="こんばんは",name="B")

# デフォルト引数(デフォルト引数を指定できるのは後ろの引数のみ)
def say(msg,name="ななしのごんべえ"):
    print(f"{name}さんは『{msg}』と言っている。")
say(msg="こんばんは")
