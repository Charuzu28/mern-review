import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectDb } from './config/db.js';
import noteRoutes from './routes/noteRoutes.js'


const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDb();

app.use('/api/notes',noteRoutes )

app.get('/', (req, res) => {
    res.send('API is running......')
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
