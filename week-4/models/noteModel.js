import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {

        title: {
            type: String,
            required: [true, 'Title is required!']
        },
        content: {
            type: String,
            required: [true, 'Content is required!']
        }
    },

    {
        timestamps: true, //Add timestamp automatically
    }
    );

const Note = mongoose.model('Note', noteSchema);

export default Note;