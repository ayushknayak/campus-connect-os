import { body } from "express-validator";

const experienceValidator = [
    body("stage")
        .trim()
        .notEmpty()
        .withMessage("Stage is required"),

    body("topics")
        .optional()
        .isArray()
        .withMessage("Topics must be an array"),

    body("topics.*")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Each topic must be a non-empty string"),

    body("difficulty")
        .optional()
        .isIn(["Easy", "Medium", "Hard"])
        .withMessage("Difficulty must be Easy, Medium, or Hard"),

    body("questions")
        .optional()
        .isArray()
        .withMessage("Questions must be an array"),

    body("questions.*")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Each question must be a non-empty string"),

    body("experience")
        .trim()
        .notEmpty()
        .withMessage("Experience is required")
        .isLength({ max: 5000 })
        .withMessage("Experience cannot exceed 5000 characters")
];

export { experienceValidator };