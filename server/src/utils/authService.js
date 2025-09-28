import bcrypt from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken";

//  Hashes a password using bcrypt with appropriate salt rounds
export const hashedPassword = async (password) => {
  const SALT_ROUNDS = 12; // Industry standard for high security
  try {
    return await bcrypt.hash(password, SALT_ROUNDS);
  } catch (error) {
    console.error("Password hashing error:", error);
    throw new Error("Error hashing password");
  }
};

// Compares a plain text password with a hashed password
export const comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error("Password comparison error:", error);
    throw new Error("Error comparing passwords");
  }
};

// Generates a JWT token with the provided payload
export const generateToken = (payload) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
      algorithm: "HS256",
    });
  } catch (error) {
    console.error("Token generation error:", error);
    throw new Error("Error generating authentication token");
  }
};

// Verifies a JWT token
export const verifyToken = (token) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new Error("Token has expired");
    } else if (error.name === "JsonWebTokenError") {
      throw new Error("Invalid token");
    }
    console.error("Token verification error:", error);
    throw error;
  }
};
