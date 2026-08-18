import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    graduationYear: {
        type: Number,
        required: true
    },
    cgpa: {
        type: Number
    },
    skills: {
        type: [String]
    },
    resume: {
        type: String
    }
});

const User=mongoose.model("User",userSchema);
export default User;