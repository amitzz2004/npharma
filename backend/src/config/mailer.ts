import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection on startup (logs a warning only, doesn't crash the server)
transporter.verify((error) => {
  if (error) {
    console.warn("⚠️  Mailer not ready. Check EMAIL_USER / EMAIL_PASS in .env");
    console.warn(error.message);
  } else {
    console.log("✅ Mailer is ready to send emails");
  }
});

export default transporter;
