import express from "express";
import asyncHandler from "../middlewares/async-handler.middleware.js";

import AuthController from "../controllers/auth.controller.js";
import { authorizationDto, registrationDto } from "../dtos/user.dto.js";

const authRouter = express.Router();

authRouter.post(
  "/login",
  authorizationDto,
  asyncHandler(AuthController.loginUser)
);

authRouter.post(
  "/register",
  registrationDto,
  asyncHandler(AuthController.registerUser)
);

export default authRouter;
