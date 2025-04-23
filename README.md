# Famba MVP

![Expo SDK 52](https://img.shields.io/badge/Expo%20SDK-52-blue.svg) ![Flask 2.3](https://img.shields.io/badge/Flask-2.3-green.svg) ![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Project overview

Famba MVP is a low-cost motor-bike rideshare and same-day delivery platform designed specifically for Zimbabwe. It operates without dependency on external API keys, making it accessible and sustainable in regions with limited tech infrastructure. The platform offers flat fares (US $1.50 for rides, US $2.00 for deliveries) and charges a modest 8-10% platform commission, ensuring affordability for both customers and drivers.

## Tech stack

| Layer | Tech | Notes |
|-------|------|-------|
| Mobile | React Native (Expo SDK 52) | Hot-reload, cross-platform |
| API | Flask 2.3 + SQLAlchemy | Lightweight |
| Auth | JWT | Stored in Async-Storage |
| State | React Context | Simple for MVP |
| DevOps | Docker & docker-compose | Optional |

## Project structure

```
famba-mvp/
├── backend/
│   ├── routes/
│   ├── models.py
│   ├── app.py
│   ├── utils.py
│   ├── config.py
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── screens/
    │   ├── navigation/
    │   └── context/
    ├── App.js
    └── package.json
```

---

## Quick start

### Prerequisites
- Node 18+ 
- npm 9+
- Python 3.9+

### Backend setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### Frontend setup
```bash
cd frontend
npm install
npx expo start
```

### Docker alternative
```bash
docker-compose up --build
```

## Feature walkthrough

- Register / login (JWT)
- Home screen with placeholder map + buttons
- Ride request → fake driver name, ETA, fare
- Delivery request → fake ETA, fee
- Ride & delivery history lists

---

## API reference

| Endpoint | Method | Body | Response |
|----------|--------|------|----------|
| `/auth/register` | POST | `{username, password, phone, role}` | `{token, user_id, message}` |
| `/auth/login` | POST | `{username, password}` | `{token, user_id, message}` |
| `/ride` | POST | `{pickup, destination}` | `{ride_id, driver_name, eta, fare}` |
| `/delivery` | POST | `{pickup, destination, package_details}` | `{delivery_id, eta, fee}` |

All protected routes require header: `Authorization: Bearer <token>`

## Environment variables

| Variable | Description | Default |
|----------|-------------|---------|
| SECRET_KEY | JWT secret key | dev-secret |
| PORT | API server port | 5000 |

---

## Roadmap

- Mapbox integration for accurate navigation
- EcoCash payment integration
- Dedicated driver app
- Migration to PostgreSQL for production
- Push notifications
- CI/CD pipeline

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (follow conventional commits)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

CI will automatically run linting and tests on your PR.

## License

MIT © 2025 Tanatswa Julius Mangena

---

## Screenshots
*to be inserted*

---

Famba zvakanaka! 🛵