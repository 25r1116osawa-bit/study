from flask import Flask, url_for
from app2 import app2 

app = Flask(__name__)
app.register_blueprint(app2,url_prefix="/APP2")

@app.route("/")
def index():
    url = url_for("APP1.test")
    return url

if __name__ == "__main__":
    app.run(host="localhost", port=8080, debug=True)