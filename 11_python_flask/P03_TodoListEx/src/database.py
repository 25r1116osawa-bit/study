from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

# DBの定義
class Todo(db.Model):
    __tablename__ = "todoDB"

    #iD
    id = db.Column(db.Integer,primary_key=True)
    todo = db.Column(db.String)
    updatetime = db.Column(db.DateTime)

    def getTodoData(self):
        return{
            "id":int(self.id),
            "todo":str(self.todo),
            "updateTime":str(self.updatetime)
        }

    