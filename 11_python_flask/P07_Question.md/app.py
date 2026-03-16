from datetime import datetime

from flask import Flask, redirect, render_template, request
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///kitai.db'
db.init_app(app)


class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    mail = db.Column(db.String(50), nullable=False, unique=True)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), nullable=False)

    # User -> Kintai
    kintais = db.relationship(
        "Kintai",
        backref="user",
        lazy=True
    )


class Kintai(db.Model):
    __tablename__ = "kintai"

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(
        db.Integer,
        db.ForeignKey("user.id"),
        nullable=False
    )

    clock_in_datetime = db.Column(db.DateTime, nullable=True)
    clock_out_datetime = db.Column(db.DateTime, nullable=True)

    # Kintai -> Rest
    rests = db.relationship(
        "Rest",
        backref="kintai",
        lazy=True
    )


class Rest(db.Model):
    __tablename__ = "rest"

    id = db.Column(db.Integer, primary_key=True)

    kintai_id = db.Column(
        db.Integer,
        db.ForeignKey("kintai.id"),
        nullable=False
    )

    break_start_time = db.Column(db.DateTime, nullable=True)
    break_end_time = db.Column(db.DateTime, nullable=True)

    @property
    def break_duration(self):
        if self.break_start_time and self.break_end_time:
            return self.break_end_time - self.break_start_time
        return None
   



@app.route("/")
def index():
    return render_template("base.html")

@app.route("/create",methods =[ "GET","POST"])
def create():
    
   if request.method == "POST":
      name = request.form.get('name')
      email = request.form.get('email')
      password = request.form.get('password')
      role = request.form.get('role')
      
      new_user = User(
         name=name,
         mail=email,
         password_hash=password,
         role=role
         )
      
      db.session.add(new_user)
      db.session.commit()
      # return redirect('/admin')

      return render_template("create.html")
   
   elif request.method == "GET":
      return render_template("create.html")



@app.route("/clock_in", methods=["POST"])
def clock_in():
    kintai = Kintai(user_id=1,clock_in_datetime=datetime.now())

    db.session.add(kintai)
    db.session.commit()

    return redirect("/")

@app.route("/clock_out", methods=["POST"])
def clock_out():
    # kintai = Kintai(user_id=1,clock_out_datetime=datetime.now())
    
    kintai = Kintai.query.filter_by(
        user_id=1,
        clock_out_datetime=None
    ).first()

    # ログイン機能実装後に、出退勤の2重登録ができないようにする。
    if kintai:
        kintai.clock_out_datetime=datetime.now()

    db.session.add(kintai)
    db.session.commit()

    return redirect("/")


@app.route("/break_start", methods=["POST"])
def break_start():
    rest = Rest(kintai_id=1,break_start_time=datetime.now())

    db.session.add(rest)
    db.session.commit()

    return redirect("/")

@app.route("/break_end", methods=["POST"])
def break_end():
    rest = Rest.query.filter_by(
        kintai_id=1,
        break_end_time=None
    ).first()
    if rest:
        rest.break_end_time=datetime.now()

    db.session.add(rest)
    db.session.commit()

    return redirect("/")


@app.route("/admin", methods=["GET","POST"])
def admin():
    users = User.query.all()
    print(users)
    return render_template("admin.html",users=users)


@app.route("/user", methods=["GET","POST"])
def user():
    users = User.query.all()
    
    return render_template("user.html",users=users)


@app.route("/<int:user_id>/update", methods=["GET","POST"])
def update(user_id):

    user = User.query.get(user_id)

    if request.method == "POST":
        user.name = request.form.get('name')
        user.mail = request.form.get('email')   # ← 修正
        user.password_hash = request.form.get('password')
        user.role = request.form.get('role')

        db.session.commit()

        return redirect("/admin")

    return render_template("update.html", user=user)


@app.route("/<int:user_id>/delete")
def delete(user_id):


   user = User.query.get(user_id)
   # 論理削除の書き方
   # user.is_deleted = True
   db.session.delete(user)
   db.session.commit()
   return redirect('/admin')


with app.app_context():
   db.create_all()

if __name__ == "__main__":
    app.run(debug=True,port="12345")




