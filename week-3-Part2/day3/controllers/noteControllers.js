let notes = [
    {id: 1, title: "Book1", content: "Example for the content"},
    {id: 2, title: "Book2", content: "Example for the content"}
];

// GET ALL NOTES
const getNotes = (req,res) => { res.json(notes)};

// GET NOTES BY ID
const getNotesId = (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if(!note) return res.status(404).json({message: "Note not found!"});
    res.json(note);
}

// CREATE NOTE
const createNote = (req,res) =>{
    const {title, content } = req.body;
    const newNote = {id: notes.length + 1, title, content}
    notes.push(newNote);
    res.status(201).json(newNote);
}

// UPDATE NOTE
const updateNote = (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if(!note) return res.status(401).json({message: "Note not found"});

    note.content = req.body.content || note.content;
    note.title = req.body.title || note.title;

    res.json(note);
}

// DELETE NOTE
const deleteNote = (req,res) => {
    const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
    if(noteIndex === -1 ) return res.status(401).json({message: "Note not found!"});

    notes.splice(noteIndex, 1);
    res.json({message: "Note Deleted!"})
}

module.exports = {getNotes, getNotesId, createNote, updateNote, deleteNote};
