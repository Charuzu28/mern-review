const fs = require('fs');

const getNotes = (req, res) => {
    const data = JSON.parse(fs.readFileSync('notes.json', 'utf-8'));
    res.json({success: true, note: data});
}

const addNote = (req, res) => {
    if(!req.body.title){
        return res.status(400).json({success: false, message: "Title Required!"});
    }
    
    const newNote = req.body;
    const data = JSON.parse(fs.readFileSync('notes.json', 'utf-8'));

    data.push(newNote);

    fs.writeFileSync('notes.json', JSON.stringify(data,null, 2));
    res.status(201).json({success: true, message: "Note Added!"});
}

const updateNote = (req, res) => {
    const { id } = req.params;
    const updatedNote = req.body;
    let data = JSON.parse(fs.readFileSync('notes.json', 'utf-8'));
    const index = data.findIndex(note => note.id == id);

    if(index == -1){
        return res.status(404).json({success: false, message: "Note Not Found!"})
    }

    data[index] = {...data[index], ...updatedNote}

    fs.writeFileSync('notes.json', JSON.stringify(data,null,2))
    res.status(201).json({success: true, message: "Note Updated!"})
}

const deleteNote = (req, res) =>{
    const { id } = req.params;
    let data = JSON.parse(fs.readFileSync('notes.json', 'utf-8'));

    const filteredData = data.filter(note => note.id != id);
    if(filteredData.length == data.length){
        return res.status(404).json({success: false, message: "Not Found!"})
    }

    fs.writeFileSync('notes.json', JSON.stringify(filteredData,null,2));
    res.status(201).json({success: true, message: "Note Deleted!"})
}

module.exports = {getNotes, addNote, updateNote, deleteNote};