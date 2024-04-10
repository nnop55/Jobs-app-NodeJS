import jwt from "jsonwebtoken";
import { JWTSecretKey } from "../shared/config.js";

import {
  deleteUserInstance,
  findUserInstance,
} from "../services/token.service.js";
import { checkRole } from "../utils/check-roles.js";

export function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ status: 2, error: "Unauthorized: Access token is missing" });
  }

  jwt.verify(token, JWTSecretKey, async (err, decoded) => {
    if (err) {
      await deleteUserInstance(decoded["id"]);
      return res
        .status(401)
        .json({ status: 2, error: "Unauthorized: Invalid access token" });
    }

    const instance = await findUserInstance(decoded["id"]);
    if (!instance) {
      res
        .status(401)
        .json({ status: 2, error: "Unauthorized: Invalid access token" });
      return;
    }

    req.user = instance["user"];
    res.user = instance["user"];

    const roleResponse = checkRole(req.originalUrl, req.user);

    if (roleResponse) {
      res.status(400).json({ status: 2, error: roleResponse });
      return;
    }

    next();
  });
}
