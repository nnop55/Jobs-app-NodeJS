import bcrypt from "bcrypt";

export function comparePasswords(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

export function hashedPassword(password) {
  return bcrypt.hashSync(password, 10);
}
