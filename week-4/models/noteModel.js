import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: [true, 'Title is Required!'],
        trim: true,
        minlength: [3, 'Atleast 3 characters are required!']
    },
    
    content: {
        type: String,
        required: [true, 'Content is required!'],
        trim: true
        },
    },
    {
        timestamps: true
    }
)

export const Note = new mongoose.model('Note', noteSchema);