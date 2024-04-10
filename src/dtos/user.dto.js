import { body } from "express-validator";
import validateRequest from "../utils/validation-request.js";

export const registrationDto = [
  body("username")
    .isLength({ min: 5 })
    .withMessage("Username must be at least 5 characters long"),
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("role")
    .isIn(["user", "recruiter"])
    .withMessage("Role must be either user or recruiter"),
  validateRequest,
];

export const authorizationDto = [
  body("email").isEmail().withMessage("Please enter a valid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  validateRequest,
];
