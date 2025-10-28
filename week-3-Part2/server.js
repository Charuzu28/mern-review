const express = require('express');
const dotenv = require('dotenv');
// const mongoose = require('mongoose')
const noteRoute = require('./day3/routes/noteRoute');
const logger = require('./day4/middleware/logger')
const errorHandler = require('./day4/middleware/errorHandler')
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(logger);
app.use('/api/notes', noteRoute);
app.use(errorHandler);
app.get('/', (req, res) =>{
    res.send("API is running.....")
})

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
})

