import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import errorHandler from "./middlewares/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Error Handler
app.use(errorHandler);

export default app;
