import { FaCheckCircle } from "react-icons/fa";
import Button from "../common/Button";
import { companyInfo } from "../../data/companyInfo";
import "./AboutPreview.css";

const points = [
  "Government-licensed pharma wholesale distributor",
  "Temperature-controlled storage & logistics",
  "Wide network of manufacturers & brands",
  "Timely delivery to hospitals & retailers",
];

const AboutPreview = () => {
  return (
    <section className="section about-preview">
      <div className="container about-preview-inner">
        <div className="about-preview-image">
          <div className="about-image-main" aria-label={`${companyInfo.name} facility`} />
          <div className="about-image-badge">
            <strong>{companyInfo.yearsInBusiness}+</strong>
            <span>Years of Trust</span>
          </div>
        </div>

        <div className="about-preview-content">
          <span className="eyebrow">About {companyInfo.name}</span>
          <h2>Committed to Healthcare, Delivered with Integrity</h2>
          <p>
            For over {companyInfo.yearsInBusiness} years, we have been a dependable link
            in the pharmaceutical supply chain — supplying quality medicines and surgical
            products to hospitals, clinics, pharmacies and healthcare institutions across
            the region, while staying fully compliant with drug licensing regulations.
          </p>
          <ul className="about-points">
            {points.map((point) => (
              <li key={point}><FaCheckCircle /> {point}</li>
            ))}
          </ul>
          <Button to="/about-us" variant="accent">Learn More About Us</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;