import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contact.routes";
import quotationRoutes from "./routes/quotation.routes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
  res.json({ status: "ok", message: "Pharma Company API is running" });
});

app.use("/api/contact", contactRoutes);
app.use("/api/quotation", quotationRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});
