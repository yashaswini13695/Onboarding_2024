// var Express = require("express");
// var MongoClient = require("mongodb").MongoClient;
// var cors = require("cors");
// const multer = require("multer");

// var app = Express();
// app.use(cors());

// var CONNECTION_STRING = "mongodb+srv://yashaswini13695:Jdk6Jbxrx95yVtx6@onboarding.8iyfepm.mongodb.net/?retryWrites=true&w=majority&appName=Onboarding";

// var DATABASENAME="onboarding";
// var database;

// app.listen(3000,() => {
//     MongoClient.connect(CONNECTION_STRING,(error, client) => {
//         if (error) {
//             console.error("Failed to connect to MongoDB:", error);
//             return;
//         }
//         database = client.db(DATABASENAME);
//         console.log("MongoDB Connection Successful");
//     })
// })

// app.get('/api/onboarding/getUserList', (request, response) => {
//     database.collection("onboardingcollection").find({}).toArray((error,result)=> {
//         response.send(result);
//     })
// })
const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
const config = require('./config/config');
const db = require('./config/db');
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); // Make sure dotenv is required

dotenv.config(); // Load environment variables from .env file

// Database connection
db.connect();

// Middleware setup
app.use(express.json());
// app.use(bodyParser.json());

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:4200', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type'], // Allow these headers
};

// Use CORS middleware
app.use(cors(corsOptions));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/userList', userRoutes);


// Error handling middleware
app.use(errorMiddleware);

const PORT = config.port || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;