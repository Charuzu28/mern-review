import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { connectDb } from './config/db.js';
import noteRoutes from './routes/noteRoutes.js'

dotenv.config();
const PORT = process.env.PORT || 5000;
connectDb();

const app = express();

app.use(express.json())
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


app.use('/api/notes', noteRoutes);

app.get('/', (req, res) => {
    res.send(`API is running....`)
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})