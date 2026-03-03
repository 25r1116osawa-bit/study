from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template(
        "index.html",
        title="Index with Jinja",
        message="これはJinjaテンプレートの利用例です。"
        )

# ダイナミックルーティング
@app.route("/<id>/<name>")
def index2(id,name):
    msg = f"id:{id}, name:{name}"
    return render_template(
        "index.html",
        title="Index with Jinja",
        message=msg
        )

if __name__ == "__main__":
    app.debug = True
    app.run(host="localhost",port=8080)