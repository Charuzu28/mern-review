// Error Handling in Express

const express = require('express');
const fs = require('fs');
const app = (express());
const PORT = 5000;

app.use(express.json());

// Route-Level Error Handling
app.use('/notes', (req, res) => {
    if(!req.body.title){
        return res.status(400).json({
            success: false,
            message: "Title Required!"
        })
    }

    res.status(201).json({success: true, note: req.body});
})


app.post("/notes", (req,res) => {
    const newNotes = req.body;
    const data = JSON.parse(fs.readFileSync("notes.json", "utf-8"));

    data.push(newNotes);

    fs.writeFileSync("notes.json", JSON.stringify(data, null, 2));

    res.status(201).json(newNotes);
})

app.put("/notes", (req,res, next) =>{
    const { id } = req.params;
    const updatedNote = req.body;
    try {
        if(!updatedNote.title){
            res.status(400).json({success: false, message: "Title Required!"})
        }
        let data = JSON.parse(fs.readFileSync("notes.json", "utf-8"));
        let index = data.findIndex(note => note.id == id);

        if(index == -1){
            res.status(404).json({success: false, message: "Note not found!"})
        }

        data[index] = {...data[index], ...updatedNote};
        fs.writeFileSync("notes.json", JSON.stringify(data, null, 2));

        res.json({success: true, note: data[index]});
    } catch (error) {
        next(error);
    }
})

app.delete("/notes/:id" , (req, res) => {
    const { id } = req.params;
    let data = JSON.parse(fs.readFileSync("notes.json", "utf-8"));

    data = data.filter(note => note.id != id);

    fs.writeFileSync("notes.json", JSON.stringify(data, null,2));
    res.json({message: "Deleted Note!"});
})

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong!"
    })
})
app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
})