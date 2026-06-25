# Inventory Management System

A full-stack inventory management application built with Angular, Node.js, Express.js, and MongoDB.

## Features

- User registration and login
- Password hashing using bcrypt
- JWT-based login response
- Protected frontend routes using Angular Auth Guard
- Add new inventory products
- View all inventory products
- View a single product by ID
- Update existing product details
- Delete inventory products
- MongoDB database integration
- REST API integration between Angular frontend and Express backend

## Tech Stack

### Frontend
- Angular
- TypeScript
- HTML
- CSS
- Angular Router
- Angular Forms
- Angular HTTP Client

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- CORS
- dotenv
- cookie-parser

## Project Structure

```text
Inventory_management_system/
│
├── Backend/
│   └── Backend/
│       ├── controller/
│       │   ├── productController.js
│       │   └── userController.js
│       ├── middleware/
│       │   └── userMiddleware.js
│       ├── models/
│       │   ├── productModel.js
│       │   └── userModel.js
│       ├── routes/
│       │   ├── productRoute.js
│       │   └── userRoute.js
│       ├── app.js
│       └── package.json
│
└── inventory_management_systm/
    ├── src/
    │   └── app/
    │       ├── add-inventory/
    │       ├── inventory/
    │       ├── auth/
    │       ├── header/
    │       ├── service/
    │       ├── servicess/
    │       ├── interfaces/
    │       ├── auth.guard.ts
    │       └── app.routes.ts
    └── package.json
```

## Product Details Managed

The system stores and manages the following product information:

- Product name
- Stock Keeping Unit
- Category
- Product details
- Quantity in hand
- Unit of measure
- Currency
- Unit cost
- Selling cost
- Seller name
- Batch number

## API Endpoints

### Product Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all products |
| GET | `/:id` | Get a single product |
| POST | `/` | Add a new product |
| PUT | `/:id` | Update a product |
| DELETE | `/:id` | Delete a product |

### User Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user` | Get all users |
| POST | `/api/user/register` | Register a new user |
| POST | `/api/user/login` | Login user |
| PUT | `/api/user/:id` | Update user |
| DELETE | `/api/user/:id` | Delete user |

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/bhumi222/Inventory_management_system.git
cd Inventory_management_system
```

## Backend Setup

```bash
cd Backend/Backend
npm install
```

Create a `.env` file in the backend folder and add:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
refresh_token=your_refresh_token
```

Run the backend server:

```bash
npm start
```

The backend will run on:

```text
http://localhost:4000
```

## Frontend Setup

Open a new terminal and run:

```bash
cd inventory_management_systm
npm install
npm start
```

The frontend will run on:

```text
http://localhost:4200
```

## Usage

1. Register a new user.
2. Login using the registered email and password.
3. After login, access the inventory page.
4. Add product details using the add inventory form.
5. View, update, or delete inventory products.

## Authentication Flow

- User passwords are hashed before storing in MongoDB.
- Login validates the email and password.
- A JWT token is generated after successful login.
- The token is stored on the frontend.
- Angular Auth Guard protects inventory-related routes.

## Author

Bhumi Vyas

GitHub: https://github.com/bhumi222
