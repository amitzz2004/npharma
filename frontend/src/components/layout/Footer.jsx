import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { companyInfo } from "../../data/companyInfo";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-about">
          <div className="footer-logo">
            <span className="logo-icon">+</span>
            <span>{companyInfo.name}</span>
          </div>
          <p>
            A trusted name in pharmaceutical distribution and surgical supplies,
            proudly serving hospitals, clinics and retailers for over{" "}
            {companyInfo.yearsInBusiness} years.
          </p>
          <div className="footer-social">
            <a href={companyInfo.socialLinks.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href={companyInfo.socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href={companyInfo.socialLinks.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href={companyInfo.socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/our-products">Our Products</NavLink></li>
            <li><NavLink to="/why-choose-us">Why Choose Us</NavLink></li>
            <li><NavLink to="/request-quotation">Request Quotation</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Divisions</h4>
          <ul>
            <li><NavLink to="/pharma-distribution">Pharma Distribution</NavLink></li>
            <li><NavLink to="/surgical-supplies">Surgical Supplies</NavLink></li>
            <li><NavLink to="/hospital-supply-division">Hospital Supply Division</NavLink></li>
            <li><NavLink to="/brands-we-deal-in">Brands We Deal In</NavLink></li>
            <li><NavLink to="/license-details">GST & Drug License</NavLink></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get In Touch</h4>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt /> <span>{companyInfo.address}</span></li>
            <li><FaPhoneAlt /> <span>{companyInfo.phone} / {companyInfo.altPhone}</span></li>
            <li><FaEnvelope /> <span>{companyInfo.email}</span></li>
            <li><FaClock /> <span>{companyInfo.workingHours}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} {companyInfo.name}. All rights reserved.</p>
          <p className="footer-license">
            GSTIN: {companyInfo.gstNumber} &nbsp;|&nbsp; Drug License: {companyInfo.drugLicenseNumbers.wholesale}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
