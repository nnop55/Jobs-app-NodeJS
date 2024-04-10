import express from "express";
import asyncHandler from "../middlewares/async-handler.middleware.js";
import UserController from "../controllers/user.controller.js";

import { verifyToken } from "../middlewares/token.middleware.js";

const userRouter = express.Router();

userRouter.put("/update", verifyToken, asyncHandler(UserController.updateUser));

userRouter.post(
  "/logout",
  verifyToken,
  asyncHandler(UserController.logoutUser)
);

export default userRouter;
