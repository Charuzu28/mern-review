// MIDDLEWARE
const express = require('express');
const app = express();

app.use(express.json());
// Custom Middleware Example
const logger = (req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(logger); // Now every request logs method + URL.

// Using Middleware in Notes API

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);  // Now when you call /notes, you’ll see logs like: 
                                                                            // [2025-09-23T15:00:00Z] GET /notes
    next();
})

// Route-Specific Middleware

const validatorRoute = (req, res, next) =>{
    if(!req.body.title){
        return res.status(400).json({error: "Title is required"})
    }
    next();
}

app.use("/notes", validatorRoute, (req, res) => {
    //codes here
})