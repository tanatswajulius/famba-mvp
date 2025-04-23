import os
from flask import Flask
from dotenv import load_dotenv
from config import Config
from models import db

# blueprints
from routes.auth import bp as auth_bp
from routes.ride import bp as ride_bp
from routes.delivery import bp as delivery_bp

load_dotenv()
app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
with app.app_context():
    db.create_all()

app.register_blueprint(auth_bp)
app.register_blueprint(ride_bp)
app.register_blueprint(delivery_bp)

if __name__ == "__main__":
    app.run(host="0.0.0.0",
            port=int(os.getenv("PORT", 5000)),
            debug=True)
