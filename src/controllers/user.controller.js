import { deleteUserInstance } from "../services/token.service.js";
import { editUser } from "../services/user.service.js";

class UserController {
  constructor() {}

  async updateUser(req, res) {
    const user = req.user;
    const updatedUser = await editUser(user, req.body);
    res.status(202).json({ status: 1, data: updatedUser });
  }

  async logoutUser(req, res) {
    await deleteUserInstance(req.user["_id"]);
    res.status(200).json({ status: 1, message: "Success" });
  }
}

export default new UserController();
