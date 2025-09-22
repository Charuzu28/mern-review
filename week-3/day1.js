// REST API & CRUD
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(express.json());

// GET(READ)
app.get("/notes", (req,res) => {
    const data = JSON.parse(fs.readFileSync("notes.json", "utf-8"));
    res.json(data);
})

// POST(CREATE)
app.post("/notes", (req,res) => {
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