from flask import Flask, abort, render_template, request
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

@app.route("/Hello",methods=["Get","Post"])
def hello():
    methodName = request.method
    if methodName == "GET":
        name = request.args.get("name")
    elif methodName == "POST":
        name = request.form.get("name")
    else:
        abort(404)
    
    msg = f"こんにちわ{name}、私は{methodName}で、来ました。"
    return render_template(
        "index.html",
        title = f"{methodName}メソッド受付",
        message=msg
        )


if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port=8080)