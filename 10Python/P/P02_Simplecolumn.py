import tkinter as tk

root = tk.Tk()
root.title("簡易電卓")
root.geometry("500x200")

# ===== 入力欄 =====
label1 = tk.Label(root, text="値1：")
label1.grid(row=0, column=0)

input1 = tk.Entry(root)
input1.grid(row=0, column=1)

label2 = tk.Label(root, text="値2：")
label2.grid(row=1, column=0)

input2 = tk.Entry(root)
input2.grid(row=1, column=1)

# ===== 計算関数 =====
def add():
    value1 = int(input1.get())
    value2 = int(input2.get())
    result_label.config(text=f"結果：{value1 + value2}")

def minus():
    value1 = int(input1.get())
    value2 = int(input2.get())
    result_label.config(text=f"結果：{value1 - value2}")

def multiplier():
    value1 = int(input1.get())
    value2 = int(input2.get())
    result_label.config(text=f"結果：{value1 * value2}")

def quotient():
    value1 = int(input1.get())
    value2 = int(input2.get())
    result_label.config(text=f"結果：{value1 / value2}")    

# ===== ボタンエリア =====
button_frame = tk.Frame(root)
button_frame.grid(row=2, column=0, columnspan=2)

tk.Button(button_frame, text="加算", command=add).grid(row=0, column=0)
tk.Button(button_frame, text="減算", command=minus).grid(row=0, column=1)
tk.Button(button_frame, text="乗算", command=multiplier).grid(row=0, column=2)
tk.Button(button_frame, text="除算", command=quotient).grid(row=0, column=3)

# ===== 結果表示 =====
result_label = tk.Label(root, text="結果：")
result_label.grid(row=3, column=0, columnspan=2)

root.mainloop()


