import { ContactFormData } from "../types/contact.types";

export const contactEmailTemplate = (data: ContactFormData): string => {
  const {
    customerName,
    phoneNumber,
    location,
    requirementType,
    email,
    timeline,
    gstNumber,
  } = data;

  const requirementLabel =
    requirementType === "medicine"
      ? "Medicines"
      : requirementType === "surgical"
      ? "Surgical Items"
      : "Medicines & Surgical Items (Both)";

  return `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
    <div style="background: #0f766e; padding: 20px 24px;">
      <h2 style="color: #ffffff; margin: 0;">New Contact Form Submission</h2>
    </div>
    <div style="padding: 24px; background: #ffffff;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #64748b; width: 40%;">Customer Name</td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${customerName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">Phone Number</td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${phoneNumber}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">Email</td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">Location</td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${location}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">Requirement Type</td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${requirementLabel}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">Timeline</td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${timeline}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;">GST Number</td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${gstNumber || "Not provided"}</td>
        </tr>
      </table>
    </div>
    <div style="background: #f8fafc; padding: 14px 24px; font-size: 12px; color: #94a3b8;">
      Submitted via website Contact Us form.
    </div>
  </div>
  `;
};
