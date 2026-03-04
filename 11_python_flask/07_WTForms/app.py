from flask import Flask, abort, flash, redirect, render_template, request, url_for
from flask_wtf import FlaskForm
from wtforms import EmailField, StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, Email, Length  

app = Flask(__name__)

@app.route("/")
def index():
    return render_template(
        "index.html",
        title="Index with Jinja",
        message="これはJinjaテンプレートの利用例です。"
        )

# ダイナミックルーティング
@app.route("/<id>/<name>")
def index2(id,name):
    msg = f"id:{id}, name:{name}"
    return render_template(
        "index.html",
        title="Index with Jinja",
        message=msg
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
    
    msg = f"こんにちわ{name}、私は{methodName}で、来ました。"
    return render_template(
        "index.html",
        title = f"{methodName}メソッド受付",
        message=msg
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

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port=8080)