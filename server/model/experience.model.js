import mongoose from "mongoose";


const experienceSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        opportunityId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Opportunity",
            required: true
        },

        stage: {
            type: String,
            required: true,
            trim: true
        },

        topics: {
            type: [String],
            default: []
        },

        difficulty: {
            type: String,
            enum: ["Easy", "Medium", "Hard"],
            default: undefined
        },

        questions: {
            type: [String],
            default: []
        },

        experience: {
            type: String,
            required: true,
            trim: true,
            maxlength: 5000
        }
    },
    {
        timestamps: true
    }
);

experienceSchema.index(
    {
        userId: 1,
        opportunityId: 1,
        stage: 1
    },
    {
        unique: true
    }
);

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;