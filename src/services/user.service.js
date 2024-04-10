import User from "../models/user.model.js";
import { hashedPassword } from "../utils/bcrypt.js";

export async function userFindBy(key, value) {
  const user = await User.findOne({ [key]: value });

  if (!user) {
    throw new Error(`User not found with this ${key}`);
  }

  return user;
}

export async function editUser(user, body) {
  const {
    username = user["username"],
    email = user["email"],
    password = user["password"],
  } = body;
  const hashedPass = hashedPassword(password);

  const updatedUser = await User.updateOne(
    { _id: user["_id"] },
    { $set: { username, email, password: hashedPass } }
  );
  return updatedUser;
}

export async function insertVacancyInUser(userId, vacancyId) {
  await User.updateOne(
    { _id: userId },
    {
      $push: { vacancies: vacancyId },
    }
  );
}

export async function deleteVacancyFromUser(userId, vacancyId) {
  await User.updateOne(
    { _id: userId },
    {
      $pull: { vacancies: vacancyId },
    }
  );
}
