import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contact.routes";
import quotationRoutes from "./routes/quotation.routes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

const allowedOrigins = [
  "https://www.npharmadistributor.com",
  "https://npharmadistributor.com",
  "https://npharma-production-58f0.up.railway.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (mobile apps, curl, Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`CORS blocked: ${origin}`));
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
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