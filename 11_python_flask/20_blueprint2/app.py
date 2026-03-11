from flask import Flask, url_for

app = Flask(__name__)

from app2 import app2
app.register_blueprint(app2)

@app.route("/")
def index():
    html = "インデックス"
    html += url_for('APP2.index')

    return html

if __name__ == "__main__":
    app.run(host="localhost", port=1234, debug=True)