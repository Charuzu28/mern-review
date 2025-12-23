import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        age: {
            type: Number,
            required: true,
            trim: true
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    {timestamps: true}
)

const User = mongoose.model("User", UserSchema);

export default User;