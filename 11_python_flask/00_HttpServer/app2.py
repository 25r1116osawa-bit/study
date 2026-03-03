from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse

file = open("index2.html",mode="r",encoding="utf-8")
textIndex = file.read()
file.close()
# print(html)
file = open("next.html",mode="r",encoding="utf-8")
textNext = file.read()
file.close()

class HelloHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # ルーティング処理
        url = urlparse(self.path)
        if url.path == "/": # /の時
            self.index()
        elif url.path == "/next": # /nextの時
            self.next()
        else: # その他のURLは404エラーをレスポンス
            self.error()


    def index(self):
        # ステータスコードの指定
        self.send_response(200)
        self.send_header("Content-type", "text/html; charset=utf-8")
        self.end_headers()
        # HTMLデータの加工
        html = textIndex.format(
            title="初めてのWebサーバー",
            message="ようこそ、HTTPの世界へ"
            )
        # レスポンスのボディデータの設定
        self.wfile.write(html.encode("utf-8"))
        return

    def next(self):
        # ステータスコードの指定
        self.send_response(200)
        self.end_headers()
        # HTMLデータの加工
        html = textNext.format(
                message="Next page!!",
                data="data:this is data"
            )
        # レスポンスのボディデータの設定
        self.wfile.write(html.encode("utf-8"))
        return

    def error(self):
        self.send_error(404,"CANNOT ACCESS!!")

# サーバーの起動準備と起動
server = HTTPServer(('',80), HelloHTTPRequestHandler)
server.serve_forever()