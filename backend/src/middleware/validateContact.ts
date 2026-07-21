import { Request, Response, NextFunction } from "express";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\-\s()]{7,15}$/;

export const validateContact = (req: Request, res: Response, next: NextFunction) => {
  const { customerName, phoneNumber, location, requirementType, email, timeline } = req.body;

  const errors: string[] = [];

  if (!customerName || String(customerName).trim().length < 2) {
    errors.push("Customer name is required.");
  }
  if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
    errors.push("A valid phone number is required.");
  }
  if (!location || String(location).trim().length < 2) {
    errors.push("Location is required.");
  }
  if (!requirementType || !["medicine", "surgical", "both"].includes(requirementType)) {
    errors.push("Requirement type must be 'medicine', 'surgical' or 'both'.");
  }
  if (!email || !emailRegex.test(email)) {
    errors.push("A valid email is required.");
  }
  if (!timeline || String(timeline).trim().length < 1) {
    errors.push("Timeline is required.");
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: errors.join(" ") });
  }

  next();
};
