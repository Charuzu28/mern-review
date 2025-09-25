// Your Task (Day 3 Challenge)
// Update your CRUD routes to use status codes properly.
// Add standardized responses (success: true/false, message).
// Add a global error handler at the bottom.
// Test with Postman:
// Update non-existing note → should return 404 { success: false, message: "Note not found" }.
// POST without title → should return 400.
// Force an error (e.g. delete notes.json) → should return 500.

// Status Codes You’ll Use Most
// 200 → OK (GET success)
// 201 → Created (POST success)
// 400 → Bad Request (invalid input)
// 401 → Unauthorized (no login)
// 403 → Forbidden (no permission)
// 404 → Not Found
// 500 → Server Error

const express = require('express');
const app = express();
const PORT = 5000;
const fs = require('fs');

app.use(express.json());

// POST
app.post('/notes', (req, res) => {
    const newNote = req.body;
    const data = JSON.parse(fs.readFileSync("notes.json", "utf-8"));

    if(!newNote.title){
        res.status(400).json({success: false, message: "Title Required!"})
    }

    data.push(newNote)
    fs.writeFileSync("notes.json",JSON.stringify(data, null, 2));

    res.status(201).json({success: true, note: newNote})
});
// GET
app.get("/notes", (req, res) => {
    const data = JSON.parse(fs.readFileSync("notes.json", "utf-8"));
    res.json(data);
})
// UPDATE
app.put("/notes/:id", (req,res) => {
    const { id } = req.params;
    const updatedNote = req.body;
    
    try {
        if(!updatedNote.title){
            return res.status(400).json({success: false, message: "Title Required!"})
        }
            let data = JSON.parse(fs.readFileSync("notes.json", "utf-8"));
            let index = data.findIndex(note => note.id == id);

        if(index == -1){
            return res.status(404).json({success: false, message: "Not Found!"});
        }

        data[index] = { ...data[index], ...updatedNote};
        fs.writeFileSync("notes.json", JSON.stringify(data, null, 2));
        res.json({success: true, note: data[index]});

    } catch (err) {
        next(err);
    }
})
// DELETE
app.delete("/notes/:id", (req,res) => {
    const { id } = req.params;
    let data = JSON.parse(fs.readFileSync("notes.json", "utf-8"));

    data = data.filter(note => note.id != id );

    fs.writeFileSync("notes.json", JSON.stringify(data, null, 2))
    res.json({success: true, message: "Note Deleted!"})
})

// Global Error Handler
app.use((err, req,res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong!"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});