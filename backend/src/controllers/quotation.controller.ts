import { Request, Response } from "express";
import transporter from "../config/mailer";
import { quotationEmailTemplate } from "../templates/quotationEmail.template";
import { QuotationFormData } from "../types/quotation.types";

export const submitQuotationForm = async (req: Request, res: Response) => {
  const data = req.body as QuotationFormData;

  if (!data.customerName || !data.phoneNumber || !data.email || !data.productDetails) {
    return res.status(400).json({
      success: false,
      message: "Name, phone, email and product details are required.",
    });
  }

  const mailOptions = {
    from: `"Website Quotation Form" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: data.email,
    subject: `New Quotation Request from ${data.customerName}`,
    html: quotationEmailTemplate(data),
  };

  await transporter.sendMail(mailOptions);

  return res.status(200).json({
    success: true,
    message: "Thank you! Your quotation request has been sent. We'll get back to you soon.",
  });
};
