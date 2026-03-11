from flask import Blueprint

app2 = Blueprint("APP2",__name__,url_prefix="/APP2")

@app2.route("/")
def index():
    return "インデックス2"