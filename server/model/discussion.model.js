import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema(
    {
        opportunityId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Opportunity",
            required: true
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        content: {
            type: String,
            required: true,
            trim: true,
            maxlength: 1000
        }
    },
    {
        timestamps: true
    }
);

const Discussion = mongoose.model("Discussion", discussionSchema);

export default Discussion;