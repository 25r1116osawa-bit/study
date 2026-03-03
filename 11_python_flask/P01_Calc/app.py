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
@app.route("/calc/<int:num1>/<int:num2>/<op>")
def index2(num1,num2,op):
    if op == "p":
        ans = num1 + num2
    elif op == "m":
        ans = num1 - num2
    elif op == "mm":
        ans = num1 * num2
    elif op == "d":
        ans = num1 /  num2
    else:
        abort(404)
    return render_template(
        "index.html",
        title="電卓計算結果",
        message=ans
        )

@app.route("/calc",methods=["GET","POST"])
def calc():

    methodName = request.method
    try:
        if methodName == "GET":
            num1 = int(request.args.get("num1"))
            num2 = int(request.args.get("num2"))
        elif methodName == "POST":
            num1 = int(request.form.get("num1"))
            num2 = int(request.form.get("num2"))
        else:
            abort(404)
        op = request.values.get("op")
        if op == "p":
            ans = num1 + num2
        elif op == "m":
            ans = num1 - num2
        elif op == "mm":
            ans = num1 * num2
        elif op == "d":
            ans = num1 /  num2
        else:
            abort(404)
        return render_template(
            "index.html",
            title="電卓計算結果",
            message=ans
            )
    except:
        abort(404)


if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port=6040)