import { Note } from "../models/noteModel.js";

// GET ALL NOTES
export const getNotes = async (req, res) => {
    try {
         const note = await Note.find();
         res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// GET NOTES BY ID
export const getNoteId = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message: "Note Not Found!"});
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// CREATE NOTE
export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        if(!title || !content) {
            return res.status(400).json({message: "Note Not Found!"})
        }

        const note = await Note.create({title, content});
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// UPDATE NOTE
export const updateNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if(!note) return res.status(404).json({message: "Note Not Found!"});
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// DELETE NOTE
export const deleteNote = async (req,res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if(!note) return res.status(400).json({message: "Note Not Found!"});

        res.status(200).json({message: "Note Deleted!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}