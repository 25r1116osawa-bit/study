import datetime

from flask import Flask, redirect, render_template, request, url_for
from src.database import db,Todo

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
app.config['DEBUG'] = True
app.config['PORT'] = 1234
app.config['HOST'] = "0.0.0.0"
db.init_app(app)

@app.route("/")
def index():
    titles = ["タイトル1","タイトル2","タイトル3","タイトル4"]
    post = [
        {
            "title":"呪術回線",
            "body":"おもしろい",
            "crieated":"2026/3/5"
        },{
            "title":"ワンピース",
            "body":"おもしろい",
            "crieated":"2026/3/5"
        },{
            "title":"ハンターハンター",
            "body":"おもしろい",
            "crieated":"2026/3/5"
        },{
            "title":"ポケモン",
            "body":"おもしろい",
            "crieated":"2026/3/5"
        }
    ]

    data = Todo.query.all()
    return render_template('index.html',
                           var1="タイトル1",
                           var2="タイトル2",
                           data=data,
                           titles=titles,
                           post=post)
                           



# データの追加 何も入れない場合getになる
@app.route('/add',methods=['POST'])
def add():
    todo = request.form['todo']
    new_todo = Todo(
        todo=todo,
        updatetime=datetime.datetime.now()
        )

    # セッションの開始
    db.session.add(new_todo)
    db.session.commit()
    return redirect(url_for('index'))


@app.route('/delete')
def delete():
    pass

@app.route('/edit')
def edit():
    pass


# DBの初期化処理
with app.app_context():
    db.create_all()



# サーバー実行
if __name__ == '__main__':
    app.run(host=app.config['HOST'],port=app.config['PORT'])