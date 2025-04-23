from flask import Blueprint, request, jsonify
from models import db, Delivery
import random
from utils import authorize

bp = Blueprint("delivery", __name__)

@bp.route("/delivery", methods=["POST"])
@authorize
def request_delivery(user):
    data = request.get_json(force=True)
    delivery = Delivery(
        user_id=user.id,
        pickup=data.get("pickup"),
        dropoff=data.get("dropoff"),
        fare_usd=2.00 + random.uniform(0.10, 0.40),
        eta=random.randint(10, 20)
    )
    db.session.add(delivery)
    db.session.commit()
    return jsonify({
        "delivery_id": delivery.id,
        "eta": delivery.eta,
        "fare": round(delivery.fare_usd, 2)
    }), 201
