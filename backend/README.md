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

### User Profile Management (`/api/v1/users`)

- `GET /me`: Get own profile (Protected)
- `PUT /me`: Update own profile including `avatarUrl` (Protected)
- `DELETE /me`: Deactivate account (Protected)
- `GET /:userId`: Public profile information

## Tech Stack

- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Security**: Helmet, Bcrypt, JWT
- **Middleware**: CORS, Cookie-parser
