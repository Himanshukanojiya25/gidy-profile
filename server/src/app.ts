import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

/**
 * Core Middlewares
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Health Check Route
 */
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Gidy Profile API is running 🚀"
  });
});

export default app;