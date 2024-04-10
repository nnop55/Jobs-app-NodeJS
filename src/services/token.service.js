import Token from "../models/token.model.js";

export async function insertUserInstance(user, accessToken) {
  const newInstance = await Token.findOneAndUpdate(
    { user },
    { accessToken },
    { upsert: true, new: true }
  );

  return newInstance;
}

export async function findUserInstance(id) {
  const instance = await Token.findOne({
    user: id,
  }).populate("user");

  return instance;
}

export async function deleteUserInstance(id) {
  const deletedInstance = await Token.deleteOne({
    user: id,
  });

  return deletedInstance;
}
