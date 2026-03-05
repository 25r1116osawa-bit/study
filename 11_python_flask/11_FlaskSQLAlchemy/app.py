from flask import Flask, redirect, render_template, request, url_for
from src.DatabaseManager import db,Todo

# サーバー設定
app = Flask("app")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
app.config['DEBUG'] = True
app.config['PORT'] = 1234
app.config['HOST'] = "0.0.0.0"
db.init_app(app)

# 全データ表示
@app.route('/')
def index():
    # 全件取得
    data = Todo.query.all()
    return render_template('index.html',data=data)

# データの追加 何も入れない場合getになる
@app.route('/add',methods=['POST'])
def add():
    todo = request.form['todo']
    new_todo = Todo(todo=todo)
    # セッションの開始
    db.session.add(new_todo)
    # 
    db.session.commit()
    return redirect(url_for('index'))

# データ削除
@app.route('/del_todo/<int:id>')
def del_todo(id):
    del_data = Todo.query.filter_by(id=id).first()
    db.session.delete(del_data)
    db.session.commit()
    return redirect(url_for('index'))


# DBの初期化 データベースに実際にテール部を作る処理
# 初回のみの実行「存在しないテーブルがあれば作る」
with app.app_context():
    db.create_all()

# サーバー実行
if __name__ == '__main__':
    app.run(host=app.config['HOST'],port=app.config['PORT'])