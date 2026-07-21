import { Router } from "express";
import { submitQuotationForm } from "../controllers/quotation.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.post("/", asyncHandler(submitQuotationForm));

export default router;
