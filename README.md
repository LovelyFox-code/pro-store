# ProShop eCommerce Platform

> A full-featured eCommerce platform built with the MERN stack (MongoDB, Express, React, Node.js) and Redux Toolkit.

![ProShop Screenshot](frontend/public/images/screenshot.png)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Custom database seeder script

## Technology Stack

### Frontend

- React.js
- Redux Toolkit for state management
- React Bootstrap for UI components
- React Router v6 for navigation
- Axios for API requests
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB for database
- Mongoose ODM
- JWT for authentication
- bcryptjs for password hashing

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Environment Variables

Create a `.env` file in the root directory and add the following:

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your_mongodb_uri
JWT_SECRET = your_jwt_secret
PAYPAL_CLIENT_ID = your_paypal_client_id
```

### Installing Dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd backend
npm install
```

### Running the Application

```bash
# Run frontend (:3000)
cd frontend
npm run dev

# Run backend (:5000)
cd backend
npm run server

# Run both frontend and backend
npm run dev
```

## Database Seeding

### Seed Database

```bash
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

## Acknowledgments

- Design inspired by real-world eCommerce platforms
- Built as part of learning MERN stack development
