// Server.js connecting to mongodb
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Mongodb successfully connected!"))
.catch(err => console.error("Mongodb error ", err))

app.get('/', (req, res) => {
    res.send("Mongodb and Express are running!")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});