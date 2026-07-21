import { Router } from "express";
import { submitContactForm } from "../controllers/contact.controller";
import { validateContact } from "../middleware/validateContact";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.post("/", validateContact, asyncHandler(submitContactForm));

export default router;
