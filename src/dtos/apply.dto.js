import { body } from "express-validator";
import validateRequest from "../utils/validation-request.js";

export const applyDto = [
  body("vacancy")
    .isLength({ min: 24, max: 24 })
    .withMessage("Vacancy ID must be at least 24 characters long"),
  body("description")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters long"),
  validateRequest,
];
