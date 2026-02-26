import tkinter

# インスタンス化
root = tkinter.Tk()

# ルートウィンドウの設定
# ルートウィンドウのタイトル
root.title("簡易電卓")

# ルートウィンドウのサイズ
# なければオートレイアウト
# root.geometry("200x210")

# デザインを整えるため、ウィジェットをまとめるウィジェット
# フレームの宣言
frame01 = tkinter.Frame(root)
frame02 = tkinter.Frame(root)
frame03 = tkinter.Frame(root)
frame04 = tkinter.Frame(root)

# ラベルの設定
lb01 = tkinter.Label(frame01,text="値１：")
lb02 = tkinter.Label(frame02,text="値２：")
lbAns = tkinter.Label(frame04,text="答え")

# 入力フォームの設定
input01 = tkinter.Entry(frame01)
input02 = tkinter.Entry(frame02)

# ボタンアクション
def add():
    # 加算関数
    try:
        num01 = int(input01.get())
        num02 = int(input02.get())
        lbAns.configure(text=num01 + num02)
    except ValueError:
        lbAns.configure(text="整数を入力してください。")

def sub():
    # 減算関数
    try:
        num01 = int(input01.get())
        num02 = int(input02.get())
        lbAns.configure(text=num01 - num02)
    except ValueError:
        # 整数以外の文字列を変換した時
        lbAns.configure(text="整数を入力してください。")

def mul():
    # 乗算関数
    try:
        num01 = int(input01.get())
        num02 = int(input02.get())
        lbAns.configure(text=num01 * num02)
    except ValueError:
        # 整数以外の文字列を変換した時
        lbAns.configure(text="整数を入力してください。")

def div():
    # 除算関数
    try:
        num01 = int(input01.get())
        num02 = int(input02.get())
        lbAns.configure(text=num01 / num02)
    except ValueError:
        # 整数以外の文字列を変換した時
        lbAns.configure(text="整数を入力してください。")
    except ZeroDivisionError:
        # 0で割ろうとした時
        lbAns.configure(text="0割りエラー")

# ボタンの設定
butAdd = tkinter.Button(frame03,text="加算", command=add)
butSub = tkinter.Button(frame03,text="減算", command=sub)
butMul = tkinter.Button(frame03,text="乗算", command=mul)
butDiv = tkinter.Button(frame03,text="除算", command=div)

# デザイン設定
frame01.pack()
frame02.pack()
frame03.pack()
frame04.pack()

lb01.pack(side=tkinter.LEFT)
input01.pack(side=tkinter.LEFT)
lb02.pack(side=tkinter.LEFT)
input02.pack(side=tkinter.LEFT)
butAdd.pack(side=tkinter.LEFT)
butSub.pack(side=tkinter.LEFT)
butMul.pack(side=tkinter.LEFT)
butDiv.pack(side=tkinter.LEFT)
lbAns.pack(side=tkinter.LEFT)

# メイン実行
root.mainloop()