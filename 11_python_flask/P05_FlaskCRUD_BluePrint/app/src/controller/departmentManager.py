from flask import Blueprint, render_template, redirect, url_for
from flask.views import MethodView
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Length

from ... import db
from ..model.department import Department

department_bp = Blueprint("department", __name__)


# 部署一覧
@department_bp.route("/departments")
def departments():
    data = Department.query.all()
    return render_template("departments.html", data=data)


# --- Department (部署) CRUD ---
class DepartmentForm(FlaskForm):
    name = StringField('部署名', validators=[
        DataRequired(message="部署名を入力して下さい。"),
        Length(max=50, message="50文字以内で入力して下さい。")
    ])
    submit = SubmitField('登録')


# 部署追加
class DepartmentAdd(MethodView):

    def get(self):
        form = DepartmentForm()
        return render_template("department_form.html", form=form)

    def post(self):
        form = DepartmentForm()

        if form.validate_on_submit():

            new_dept = Department(
                name=form.name.data
            )

            db.session.add(new_dept)
            db.session.commit()

            return redirect(
                url_for("department.departments")
            )

        return render_template("department_form.html", form=form)


department_bp.add_url_rule(
    "/department/add",
    view_func=DepartmentAdd.as_view("department_add")
)


# 部署編集
class DepartmentEdit(MethodView):

    def get(self, id):

        dept = Department.query.get_or_404(id)

        form = DepartmentForm(obj=dept)

        return render_template("department_form.html", form=form)

    def post(self, id):

        dept = Department.query.get_or_404(id)

        form = DepartmentForm()

        if form.validate_on_submit():

            dept.name = form.name.data

            db.session.commit()

            return redirect(
                url_for("department.departments")
            )

        return render_template("department_form.html", form=form)


department_bp.add_url_rule(
    "/department/edit/<int:id>",
    view_func=DepartmentEdit.as_view("department_edit")
)


# 部署削除
@department_bp.route("/department/delete/<int:id>", methods=['POST'])
def department_delete(id):

    dept = Department.query.get_or_404(id)

    db.session.delete(dept)

    db.session.commit()

    return redirect(
        url_for("department.departments"))