# Travel Recommendation System 🌍

This project is a Travel Recommendation System built with Node.js and React, providing users with various travel recommendations. It includes features like weather forecasts, password reset via email, and CRUD operations for blogs.

## Features ✨

- **Travel Recommendations**: Get personalized travel suggestions.
- **Weather Forecast**: Integrated weather forecasting for travel destinations.
- **User Authentication**: Secure login and password reset functionality via email.
- **Blog Management**: CRUD operations for user-generated travel blogs.

## Technologies Used 🚀

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web application framework.
- **MongoDB**: NoSQL database for storing travel data.
- **React**: Front-end library for building user interfaces.
- **Mongoose**: ODM for MongoDB.
- **Nodemailer**: For sending emails (password reset).
- **JWT**: JSON Web Tokens for authentication.
- **Winston**: Logging framework.

## API Endpoints 🌐

### Health Check

- `GET /healthz`: Verifies the server is running.

### Places Endpoints

- `GET /api/places`: Retrieve all places.
- `POST /api/places`: Add a new place.
- `PUT /api/places/:id`: Update a place.
- `DELETE /api/places/:id`: Delete a place.

### User Endpoints

- `POST /api/users`: Create a new user.
- `GET /api/users/:id`: Retrieve user details by ID.
- `PUT /api/users/:id`: Update user details.
- `DELETE /api/users/:id`: Delete a user.
- `POST /api/users/reset-password`: Trigger a password reset email.

### Blog Endpoints

- `GET /api/blogs`: Retrieve all blogs.
- `POST /api/blogs`: Create a new blog.
- `PUT /api/blogs/:id`: Update a blog.
- `DELETE /api/blogs/:id`: Delete a blog.

### Post Endpoints

- `POST /api/posts`: Create a new post.
- `PUT /api/posts/:id`: Update a post.
- `DELETE /api/posts/:id`: Delete a post.
- `GET /api/posts/:id`: Retrieve post details by ID.
- `GET /api/posts`: Retrieve all posts.

### Image Upload Endpoint

- `POST /api/upload`: Upload an image file.

## Configuration ⚙️

Configuration settings are managed via environment variables.

