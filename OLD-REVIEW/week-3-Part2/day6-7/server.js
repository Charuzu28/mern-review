const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const noteRoute = require('./routes/noteRoute')
// MIDDLEWARE
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// SECURITY
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// MIDDLEWARE
app.use(logger);
app.use(errorHandler);

app.use('/api/notes', noteRoute);

app.get('/', (req,res) => {
    res.send("API IS RUNNING!.....")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})