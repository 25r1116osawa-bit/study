from flask import render_template
from . import app

from .auth import auth_bp
app.register_blueprint(auth_bp)

from app.src.controller.departmentManager import departmentManager
app.register_blueprint(departmentManager)

from app.src.controller.employeeManager import employeeManager
app.register_blueprint(employeeManager)


@app.route("/")
def index():
    return render_template("index.html")