# URL Shortener with Authentication

This project is a URL shortener application built with Node.js. It includes user authentication features such as signup and login pages. For authentication, JWT (JSON Web Tokens) is used to ensure secure user sessions. The project also utilizes MongoDB for storing user data and generated URLs. The frontend is rendered using the EJS templating engine, and cookies are used to store tokens for managing user sessions in browser-based applications.

## Features

- User signup and login
- URL shortening
- JWT-based authentication
- Server-side rendering with EJS
- MongoDB for data storage
- Secure token storage using cookies

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 engine
- **Express**: Minimalist web framework for Node.js
- **MongoDB**: NoSQL database for storing user and URL data
- **JWT (JSON Web Tokens)**: For secure authentication
- **EJS (Embedded JavaScript)**: Templating engine for server-side rendering
- **Cookie-Parser**: Middleware for parsing cookies

## Dependencies

```json
"dependencies": {
    "cookie-parser": "^1.4.6",
    "ejs": "^3.1.10",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.4.1",
    "shortid": "^2.2.16",
    "uuid": "^10.0.0"
},
"devDependencies": {
    "nodemon": "^3.1.3"
}
