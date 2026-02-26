# =============
# ファイルの読み書き
# =============

# ファイルの読み込み
# テキストファイルのファイルオープン(読み込み専用)
inputFile = open("InputOutput/input.csv",encoding="utf-8")

# ファイルを１行ずつ読み込む処理
print("--- 一行ずつ読み込み ---")
for line in inputFile:
    # print(line)
    list = line.split(sep=",")
    print(list)

for line in inputFile:
    # print(line)
    list = line.split(sep=",")
    print(list)

# inputFile は どこまで読み込んだか覚えているので、
# 繰り返した場合、即終了してしまう。

# 読み込み中の場所を変更します。
inputFile.seek(0)

for line in inputFile:
    # print(line)
    list = line.split(sep=",")
    print(list)

inputFile.seek(0)
# テキストデータをすべて読み込む
print("--- すべて読み込む ---")
text = inputFile.read()
print(text)

# 改行コードが\rの時
lines = text.split("\r")
if len(lines) == 1:
    #改行コードが\rの時失敗したら\nで再度分割する。
    lines = text.split("\n")
print(lines)

memberList = []
for line in lines:
    data = line.split(",")
    if len(data) >= 4 and data[3] == "男性":
        memberList.append(data)


print(memberList)


inputFile.seek(0)

print(inputFile.readline(),end="")
print(inputFile.readline(),end="")
print(inputFile.readline(),end="")
print(inputFile.readline(),end="")
print(inputFile.readline(),end="")
print(inputFile.readline(),end="")
print(inputFile.readline(),end="")
print(inputFile.readline(),end="")
print(inputFile.readline(),end="")
print(inputFile.readline(),end="")

# 読み込み処理終了
# テキストファイルのファイルクローズ
inputFile.close()

# テキストファイルのファイルオープン(書き込み専用)
outputFile = open("InputOutput/output.csv","wt",encoding="utf-8")
outputFile.write("No.,名前,年齢,性別\n")


for data in memberList:
    outputFile.write(",".join(data)+"\n")

# kaki 込み処理終了
outputFile.close()
