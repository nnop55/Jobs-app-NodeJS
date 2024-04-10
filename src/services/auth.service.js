import User from "../models/user.model.js";
import { comparePasswords, hashedPassword } from "../utils/bcrypt.js";
import { getToken } from "../utils/token.js";
import { insertUserInstance } from "../services/token.service.js";
import { userFindBy } from "./user.service.js";

export async function registration(body) {
  const { username, email, password, role } = body;
  const hashedPass = hashedPassword(password);

  const user = new User({
    username,
    email,
    password: hashedPass,
    role,
  });

  await user.save();
  return user;
}

export async function authUser(body) {
  const { email, password } = body;
  const user = await userFindBy("email", email);

  const invalidPassword = !comparePasswords(password, user.password);

  if (invalidPassword) {
    throw new Error("Invalid login credentials");
  }

  const accessToken = getToken({ id: user["_id"] });
  await insertUserInstance(user["_id"], accessToken);

  return accessToken;
}
