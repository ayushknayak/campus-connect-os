import { body } from "express-validator";

const discussionValidator = [
    body("content")
        .trim()
        .notEmpty()
        .withMessage("Discussion content is required")
        .isLength({ max: 1000 })
        .withMessage("Discussion cannot exceed 1000 characters")
];

export { discussionValidator };