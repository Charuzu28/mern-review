import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDb } from './config/db.js';
import { Note } from './models/noteModel.js'
import mongoose from 'mongoose';


const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDb();

app.get('/test-create', async (req, res) => {

    try {
        const newNote = await Note.create({
        title: "Test Title",
        content: "Test Content"
    })
    res.json(newNote);
    } catch (error) {
        res.status(500).json({message: error.message})  
    }
})

app.get('/', (req, res) => {
    res.send('API is running......')
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
