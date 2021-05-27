from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime

class Like(db.Model, UserMixin):
  __tablename__ = 'likes'

  # id = db.Column(db.Integer, primary_key = True)
  # username = db.Column(db.String(40), nullable = False, unique = True)
  # email = db.Column(db.String(255), nullable = False, unique = True)
  # hashed_password = db.Column(db.String(255), nullable = False)

  id = db.Column(db.Integer(), nullable=False, primary_key=True),
  message_text = db.Column(db.Text(), nullable=True),
  source_id = db.Column(db.Integer(), nullable=False),
  target_id = db.Column(db.Integer(), nullable=False),
  created_at = db.Column(db.DateTime(), default=datetime.datetime.utcnow),

  # def to_dict(self):
  #   return {
  #     "id": self.id,
  #     "username": self.username,
  #     "email": self.email
  #   }
