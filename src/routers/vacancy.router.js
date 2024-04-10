import express from "express";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import VacancyController from "../controllers/vacancy.controller.js";
import { vacancyDto } from "../dtos/vacancy.dto.js";
import { verifyToken } from "../middlewares/token.middleware.js";

const vacancyRouter = express.Router();

vacancyRouter.get("/", asyncHandler(VacancyController.getVacancies));

vacancyRouter.get(
  "/seller",
  verifyToken,
  asyncHandler(VacancyController.getSellerVacancies)
);

vacancyRouter.post(
  "/add",
  verifyToken,
  vacancyDto,
  asyncHandler(VacancyController.addVacancy)
);

vacancyRouter.delete(
  "/delete/:vacancyId",
  verifyToken,
  asyncHandler(VacancyController.deleteVacancy)
);

export default vacancyRouter;
