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
    data = Todo.query.all()
    return render_template('index.html',data=data)



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