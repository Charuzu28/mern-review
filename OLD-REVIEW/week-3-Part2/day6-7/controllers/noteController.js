let notes = [
    {id: 1, title: "Fur Elise", genre: "Classical Music"},
    {id: 2, title: "Moonlight Sonata", genre: "Classical Music"}
]

// GET
const getNotes = (req, res) => {res.json(notes)};

// GET NOTES BY ID
const getNotesId = (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id))
    if(!note) return res.status(401).json({message: "Note Not Found!"});
    res.json(note);
}

// CREATE NOTE
const createNote = (req, res) => {
    const {title, genre } = req.body;
    const newNote = {id: notes.length + 1 , title, genre};
    notes.push(newNote);
    res.status(201).json(newNote);
}

// UPDATE NOTE
const updateNote = (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if(!note) return res.status(401).json({message: "Note Not Found!"})
    
    note.title = req.body.title || note.title;
    note.genre = req.body.genre || note.genre;

    res.json(note);
}

// DELETE NOTE
const deleteNote = (req, res) => {
    const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id))
    if(!noteIndex === -1) return res.status(401).json({message: "Note Not Found!"});

    notes.splice(noteIndex, 1);
    res.json({message: "Note Deleted!"})
}

module.exports = {getNotes, getNotesId, createNote, updateNote, deleteNote};