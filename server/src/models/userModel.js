import { executeQuery } from "../utils/queryExecutor.js";

const getUserByEmail = async (email) => {
  const rows = await executeQuery("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  return rows[0];
};

export const createUser = async (name, email, hashedPassword) => {
  const result = await executeQuery(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );
  return result;
};

export default getUserByEmail;
