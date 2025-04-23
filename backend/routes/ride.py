from flask import Blueprint, request, jsonify
from models import db, Ride
import random
from utils import authorize

bp = Blueprint("ride", __name__)

@bp.route("/ride", methods=["POST"])
@authorize
def request_ride(user):
    data = request.get_json(force=True)
    ride = Ride(
        user_id=user.id,
        pickup=data.get("pickup"),
        dropoff=data.get("dropoff"),
        fare_usd=1.50 + random.uniform(0.10, 0.40),
        eta=random.randint(4, 9)
    )
    db.session.add(ride)
    db.session.commit()
    return jsonify({
        "ride_id": ride.id,
        "driver_name": random.choice(["Tawanda", "Rudo", "Chenai", "Gift"]),
        "eta": ride.eta,
        "fare": round(ride.fare_usd, 2)
    }), 201
