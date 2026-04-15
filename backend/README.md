# SkillSwap Backend

The backend for SkillSwap, a platform for skill sharing and learning.

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Navigate to the `backend` directory:
   ```bash
   cd SkillSwap/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file based on `.env.template`:
   ```bash
   cp .env.template .env
   ```
5. Update the values in `.env` with your own configuration.

### Running the App

- Development mode:
  ```bash
  npm run dev
  ```
- Production mode:
  ```bash
  npm start
  ```

## API Endpoints

### Authentication (`/api/v1/auth`)

- `POST /register`: Register a new user
- `POST /login`: Login and receive JWT tokens
- `POST /oauth`: Google OAuth login
- `POST /logout`: Logout and clear tokens (Protected)
- `POST /refresh`: Refresh access token
- `POST /forgot-password`: Request password reset token
- `POST /reset-password`: Reset password using token
- `GET /verify-email`: Verify email using token

### User Profile Management (`/api/v1/users`)

- `GET /me`: Get own profile (Protected)
- `PUT /me`: Update own profile including `avatarUrl` (Protected)
- `PATCH /change-password`: Change account password (Protected)
- `DELETE /me`: Deactivate account (Protected)
- `GET /:userId`: Public profile information

## Monitoring & Logging

The system includes a custom `loggerMiddleware` that tracks:
- Concurrent active logins.
- Request/Response duration and status codes.
- Potential alerts for high concurrent activity.

- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Security**: Helmet, Bcrypt, JWT
- **Middleware**: CORS, Cookie-parser
