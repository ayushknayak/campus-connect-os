import { body } from "express-validator";

const applicationValidator = [
    body("company")
        .trim()
        .notEmpty()
        .withMessage("Company is required"),

    body("role")
        .trim()
        .notEmpty()
        .withMessage("Role is required"),

    body("source")
        .trim()
        .notEmpty()
        .withMessage("Source is required"),

    body("applicationLink")
        .optional()
        .isURL()
        .withMessage("Application link must be a valid URL"),

    body("status")
        .optional()
        .isIn([
            "Applied",
            "OA",
            "Interview",
            "Rejected",
            "Selected",
            "HR Round"
        ])
        .withMessage("Invalid application status")
];

export { applicationValidator };