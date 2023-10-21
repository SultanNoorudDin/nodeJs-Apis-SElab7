# nodeJs-Apis-SElab7

# Backend API for User Authentication

This backend application provides APIs for user authentication. It allows users to create a new account (sign up) and log in using their credentials.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Setup

1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Ensure you have a MongoDB database set up and running.
4. Modify the `./utils/db.js` file to connect to your MongoDB database.

## Installation

```bash
npm install
```

## Usage

### Start the Server

```bash
node <filename>.js
```

Replace `<filename>` with the name of your JavaScript file containing the provided code.

The server will start running at `http://localhost:2000`.

## API Endpoints

### 1. Sign Up

#### Request

- **URL**: `POST /api/signup`
- **Body**: JSON object containing user registration details.

```json
{
  "username": "exampleuser",
  "password": "secretpassword"
}
```

#### Response

- **Status Code**: 200 OK
- **Body**: JSON object containing a success message.

```json
{
  "message": "User registered successfully."
}
```

### 2. Log In

#### Request

- **URL**: `GET /api/login`
- **Headers**: Authorization header with Base64 encoded username and password.

Example:

```
Authorization: Basic base64encoded(username:password)
```

#### Response

- **Status Code**: 200 OK
- **Body**: JSON object containing a success message and authentication token.

```json
{
  "message": "Login successful.",
  "token": "yourjsonwebtoken"
}
```

## Error Responses

- **Status Code**: 400 Bad Request
- **Body**: JSON object containing an error message.

```json
{
  "error": "Invalid request payload."
}
```

- **Status Code**: 401 Unauthorized
- **Body**: JSON object containing an error message.

```json
{
  "error": "Unauthorized access."
}
```

## Dependencies

- **body-parser**: Middleware for parsing JSON request bodies.
- **express**: Web framework for Node.js applications.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **mongoose**: MongoDB object modeling tool.

## Database

This application uses MongoDB as the database. Make sure to set up a MongoDB database and update the connection details in the `./utils/db.js` file.

---

