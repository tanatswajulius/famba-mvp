from flask import request, jsonify, current_app
import jwt
from functools import wraps
from models import User

def authorize(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        token = request.headers.get("Authorization", "").replace("Bearer ", "")
        if not token:
            return jsonify({"msg": "Missing token"}), 401
        try:
            payload = jwt.decode(token, current_app.config["SECRET_KEY"], algorithms=["HS256"])
            user = User.query.get(payload["uid"])
            if not user:
                raise jwt.InvalidTokenError
        except jwt.InvalidTokenError:
            return jsonify({"msg": "Invalid or expired token"}), 403
        return f(user, *args, **kwargs)
    return wrapper
