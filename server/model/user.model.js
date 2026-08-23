import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    college: {
        type: String,
        required: true,
        trim: true
    },

    branch: {
        type: String,
        required: true,
        trim: true
    },

    graduationYear: {
        type: Number,
        required: true
    },

    cgpa: {
        type: Number
    },

    skills: {
        type: [String],
        default: []
    },

    resume: {
        type: String,
        default: null
    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    github: {
        type: String,
        trim: true
    },

    linkedin: {
        type: String,
        trim: true
    },

    profileBio: {
        type: String,
        trim: true,
        maxlength: 500
    },

    isPublic: {
        type: Boolean,
        default: false
    }

});

const User = mongoose.model("User", userSchema);

export default User;