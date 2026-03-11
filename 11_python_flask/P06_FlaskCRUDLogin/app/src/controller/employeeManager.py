from flask import render_template, redirect, request, url_for, Blueprint
from flask.views import MethodView
from flask_wtf import FlaskForm
from wtforms import EmailField, IntegerField, StringField, SubmitField, TelField, SelectField
from wtforms.validators import DataRequired, Email, Length  
from app import app,db,Employee,Person,Department

employeeManager = Blueprint("EmployeeManager",__name__,url_prefix="/EmployeeManager")

@employeeManager.route("/list")
def list():
    # 全件取得
    data = Employee.query.filter_by(del_flag=None)
    return render_template("employees.html",data=data)

# フォームクラス(Employee)
class Form(FlaskForm):
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
    dept = SelectField('部署', coerce=int, validators=[])
    submit = SubmitField('登録')

class Add(MethodView):
    def get(self):
        form = Form()
        # 部署の選択肢をセット
        form.dept.choices = [(0, "部署なし")] + [(d.id, d.name) for d in Department.query.all()]
        return render_template("employee_form.html",form=form)
    def post(self):
        form = Form()
        form.dept.choices = [(0, "部署なし")] + [(d.id, d.name) for d in Department.query.all()]
        if form.validate_on_submit():
            # DBへ保存
            name = form.name.data
            age = form.age.data
            gender = form.gender.data
            tel = form.tel.data
            email = form.email.data
            salary = form.salary.data
            dept = None if form.dept.data == 0 else form.dept.data
            newPerson = Person(name=name,age=age,gender=gender,tel=tel,email=email)
            db.session.add(newPerson)
            db.session.flush()
            newEmp = Employee(id=newPerson.id,salary=salary,dept=dept)
            db.session.add(newEmp)
            db.session.commit()
            return redirect(url_for('EmployeeManager.list'))
        return render_template("employee_form.html", form=form)

employeeManager.add_url_rule("/add",view_func=Add.as_view("add"))

# 従業員詳細
@employeeManager.route("/detail/<int:id>")
def detail(id):
    emp = Employee.query.get_or_404(id)
    return render_template("employee_detail.html", emp=emp)

# 従業員情報・個人情報の更新
class Edit(MethodView):
    def get(self, id):
        emp = Employee.query.get_or_404(id)
        person = emp.person
        form = Form(obj=person)
        form.dept.choices = [(0, "部署なし")] + [(d.id, d.name) for d in Department.query.all()]
        form.salary.data = emp.salary
        form.dept.data = emp.dept if emp.dept else 0
        return render_template("employee_form.html", form=form)

    def post(self, id):
        emp = Employee.query.get_or_404(id)
        person = emp.person
        form = Form()
        form.dept.choices = [(0, "部署なし")] + [(d.id, d.name) for d in Department.query.all()]
        if form.validate_on_submit():
            person.name = form.name.data
            person.age = form.age.data
            person.gender = form.gender.data
            person.tel = form.tel.data
            person.email = form.email.data
            emp.salary = form.salary.data
            emp.dept = None if form.dept.data == 0 else form.dept.data
            db.session.commit()
            return redirect(url_for('EmployeeManager.detail', id=emp.id))
        return render_template("employee_form.html", form=form)

employeeManager.add_url_rule("/edit/<int:id>", view_func=Edit.as_view("edit"))

# 従業員情報の削除
@employeeManager.route("/delete/<int:id>", methods=['POST'])
def delete(id):
    emp = Employee.query.get_or_404(id)
    person = emp.person
    emp.del_flag = 1
    # db.session.delete(emp)
    if person:
        person.del_flag = 1
    db.session.commit()
    return redirect(url_for('EmployeeManager.list'))