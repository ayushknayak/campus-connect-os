import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    company: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    applicationLink: {
        type: String
    },
    status: {
        type: String,
        enum: [
            "Applied",
            "OA",
            "Interview",
            "Rejected",
            "Selected",
            "HR Round"
        ],
        default: "Applied"
    },
    appliedDate: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String
    },
    opportunityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Opportunity",
    default: null
}

}, {
    timestamps: true
});

const Application = mongoose.model("Application", applicationSchema);

export default Application;