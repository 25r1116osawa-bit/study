from flask import Flask, abort, flash, redirect, render_template, request, session, url_for
from flask.views import MethodView
from flask_wtf import FlaskForm
from wtforms import EmailField, StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Email, Length  

app = Flask(__name__)

@app.route("/")
def index():
    return render_template(
        "index.html",
        title="Index with Jinja",
        message="これはJinjaテンプレートの利用例です。",
        mode=0
        )

# ダイナミックルーティング
@app.route("/<id>/<name>")
def index2(id,name):
    msg = f"id:{id}, name:{name}"
    return render_template(
        "index.html",
        title="Index with Jinja",
        message=msg,
        mode=0
        )

@app.route("/Hello",methods=["Get","Post"])
def hello():
    methodName = request.method
    if methodName == "GET":
        name = request.args.get("name")
    elif methodName == "POST":
        name = request.form.get("name")
    else:
        abort(404)
    mode = 1
    if name == "":
        mode = 2
        msg = ""
    else:
        msg = f"こんにちわ{name}、私は{methodName}で、来ました。"
    return render_template(
        "index.html",
        title = f"{methodName}メソッド受付",
        message=msg,
        mode=mode
        )

# CSRF保護のためにシークレットキーが必要
app.config['SECRET_KEY'] = 'abc'

# フォームクラスの定義
class ContactForm(FlaskForm):
    name = StringField('お名前', validators=[
        DataRequired(message="名前を入力して下さい。"),
        Length(max=30,message="30文字以内で入力して下さい。")
    ])
    email = EmailField('メールアドレス', validators=[
        DataRequired(message="メールアドレスを入力して下さい。"),
        Email(message="正しいメール形式で入力して下さい。"),
        DataRequired(message="名前を入力して下さい。")
    ])
    message = TextAreaField('問い合わせ内容', validators=[
        DataRequired(message="問い合わせ内容を入力して下さい。"),
    ])
    submit = SubmitField('送信します。')

@app.route('/WTForm', methods=['GET', 'POST'])
def wtf_form():
    form = ContactForm()
    if form.validate_on_submit():
        # DBに登録や編集する処理を入れる場所
        
        # 次の画面などにメッセージを送信するメソッド(関数)
        flash(f'ありがとう、{form.name.data}さん！メッセージを受け付けました。')
        return redirect(url_for('success'))
    
    return render_template('WTForm.html', form=form)

@app.route('/success')
def success():
    return render_template("success.html")

class Member:
    def __init__(self,id,name,age,gender):
        self.id = id
        self.name = name
        self.age = age
        self.gender = gender 

@app.route('/memberList')
def menberList():
    columnList = ["id","氏名","年齢","性別"]

    listData = [
        Member(0,"木内A",30,1),
        Member(1,"木内B",31,1),
        Member(2,"木内C",32,2),
        Member(3,"木内D",33,1),
        Member(4,"木内E",34,1),
        Member(5,"木内F",35,2),
        Member(6,"木内G",36,1)
    ]
    return render_template("memberList.html",
                           title="一覧",
                           columnList=columnList,
                           listData=listData
                           )

@app.route("/escape")
def escape():
    reflag = request.args.get("flag")
    flag = True
    if reflag == "false":
        flag = False        

    scriptCode = '<script>alert("アラートの実行")</script>'

    return render_template("escape.html",
                           title="HTMLエスケープ",
                           flag=flag,
                           scriptCode=scriptCode
                           )

class LoginSystem(MethodView):
    def get(self):
        msg = session.pop("msg","")
        if "id" in session:
            return redirect(url_for("loginSuccess"))
        return render_template("login.html",msg=msg)

    def post(self):
        id = request.form.get("id")
        password = request.form.get("pass")
        if id == "abc" and password == "aaa":
            session["id"] = id
            return redirect(url_for("loginSuccess"))
        return render_template("login.html")
    
app.add_url_rule("/login",view_func=LoginSystem.as_view("LS"))

@app.route("/logout")
def logout():
    session.pop("id",None)
    session.clear()
    session["msg"] = "ログアウトされました。"
    return redirect(url_for("LS"))

@app.route("/loginSuccess")
def loginSuccess():
    return render_template("loginSuccess.html",id=session["id"])


if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port=8080)
