from flask import Blueprint, render_template, redirect, url_for
from flask.views import MethodView
from flask_wtf import FlaskForm
from wtforms import EmailField, IntegerField, StringField, SubmitField, TelField, SelectField
from wtforms.validators import DataRequired, Email, Length  

from ... import db
from ...src.model.employee import Employee
from ...src.model.person import Person
from ...src.model.department import Department

employee_bp = Blueprint("employee", __name__)

# フォームクラス
class EmployeePersonForm(FlaskForm):
    name = StringField('お名前', validators=[
        DataRequired(message="名前を入力して下さい。"),
        Length(max=30,message="30文字以内で入力して下さい。")
    ])
    age = IntegerField('年齢')
    gender = IntegerField('性別')
    tel = TelField('TEL')
    email = EmailField('メールアドレス', validators=[
        DataRequired(message="メールアドレスを入力して下さい。"),
        Email(message="正しいメール形式で入力して下さい。")
    ])
    salary = IntegerField('給与')
    dept = SelectField('部署', coerce=int)
    submit = SubmitField('登録')


# 一覧
@employee_bp.route("/")
def index():
    data = Employee.query.all()
    return render_template("index.html", data=data)


# 従業員詳細
@employee_bp.route("/employee/<int:id>")
def employee_detail(id):
    emp = Employee.query.get_or_404(id)
    return render_template("employee_detail.html", emp=emp)


# 従業員削除
@employee_bp.route("/employee/delete/<int:id>", methods=['POST'])
def employee_delete(id):
    emp = Employee.query.get_or_404(id)
    person = emp.person

    db.session.delete(emp)

    if person:
        db.session.delete(person)

    db.session.commit()

    return redirect(url_for('employee.index'))


# 従業員追加
class EmployeeAdd(MethodView):

    def get(self):
        form = EmployeePersonForm()

        form.dept.choices = [(0, "部署なし")] + [
            (d.id, d.name) for d in Department.query.all()
        ]

        return render_template("employee.html", form=form)


    def post(self):
        form = EmployeePersonForm()

        form.dept.choices = [(0, "部署なし")] + [
            (d.id, d.name) for d in Department.query.all()
        ]

        if form.validate_on_submit():

            name = form.name.data
            age = form.age.data
            gender = form.gender.data
            tel = form.tel.data
            email = form.email.data
            salary = form.salary.data
            dept = None if form.dept.data == 0 else form.dept.data

            newPerson = Person(
                name=name,
                age=age,
                gender=gender,
                tel=tel,
                email=email
            )

            db.session.add(newPerson)
            db.session.flush()

            newEmp = Employee(
                id=newPerson.id,
                salary=salary,
                dept=dept
            )

            db.session.add(newEmp)
            db.session.commit()

            return redirect(url_for('employee.index'))

        return render_template("employee.html", form=form)


employee_bp.add_url_rule(
    "/employee",
    view_func=EmployeeAdd.as_view("employee_add")
)


# 従業員編集
class EmployeeEdit(MethodView):

    def get(self, id):

        emp = Employee.query.get_or_404(id)
        person = emp.person

        form = EmployeePersonForm(obj=person)

        form.dept.choices = [(0, "部署なし")] + [
            (d.id, d.name) for d in Department.query.all()
        ]

        form.salary.data = emp.salary
        form.dept.data = emp.dept if emp.dept else 0

        return render_template("employee.html", form=form)


    def post(self, id):

        emp = Employee.query.get_or_404(id)
        person = emp.person

        form = EmployeePersonForm()

        form.dept.choices = [(0, "部署なし")] + [
            (d.id, d.name) for d in Department.query.all()
        ]

        if form.validate_on_submit():

            person.name = form.name.data
            person.age = form.age.data
            person.gender = form.gender.data
            person.tel = form.tel.data
            person.email = form.email.data

            emp.salary = form.salary.data
            emp.dept = None if form.dept.data == 0 else form.dept.data

            db.session.commit()

            return redirect(
                url_for('employee.employee_detail', id=emp.id)
            )

        return render_template("employee.html", form=form)


employee_bp.add_url_rule(
    "/employee/edit/<int:id>",
    view_func=EmployeeEdit.as_view("employee_edit"))