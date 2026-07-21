import { useState } from "react";
import { FaUser, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaFileInvoice, FaPills } from "react-icons/fa";
import Button from "../common/Button";
import { useFetch } from "../../hooks/useFetch";
import { useApp } from "../../context/AppContext";
import { submitContactForm } from "../../services/api";
import "./ContactForm.css";

const initialState = {
  customerName: "",
  phoneNumber: "",
  location: "",
  requirementType: "",
  email: "",
  timeline: "",
  gstNumber: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [fieldErrors, setFieldErrors] = useState({});
  const { execute, loading } = useFetch(submitContactForm);
  const { showToast } = useApp();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.customerName.trim()) errors.customerName = "Name is required";
    if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phoneNumber)) errors.phoneNumber = "Enter a valid phone number";
    if (!formData.location.trim()) errors.location = "Location is required";
    if (!formData.requirementType) errors.requirementType = "Please select a requirement type";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Enter a valid email";
    if (!formData.timeline.trim()) errors.timeline = "Timeline is required";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await execute(formData);
      showToast("success", res?.message || "Your enquiry has been sent successfully!");
      setFormData(initialState);
    } catch (err) {
      showToast("error", err.message || "Failed to send. Please try again.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label><FaUser /> Customer Name *</label>
          <input
            type="text"
            name="customerName"
            placeholder="Your full name"
            value={formData.customerName}
            onChange={handleChange}
          />
          {fieldErrors.customerName && <span className="field-error">{fieldErrors.customerName}</span>}
        </div>

        <div className="form-group">
          <label><FaPhoneAlt /> Phone Number *</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="+91 98765 43210"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {fieldErrors.phoneNumber && <span className="field-error">{fieldErrors.phoneNumber}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label><FaMapMarkerAlt /> Location *</label>
          <input
            type="text"
            name="location"
            placeholder="City, State"
            value={formData.location}
            onChange={handleChange}
          />
          {fieldErrors.location && <span className="field-error">{fieldErrors.location}</span>}
        </div>

        <div className="form-group">
          <label><FaEnvelope /> Email *</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label><FaPills /> Type of Requirement *</label>
          <select name="requirementType" value={formData.requirementType} onChange={handleChange}>
            <option value="">Select requirement</option>
            <option value="medicine">Medicines</option>
            <option value="surgical">Surgical Items</option>
            <option value="both">Both</option>
          </select>
          {fieldErrors.requirementType && <span className="field-error">{fieldErrors.requirementType}</span>}
        </div>

        <div className="form-group">
          <label><FaClock /> Timeline *</label>
          <input
            type="text"
            name="timeline"
            placeholder="e.g. Within a week"
            value={formData.timeline}
            onChange={handleChange}
          />
          {fieldErrors.timeline && <span className="field-error">{fieldErrors.timeline}</span>}
        </div>
      </div>

      <div className="form-group">
        <label><FaFileInvoice /> GST Number (Optional)</label>
        <input
          type="text"
          name="gstNumber"
          placeholder="e.g. 06ABCDE1234F1Z5"
          value={formData.gstNumber}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" variant="primary" block loading={loading}>
        {loading ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
};

export default ContactForm;
