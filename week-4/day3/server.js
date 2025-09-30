require('dotenv').config();
const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const Note = require('./Notes')

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to Mongodb!"))
.catch(err => console.error("Error Connecting: ", err))

app.post("/notes", async (req, res) => {
    try {
        const note = new Note(req.body);
        const saved = await note.save();
        res.status(201).json(saved)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.get("/notes", async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})