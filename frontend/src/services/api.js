import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5050/api";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const submitContactForm = async (formData) => {
  const { data } = await api.post("/contact", formData);
  return data;
};

export const submitQuotationForm = async (formData) => {
  const { data } = await api.post("/quotation", formData);
  return data;
};

export default api;
