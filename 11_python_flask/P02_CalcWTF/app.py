from flask import Flask, abort, flash, redirect, render_template, url_for
from flask_wtf import FlaskForm
from wtforms import  IntegerField, RadioField, SubmitField
from wtforms.validators import DataRequired
app = Flask(__name__)

# CSRF保護のためにシークレットキーが必要
app.config['SECRET_KEY'] = 'abc'

# フォームクラスの定義
class CalcForm(FlaskForm):
    num1 = IntegerField('数値1:', validators=[
        DataRequired(message="整数を入力して下さい。")
    ])
    num2 = IntegerField('数値2:', validators=[
        DataRequired(message="整数を入力して下さい。")
    ])
    op = RadioField('',choices=[('p','加算'),('m','減算'),('mm','乗算'),('d','除算'),])
    submit = SubmitField('計算')

@app.route('/', methods=['GET', 'POST'])
def index():
    form = CalcForm()
    if form.validate_on_submit():
        # DBに登録や編集する処理を入れる場所
        ans = calcLogic(form.num1.data,form.num2.data,form.op.data)
        # 次の画面などにメッセージを送信するメソッド(関数)
        flash(f'答えは{ans}です。')
        return redirect(url_for('index'))
    
    return render_template('index.html', form=form)

# 計算ロジック
def calcLogic(num1,num2,op):
    int_num1 = int(num1)
    int_num2 = int(num2)
    if op == "p":
        ans = int_num1 + int_num2
    elif op == "m":
        ans = int_num1 - int_num2
    elif op == "mm":
        ans = int_num1 * int_num2
    elif op == "d":
        ans = int_num1 /  int_num2
    else:
        abort(404)
    return ans

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port=1234)