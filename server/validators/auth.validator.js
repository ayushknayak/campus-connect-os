import { body } from "express-validator";
const signupValidator = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .trim()
        .isEmail()
        .withMessage("Enter a valid email"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),

    body("college")
        .trim()
        .notEmpty()
        .withMessage("College is required"),

    body("branch")
        .trim()
        .notEmpty()
        .withMessage("Branch is required"),

    body("graduationYear")
        .isInt()
        .withMessage("Graduation year must be a number"),

    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required")
];

const loginValidator = [
    body("identifier")
        .trim()
        .notEmpty()
        .withMessage("Username or email is required"),

    body("password")
        .notEmpty()
        .withMessage("Password is required")
];

export {
    signupValidator,
    loginValidator
};
