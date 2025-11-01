import { Note } from '../models/noteModel.js';

// GET NOTES
export const getNotes = async (req,res) => {
    try {
        const note = await Note.find();
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
// GET NOTES BY ID
// export const getNoteId = async (req, res) => {
//     try {
//         const note = await Note.findbyId();
//         if(!note){
//             return res.status(400).json({message: "Note not found!"})
//         }
//         res.status(200).json(note)
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// }

// CREATE NOOTE
export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        if(!title || !content){
            return res.status(400).json({message: "Title and content are required!"})
        }
        
        const note = await Note.create({title, content});
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// UPDATE NOTE
export const updateNote = async (req, res) =>{
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if(!note){
            return res.status(404).json({message: "Note not found!"})
        }

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// DELETE NOTE
export const deleteNote = async (req, res) =>{
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if(!note){
            return res.status(404).json({message: "Note not found!"})
        }

        res.status(200).json({message: "Note deleted!"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
