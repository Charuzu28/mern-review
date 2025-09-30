import express from 'express'
import mongoose from 'mongoose'
import connectDb from './config/db.js'
import noteRoutes from './routes/noteRoutes.js'
import dotenv from 'dotenv'

dotenv.config();
connectDb();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use('/api/notes', noteRoutes);

app.get('/', (req, res) => {
    res.send('API IS RUNNING.....')
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})