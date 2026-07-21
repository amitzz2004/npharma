import { FaTruck, FaCertificate, FaWarehouse, FaHeadset, FaTags, FaLeaf } from "react-icons/fa";
import SectionHeading from "../common/SectionHeading";
import "./WhyChooseUs.css";

const reasons = [
  { icon: <FaCertificate />, title: "Licensed & Compliant", desc: "Fully licensed wholesale distributor with valid GST & Drug License." },
  { icon: <FaWarehouse />, title: "Wide Inventory", desc: "500+ medicines and surgical products in stock, ready to dispatch." },
  { icon: <FaTruck />, title: "Timely Delivery", desc: "Reliable logistics network ensuring on-time delivery, every time." },
  { icon: <FaTags />, title: "Competitive Pricing", desc: "Direct sourcing from manufacturers means better margins for you." },
  { icon: <FaLeaf />, title: "Quality Assured", desc: "Every product is sourced from verified, quality-certified brands." },
  { icon: <FaHeadset />, title: "Dedicated Support", desc: "Responsive customer support for orders, queries and bulk requirements." },
];

const WhyChooseUs = () => {
  return (
    <section className="section why-choose-us">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Difference We Bring"
          subtitle="Healthcare providers trust us because we combine compliance, quality and speed in everything we deliver."
        />
        <div className="why-grid">
          {reasons.map((r) => (
            <div className="why-card" key={r.title}>
              <div className="why-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
