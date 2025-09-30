import Note from '../models/noteModel.js';

// GET
export const getNotes = async (req, res) => {
    const notes = await Note.find();
    res.status(201).json(notes)
};

// CREATE
export const createNote = async (req, res) => {
    const {title, content } = req.body;

    if(!title || !content ){
        return res.status(400).json({message: "Please fill all the fields!"})
    }
    
    const note = await Note.create({title, content});
    res.status(201).json(note)
}

// UPDATE
// api/notes/id
export const updateNote = async (req, res) => {
    const note = await Note.findById(req.params.id);

    if(!note){
        return res.status(404).json({message: "Note Not Found!"})
    }

    const updatedNote = await findByIdAndUpdate(req.params.id , req.body,{
        new: true
    })

    res.status(201).json(updatedNote)
}

// DELETE
// api/notes/id
export const deleteNote = async (req,res) => {
    const note = await Note.findById(req.params.id);

    if(!note){
        return res.status(404).json({message: "Note Not Found!"})
    }


    await note.deleteOne();
    res.status(200).json({message: "Note Deleted!"})
}