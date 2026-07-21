import { Request, Response } from "express";
import transporter from "../config/mailer";
import { contactEmailTemplate } from "../templates/contactEmail.template";
import { ContactFormData } from "../types/contact.types";

export const submitContactForm = async (req: Request, res: Response) => {
  const data = req.body as ContactFormData;

  const mailOptions = {
    from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: data.email,
    subject: `New Contact Enquiry from ${data.customerName}`,
    html: contactEmailTemplate(data),
  };

  await transporter.sendMail(mailOptions);

  return res.status(200).json({
    success: true,
    message: "Thank you! Your message has been sent. Our team will contact you shortly.",
  });
};
