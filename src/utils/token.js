import jwt from "jsonwebtoken";
import { JWTSecretKey } from "../shared/config.js";

export function getToken(payload, time = "6h") {
  return jwt.sign(payload, JWTSecretKey, { expiresIn: time });
}
