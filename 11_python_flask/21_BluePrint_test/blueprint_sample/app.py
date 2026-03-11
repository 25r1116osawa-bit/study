from flask import Flask,render_template

app =Flask(__name__)


#blueprintの登録

# フォルダapplication＞フォルダone ＞ファイルviews からone_bp変数をインポート
from application.one.views import one_bp
# onebpに定義したURLがアプリケーション全体で使えるようになる。
app.register_blueprint(one_bp)

from application.two.views import two_bp
app.register_blueprint(two_bp)



@app.route('/')
def show_home():
    return render_template('home.html')

if __name__ == "__main__":
    app.run(host="localhost", port=1234, debug=True)