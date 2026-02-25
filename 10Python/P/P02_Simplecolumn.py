import tkinter

root = tkinter.Tk()
root.title("簡易電卓")


lb01 = tkinter.Label(text="値１：")
lb02 = tkinter.Label(text="値２：")
lbAns = tkinter.Label(text="答え")

# 入力フォームの設定
input01 = tkinter.Entry()
input02 = tkinter.Entry()

# ボタンアクション
def add():
    num01 = int(input01.get())
    num02 = int(input02.get())
    lbAns.configure(text = num01+num02)

def sub():
    num01 = int(input01.get())
    num02 = int(input02.get())
    lbAns.configure(text=num01-num02)

def mul():
    num01 = int(input01.get())
    num02 = int(input02.get())
    lbAns.configure(text=num01*num02)

def dib():
    num01 = int(input01.get())
    num02 = int(input02.get())
    lbAns.configure(text = num01/num02)

# ボタンの設定
butAdd = tkinter.Button(text="加算", command = add)
butSub = tkinter.Button(text="減算", command = sub)
butMul = tkinter.Button(text="乗算", command = mul)
butDiv = tkinter.Button(text="除算", command = dib)



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


