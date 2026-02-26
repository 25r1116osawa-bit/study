import tkinter

# インスタンス化
root = tkinter.Tk()

# ルートウィンドウの設定
# ルートウィンドウのタイトル
root.title("簡易電卓")

# ルートウィンドウのサイズ
# なければオートレイアウト
# root.geometry("200x210")

# ラベルの設定
lb01 = tkinter.Label(text="値１：")
lb02 = tkinter.Label(text="値２：")
lbAns = tkinter.Label(text="答え")

# 入力フォームの設定
input01 = tkinter.Entry()
input02 = tkinter.Entry()

# ボタンアクション
def add():
    # 加算関数
    num01 = int(input01.get())
    num02 = int(input02.get())
    lbAns.configure(text=num01 + num02)

def sub():
    # 減算関数
    num01 = int(input01.get())
    num02 = int(input02.get())
    lbAns.configure(text=num01 - num02)


def mul():
    # 乗算関数
    num01 = int(input01.get())
    num02 = int(input02.get())
    lbAns.configure(text=num01 * num02)


def div():
    # 除算関数
    num01 = int(input01.get())
    num02 = int(input02.get())
    lbAns.configure(text=num01 / num02)

# ボタンの設定
butAdd = tkinter.Button(text="加算", command=add)
butSub = tkinter.Button(text="減算", command=sub)
butMul = tkinter.Button(text="乗算", command=mul)
butDiv = tkinter.Button(text="除算", command=div)

# デザイン設定
lb01.pack()
input01.pack()
lb02.pack()
input02.pack()
butAdd.pack()
butSub.pack()
butMul.pack()
butDiv.pack()
lbAns.pack()

# メイン実行
root.mainloop()