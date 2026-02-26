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
def calc(op):
    # 計算関数
    ansMsg = ""
    try:
        num01 = int(input01.get())
        num02 = int(input02.get())
        if op == 1:
            ansMsg = num01 + num02
        elif op == 2:
            ansMsg = num01 - num02
        elif op == 3:
            ansMsg = num01 * num02
        elif op == 4:
            ansMsg = num01 / num02

    except ValueError:
        # 整数以外の文字列を変換した時
        ansMsg = "整数を入力してください。"
    except ZeroDivisionError:
        # 0で割ろうとした時
        ansMsg = "0割りエラー"
    lbAns.configure(text=ansMsg)
# ボタンの設定
butAdd = tkinter.Button(frame03,text="加算", command=lambda: calc(1))
butSub = tkinter.Button(frame03,text="減算", command=lambda: calc(2))
butMul = tkinter.Button(frame03,text="乗算", command=lambda: calc(3))
butDiv = tkinter.Button(frame03,text="除算", command=lambda: calc(4))

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