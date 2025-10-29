const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan')
// const mongoose = require('mongoose')
const noteRoute = require('./day3/routes/noteRoute');
const logger = require('./day4/middleware/logger')
const errorHandler = require('./day4/middleware/errorHandler')
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Security
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use(logger);
app.use('/api/notes', noteRoute);
app.use(errorHandler);
app.get('/', (req, res) =>{
    res.send("API is running.....")
})

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
})

