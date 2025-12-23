import connectDB from './config/db.js';
import dotenv from 'dotenv';
import express from 'express';
import User from './model/User.js';

const PORT = 5000;
dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running...");
})

const testUser = async () => {
    const user = await User.create({
        name: "Charles",
        age: 24
    });
    console.log(user);
}

testUser();

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})