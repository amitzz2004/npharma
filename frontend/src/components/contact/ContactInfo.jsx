import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { companyInfo } from "../../data/companyInfo";
import "./ContactInfo.css";

const items = [
  { icon: <FaMapMarkerAlt />, label: "Our Address", value: companyInfo.address },
  { icon: <FaPhoneAlt />, label: "Call Us", value: `${companyInfo.phone} / ${companyInfo.altPhone}` },
  { icon: <FaEnvelope />, label: "Email Us", value: companyInfo.email },
  { icon: <FaClock />, label: "Working Hours", value: companyInfo.workingHours },
];

const ContactInfo = () => {
  return (
    <div className="contact-info">
      {items.map((item) => (
        <div className="contact-info-item" key={item.label}>
          <div className="contact-info-icon">{item.icon}</div>
          <div>
            <h4>{item.label}</h4>
            <p>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
