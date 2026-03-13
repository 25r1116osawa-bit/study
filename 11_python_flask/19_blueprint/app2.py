from flask import Blueprint

app2 = Blueprint("APP1",__name__)

@app2.route("/")
def test():
    return "インデックス2"