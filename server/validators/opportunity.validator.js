import { body } from "express-validator";

const opportunityValidator = [
    body("type")
        .trim()
        .isIn([
            "Internship",
            "Job",
            "Hackathon",
            "Scholarship",
            "Other"
        ])
        .withMessage("Invalid opportunity type"),

    body("company")
        .trim()
        .notEmpty()
        .withMessage("Company is required"),

    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required"),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required"),

    body("applicationLink")
        .trim()
        .isURL()
        .withMessage("Application link must be a valid URL"),

    body("source")
        .trim()
        .isIn([
            "LinkedIn",
            "Company Website",
            "Unstop",
            "Internshala",
            "Other"
        ])
        .withMessage("Invalid source"),

    body("deadline")
        .optional()
        .isISO8601()
        .withMessage("Deadline must be a valid date"),

    body("eligibility")
        .optional()
        .trim(),

    body("location")
        .optional()
        .trim(),

    body("skills")
        .optional()
        .isArray()
        .withMessage("Skills must be an array")
];

export { opportunityValidator };