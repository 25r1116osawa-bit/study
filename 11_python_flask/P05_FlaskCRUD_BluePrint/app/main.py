from . import app
from .src.controller.employeeManager import employee_bp
from .src.controller.departmentManager import department_bp

app.register_blueprint(employee_bp)
app.register_blueprint(department_bp)