export type RequirementType = "medicine" | "surgical" | "both";

export interface ContactFormData {
  customerName: string;
  phoneNumber: string;
  location: string;
  requirementType: RequirementType;
  email: string;
  timeline: string;
  gstNumber?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
