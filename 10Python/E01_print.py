# print関数の使い方

int01 = 10
int02 = 20
int03 = 30

# 複数データ出力
print(int01,int02,int03)
# 区切り文字の変更(defaultは" "(半角スペース))
print(int01,int02,int03,sep="/")
# 語尾文字の変更(defaultは"\n"(改行コード))
print(int01,int02,int03,end="です。")
print(int01,int02,int03,end="です。")
print(int01,int02,int03,end="です。\n")
print(int01,int02,int03,end="です。\n")

print(int01,int02,int03,sep="/",end="おわりです。")
print(int01,int02,int03,end="おわりです。",sep="/")
print()

# 文字列関係のメソッドなど
# 文字列内変数展開
print("-- 文字列内変数展開 --")
print("数値",int01,"です。",sep="")
# formatメソッド
print("数値{}です。".format(int01))
print("数値{}と{}です。".format(int01,int02))
print("数値{1}と{0}です。".format(int01,int02))
print("数値{A}と{B}です。".format(B=int01,A=int02))

# 文字の演算
# 文字列連結
str01 = "abc" + "def"
print(str01)
# 繰り返し
str02 = "abc" * 3
print(str02)

# 書式化演算子
str03 = "数値%d" % int01
print(str03)
str03 = "数値%f" % int01
print(str03)
str03 = "数値%s" % int01
print(str03)

# なんとかリテラル
# フォーマット済み文字列リテラル
str04 = f"数値{int01}"
print(str04)

# 生リテラル
str05 = r"abc/def/ghi\n\n\n"
print(str05)
str06 = "abc/def/ghi\n\n\n"
print(str06)

# バイト列リテラル
str07 = b"abc/def/ghi\n\n\n"
print(str07)
print(type(str07))

str08 = "ハローワールド".encode('utf-8')
print(str08)
print(type(str08))

# utf-8として扱う
str09 = u"ハローワールド"
print(str09)
print(type(str09))

# 組み合わせることもできる。
print(rf"\next\abc\{int01}")