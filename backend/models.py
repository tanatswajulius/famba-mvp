from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)

class Ride(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    pickup = db.Column(db.String(120))
    dropoff = db.Column(db.String(120))
    fare_usd = db.Column(db.Float)
    eta = db.Column(db.Integer)
    status = db.Column(db.String(32), default="queued")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Delivery(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    pickup = db.Column(db.String(120))
    dropoff = db.Column(db.String(120))
    fare_usd = db.Column(db.Float)
    eta = db.Column(db.Integer)
    status = db.Column(db.String(32), default="queued")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
