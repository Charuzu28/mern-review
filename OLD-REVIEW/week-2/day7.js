// EXPRESS & API
const express = require('express')
const app = express();
const fs = require('fs')
const PORT = 5000;

app.use(express.json());
// GET /notes
app.get("/notes", (req,res) => {
    const data = JSON.parse(fs.readFileSync("notes.json" , "utf-8"));
    res.json(data);
})
// POST /notes
app.post("/notes", (req, res) => {
    const newNote = req.body;
    const data = JSON.parse(fs.readFileSync("notes.json" , "utf-8"));

    data.push(newNote);

    fs.writeFileSync("notes.json", JSON.stringify(data, null, 2));

    res.status(404).json(newNote);
})
// fallback

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})