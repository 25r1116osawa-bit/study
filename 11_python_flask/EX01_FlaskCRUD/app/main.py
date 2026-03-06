from flask.views import MethodView
from flask_wtf import FlaskForm
from wtforms import EmailField, IntegerField, StringField, SubmitField, TelField
from wtforms.validators import DataRequired, Email, Length  

from . import app,db,Employee,Person
from flask import render_template, redirect, request, url_for

@app.route("/")
def index():
    # 全件取得
    data = Employee.query.all()
    return render_template("index.html",data=data)


# フォームクラス(Employee)
class EmployeePersonForm(FlaskForm):
    name = StringField('お名前', validators=[
        DataRequired(message="名前を入力して下さい。"),
        Length(max=30,message="30文字以内で入力して下さい。")
    ])
    age = IntegerField('年齢',validators=[])
    gender = IntegerField('性別',validators=[])
    tel = TelField('TEL',validators=[])
    email = EmailField('メールアドレス', validators=[
        DataRequired(message="メールアドレスを入力して下さい。"),
        Email(message="正しいメール形式で入力して下さい。"),
        DataRequired(message="名前を入力して下さい。")
    ])
    salary = IntegerField('給与',validators=[])
    dept = IntegerField('部署',validators=[])
    submit = SubmitField('登録')

class EmployeeAdd(MethodView):

    def get(self):
        form = EmployeePersonForm()
        return render_template("employee.html", form=form)

    def post(self):
        form = EmployeePersonForm()

        if form.validate_on_submit():

            new_person = Person(
                name=form.name.data,
                age=form.age.data,
                gender=form.gender.data,
                tel=form.tel.data,
                email=form.email.data
            )

            db.session.add(new_person)
            db.session.commit()

            new_employee = Employee(
                person_id=new_person.id,
                salary=form.salary.data,
                department_id=form.dept.data
            )

            db.session.add(new_employee)
            db.session.commit()

        return redirect(url_for('index'))

app.add_url_rule("/employee",view_func=EmployeeAdd.as_view("employee"))

@app.route("/testData")
def testData():
    newPerson = Person(name="Aさん")
    db.session.add(newPerson)
    db.session.commit()
    newEmp = Employee(id="1",salary=100)
    db.session.add(newEmp)
    db.session.commit()
    return redirect(url_for('index'))
