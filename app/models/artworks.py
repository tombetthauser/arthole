from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime

class Artwork(db.Model, UserMixin):
  __tablename__='artworks'

  # id = db.Column(db.Integer, primary_key=True)
  # username = db.Column(db.String(40), nullable=False, unique=True)
  # email = db.Column(db.String(255), nullable=False, unique=True)
  # hashed_password = db.Column(db.String(255), nullable=False)

  id = db.Column(db.Integer(), nullable=False, primary_key=True)
  title = db.Column(db.String(255), nullable=False)
  materials = db.Column(db.String(255), nullable=True)
  dimensions = db.Column(db.String(255), nullable=True)
  year = db.Column(db.Integer(), nullable=False)
  user_id = db.Column(db.Integer(), nullable=False)
  image_url = db.Column(db.String(255), nullable=True)
  tags = db.Column(db.String(255), nullable=True)
  created_at = db.Column(db.DateTime(), default=datetime.datetime.utcnow)

  # def to_dict(self):
  #   return {
  #     "id": self.id,
  #     "username": self.username,
  #     "email": self.email
  #   }
