import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            min: 2,
            max: 50
        },
        age: {
            type: Number,
            required: true,
            validator: {
                validate: v => v >= 18,
                message: "The user age must be 18 and above"
            },
            min: 0,
            max: 120
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