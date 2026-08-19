import mongoose from "mongoose";

const opportunitySchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: [
                "Internship",
                "Job",
                "Hackathon",
                "Scholarship",
                "Other"
            ],
            required: true
        },

        company: {
            type: String,
            required: true
        },

        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        applicationLink: {
            type: String,
            required: true
        },

        source: {
            type: String,
            enum: [
                "LinkedIn",
                "Company Website",
                "Unstop",
                "Internshala",
                "Other"
            ],
            required: true
        },

        deadline: {
            type: Date
        },

        eligibility: {
            type: String
        },

        location: {
            type: String
        },

        skills: {
            type: [String]
        },

        contributedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Opportunity = mongoose.model("Opportunity",opportunitySchema);

export default Opportunity;