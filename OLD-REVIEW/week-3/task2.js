// Add a logger middleware to log method + URL.
// Add a validator middleware for POST /notes to ensure "title" exists.
// Test in Postman:
// POST with {} → should return 400 Title is required.
// POST with { "title": "Valid Note" } → should work.

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5000;
// MIDDLEWARE
// logger
const logger = (req,res,next) =>{
    console.log(`${req.method} ${req.url}`);
    next();
};
// Validator
const validateRoute = (req,res,next) => {
    if(!req.body.title){
        return res.status(400).json({error: "Title Required!"});
        next();
    }
}
app.use(express.json());
app.use(logger);

// GET(READ)
app.get("/notes", (req,res) => {
    const data = JSON.parse(fs.readFileSync("notes.json", "utf-8"));
    res.json(data);
})

// POST(CREATE)
app.post("/notes",validateRoute, (req,res) => {
    const newNotes = req.body;
    const data = JSON.parse(fs.readFileSync("notes.json", "utf-8"));

    data.push(newNotes);

    fs.writeFileSync("notes.json", JSON.stringify(data, null, 2));

    res.status(201).json(newNotes);
})
// PUT(UPDATE)
app.put("/notes/:id", (req, res) => {
    const { id } = req.params;
    const updateNote = req.body;
    let data = JSON.parse(fs.readFileSync("notes.json", "utf-8"));

    data = data.map(note => (note.id == id ? { ...note, ...updateNote } : note));

    fs.writeFileSync("notes.json",JSON.stringify(data, null, 2));
    res.json({message: "Updated the note!", note: updateNote});

})
// DELETE
app.delete("/notes/:id" , (req, res) => {
    const { id } = req.params;
    let data = JSON.parse(fs.readFileSync("notes.json", "utf-8"));

    data = data.filter(note => note.id != id);

    fs.writeFileSync("notes.json", JSON.stringify(data, null,2));
    res.json({message: "Deleted Note!"});
})

// LISTEN / SERVER 

app.listen(PORT, ()=> {
    console.log(`Server running at http://localhost:${PORT}`);
});