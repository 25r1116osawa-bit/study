from flask import render_template, redirect, url_for, Blueprint
from flask.views import MethodView
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length
from app import db,Department

departmentManager = Blueprint("DepartmentManager",__name__,url_prefix="/DepartmentManager")

# フォームクラス(Department)
class Form(FlaskForm):
    name = StringField('部署名', validators=[
        DataRequired(message="部署名を入力して下さい。"),
        Length(max=50, message="50文字以内で入力して下さい。")
    ])
    submit = SubmitField('登録')

# 部署一覧
@departmentManager.route("/list")
def list():
    data = Department.query.filter_by(del_flag=None)
    return render_template("departments.html", data=data)

# 部署の追加
class Add(MethodView):
    def get(self):
        form = Form()
        return render_template("department_form.html", form=form)

    def post(self):
        form = Form()
        if form.validate_on_submit():
            new_dept = Department(name=form.name.data)
            db.session.add(new_dept)
            db.session.commit()
            return redirect(url_for('DepartmentManager.list'))
        return render_template("department_form.html", form=form)

departmentManager.add_url_rule("/add", view_func=Add.as_view("add"))

# 部署の編集
class Edit(MethodView):
    def get(self, id):
        dept = Department.query.get_or_404(id)
        form = Form(obj=dept)
        return render_template("department_form.html", form=form)

    def post(self, id):
        dept = Department.query.get_or_404(id)
        form = Form()
        if form.validate_on_submit():
            dept.name = form.name.data
            db.session.commit()
            return redirect(url_for('DepartmentManager.list'))
        return render_template("department_form.html", form=form)
    
departmentManager.add_url_rule("/edit/<int:id>", view_func=Edit.as_view("edit"))

# 部署の削除
@departmentManager.route("/delete/<int:id>", methods=['POST'])
def delete(id):
    dept = Department.query.get_or_404(id)
    # 関連する従業員が存在する場合は削除しない等の制御を追加することもできますが、今回は単純に削除します
    dept.del_flag = 1
    db.session.commit()
    return redirect(url_for('DepartmentManager.list'))