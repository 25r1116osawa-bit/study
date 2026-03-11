from flask import Blueprint
from flask.views import MethodView

app2 = Blueprint("APP2",__name__,url_prefix="/APP2")

@app2.route("/")
def index():
    return "インデックス2"

@app2.route("/B")
def indexB():
    return "インデックスB"

class APP2A(MethodView):
    def get(self):
        return "インデックスAPP2A GET"
    def post(self):
        return "インデックスAPP2A POST"

app2.add_url_rule("/A",view_func=APP2A.as_view("APP2A"))