from flask import Flask

app = Flask(__name__)

from app2 import app2
app.register_blueprint(app2)

@app.route("/")
def index():
    return "インデックス"

if __name__ == "__main__":
    app.run(host="localhost", port=8080, debug=True)