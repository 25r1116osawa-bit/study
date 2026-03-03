# Flaskのmoduleのインポート
from flask import Flask


# Flaskのインスタンスの生成
app = Flask(__name__)

# routing
# @から始まる行のコードはデコレーターと呼ぶ
# 次の行からメタデータとなる。
# 実行時に追加情報として認識される。


@app.route("/")
# 「/」にアクセスされたときに実行されるメソッド
# returnで情報をレスポンスされる。

def hello_world():
    return "Hello world"

if __name__ == "__main__":
    # デバッグモードで実行
    # ホットリロードが適用される。
    app.debug = True
    # サーバの設定（ホストやポートを指定できる。9
    app.run(host="localhost",port=6400)