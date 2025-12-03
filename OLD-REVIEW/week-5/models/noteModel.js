import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
    {
        title: {
            type: String ,
            required: [true, "Title is required!"],
            trim: true,
            minlength: [3, "Atleast 3 characters are required!"]

        },
        content: {
            type: String,
            required: [true, "Content iss required!"],
            trim: true
        }
    },
    {
        timestamp: true
    }
)

export const Note = new mongoose.model('Note', noteSchema);