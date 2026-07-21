import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error("Server Error:", err.message);
  res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again later.",
  });
};
