import express from "express";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import ApplyController from "../controllers/apply.controller.js";

import { verifyToken } from "../middlewares/token.middleware.js";
import { applyDto } from "../dtos/apply.dto.js";

const applyRouter = express.Router();

applyRouter.post(
  "/",
  verifyToken,
  applyDto,
  asyncHandler(ApplyController.applyJob)
);

export default applyRouter;
