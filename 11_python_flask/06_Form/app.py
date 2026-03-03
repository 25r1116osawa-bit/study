from flask import Flask, render_template, request
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

@app.route("/Hello",methods=["Get"])
def helloGet():
    print(request)
    methodName = request.method
    name = request.args.get("name")
    msg = f"こんにちわ{name}、私は{methodName}で、来ました。"
    return render_template(
        "index.html",
        title = "GETメソッド受付",
        message=msg
        )

@app.route("/Hello",methods=["Post"])
def helloPost():
    methodName = request.method
    name = request.form.get("name")
    msg = f"こんにちわ{name}、私は{methodName}で、来ました。"
    return render_template(
        "index.html",
        title = "POSTメソッド受付",
        message=msg
        )

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port=8080)