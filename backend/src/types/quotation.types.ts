export interface QuotationFormData {
  customerName: string;
  companyName?: string;
  phoneNumber: string;
  email: string;
  location: string;
  requirementType: "medicine" | "surgical" | "both";
  productDetails: string;
  quantity?: string;
  timeline: string;
  gstNumber?: string;
}
