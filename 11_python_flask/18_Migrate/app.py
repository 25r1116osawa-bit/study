from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask("app")

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'


db = SQLAlchemy(app)
migrate = Migrate(app,db)

class User(db.Model):

    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    body = db.Column(db.String(120), nullable=False)
    age = db.Column(db.Integer, nullable=False)

if __name__ == "__main__":
    app.run(debug=True)