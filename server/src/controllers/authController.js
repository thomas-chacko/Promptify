import getUserByEmail, { createUser } from "../models/userModel.js";
import {
  comparePassword,
  generateToken,
  hashedPassword,
} from "../utils/authService.js";

export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await getUserByEmail(email);
    if (user) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    const hashPassword = await hashedPassword(password);
    await createUser(name, email, hashPassword);

    res.status(201).json({
      success: true,
      message: "New user created sucessfully",
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        success: true,
        message: "User not found",
      });
    }

    const isValid = comparePassword(password, user.password);
    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken({ id: user.user_id });

    res.json({
      success: true,
      token,
      user: {
        id: user.user_id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    next(err);
  }
};
