import connectDB from './config/db.js';
import dotenv from 'dotenv';
import express from 'express';
const PORT = 5000;
dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running...");
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})