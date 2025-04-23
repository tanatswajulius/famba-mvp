from flask import Blueprint, request, jsonify, current_app
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User
import jwt, datetime as dt

bp = Blueprint("auth", __name__, url_prefix="/auth")

@bp.route("/register", methods=["POST"])
def register():
    data = request.get_json(force=True)
    if User.query.filter_by(email=data["email"]).first():
        return jsonify({"msg": "Email already registered"}), 400
    user = User(email=data["email"],
                password=generate_password_hash(data["password"]))
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "registered"}), 201

@bp.route("/login", methods=["POST"])
def login():
    data = request.get_json(force=True)
    user = User.query.filter_by(email=data["email"]).first()
    if not user or not check_password_hash(user.password, data["password"]):
        return jsonify({"msg": "Bad credentials"}), 401
    token = jwt.encode({
        "uid": user.id,
        "exp": dt.datetime.utcnow() + dt.timedelta(days=1)
    }, current_app.config["SECRET_KEY"], algorithm="HS256")
    return jsonify({"token": token})
