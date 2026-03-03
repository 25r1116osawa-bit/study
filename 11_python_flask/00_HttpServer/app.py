from http.server import HTTPServer,SimpleHTTPRequestHandler

# サーバの起動準備
# server

# 第一引数に、サーバ名とポート番号 フォルダの中身をそのまま表示
server = HTTPServer(('',8000),SimpleHTTPRequestHandler)

# サーバの起動
server.serve_forever()
