from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime


class User(db.Model, UserMixin):
  __tablename__ = 'users'

  # id = db.Column(db.Integer, primary_key = True)
  # username = db.Column(db.String(40), nullable=False, unique=True)
  # email = db.Column(db.String(255), nullable=False, unique=True)
  # hashed_password = db.Column(db.String(255), nullable=False)

  id = db.Column(db.Integer(), primary_key=True, nullable=False)
  email = db.Column(db.String(255), nullable=False, unique=True)
  username = db.Column(db.String(40), nullable=False, unique=True)
  hashed_password = db.Column(db.String(255), nullable=False)
  display_name = db.Column(db.String(255), nullable=True)
  birth_year = db.Column(db.Integer(), nullable=True)
  location = db.Column(db.String(255), nullable=True)
  bfa = db.Column(db.String(255), nullable=True)
  mfa = db.Column(db.String(255), nullable=True)
  link_text = db.Column(db.String(255), nullable=True)
  link_url = db.Column(db.String(255), nullable=True)
  user_type = db.Column(db.String(255), nullable=True)
  created_at = db.Column(db.DateTime(), default=datetime.datetime.utcnow)



  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "email": self.email,
      "username": self.username,
      "hashed_password": self.hashed_password,
      "display_name": self.display_name,
      "birth_year": self.birth_year,
      "location": self.location,
      "bfa": self.bfa,
      "mfa": self.mfa,
      "link_text": self.link_text,
      "link_url": self.link_url,
      "user_type": self.user_type,
      "created_at": self.created_at
    }
