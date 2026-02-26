# =============
# Web
# =============
import requests
import json

# DogAPI
URL = "https://dog.ceo/api/breeds/image/random"
# リクエストを送信し、レスポンスを取得
res = requests.get(URL)
# レスポンスのテキストデータを習得
dat = res.text
# テキストをjson解析(dict型に変換)
dic = json.loads(dat)
# 表示
print(dic)
print(dic["message"])

# 犬の画像を取得
res2 = requests.get(dic["message"])
# バイナリデータとして取得
dat2 = res2.content
# ファイル(バイナリデータ)として画像の書き込みの準備
file = open("InputOutput/dog.jpg" , "wb")
# 書き込み
file.write(dat2)
# 書き込み終了
file.close()