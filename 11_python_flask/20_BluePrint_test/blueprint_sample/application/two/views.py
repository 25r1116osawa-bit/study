from flask import Blueprint ,render_template

# one_bpという名前のインスタンスを作成
# 上記の名前はurl_for関数で使用ができる。
# one_appはblueprintに名前をつけている。
# __name__は現在実行されているモジュールを指定している。
# urlprefixは、URLの先頭に追加される文字列を指定 今回の場合、/oneが追加


two_bp = Blueprint('two_app',__name__,url_prefix='/two')


@two_bp.route('/')
def show_template():
    return render_template('two/index.html')