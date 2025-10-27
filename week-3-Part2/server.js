const express = require('express');
const dotenv = require('dotenv');
// const mongoose = require('mongoose')
const noteRoute = require('./day3/routes/noteRoute');

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/notes', noteRoute);

app.get('/', (req, res) =>{
    res.send("API is running.....")
})

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
})

