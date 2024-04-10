import { body } from "express-validator";
import validateRequest from "../utils/validation-request.js";

export const vacancyDto = [
  body("title")
    .isLength({ min: 5 })
    .withMessage("Title must be at least 5 characters long"),
  body("description")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters long"),
  body("category")
    .isIn(["IT", "Logistics", "HR", "Engineer", "Tester"])
    .withMessage(
      "Category must be either (IT, Logistics, HR, Engineer, Tester)"
    ),
  validateRequest,
];
