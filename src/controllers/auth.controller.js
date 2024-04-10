import { registration, authUser } from "../services/auth.service.js";

class AuthController {
  constructor() {}

  async loginUser(req, res) {
    const accessToken = await authUser(req.body);
    res.status(200).json({ status: 1, accessToken });
  }

  async registerUser(req, res) {
    const newUser = await registration(req.body);
    res.status(201).json({ status: 1, data: newUser });
  }
}

export default new AuthController();
