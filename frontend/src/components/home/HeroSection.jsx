import { useState, useEffect } from "react";
import { FaCapsules, FaSyringe, FaShieldAlt } from "react-icons/fa";
import Button from "../common/Button";
import "./HeroSection.css";

const slides = [
  {
    badge: "Trusted Pharma Distributor Since 2009",
    title: (
      <>
        Reliable Supply of <span>Medicines</span> &amp;{" "}
        <span>Surgical Equipment</span>
      </>
    ),
    desc: "We bridge the gap between leading manufacturers and healthcare providers — delivering genuine medicines, surgical supplies and hospital equipment with speed, compliance and care.",
    image: "/assets/images/hero/hero-1.jpg",
  },
  {
    badge: "500+ Products Across Categories",
    title: (
      <>
        Genuine Medicines, <span>Sourced Right</span>,{" "}
        <span>Delivered Fast</span>
      </>
    ),
    desc: "From antibiotics to chronic care medication, we supply verified pharmaceutical products directly from licensed manufacturers to your doorstep.",
    image: "/assets/images/hero/hero-2.jpg",
  },
  {
    badge: "Serving 200+ Hospitals & Clinics",
    title: (
      <>
        Complete <span>Surgical & Hospital</span> Supply Solutions
      </>
    ),
    desc: "Gloves, sutures, diagnostic tools and hospital equipment — everything a healthcare facility needs, backed by reliable logistics and support.",
    image: "/assets/images/hero/hero-3.jpg",
  },
  {
    badge: "Licensed & Fully Compliant",
    title: (
      <>
        Every Product <span>Verified</span>, Every Order{" "}
        <span>Compliant</span>
      </>
    ),
    desc: "We operate under valid GST and Drug License registrations, ensuring every shipment meets regulatory standards without exception.",
    image: "/assets/images/hero/hero-4.jpg",
  },
  {
    badge: "Pan-Region Delivery Network",
    title: (
      <>
        On-Time Delivery, <span>Every Single Time</span>
      </>
    ),
    desc: "Our logistics network ensures your pharmacy, clinic or hospital never runs short — with dependable, scheduled deliveries across the region.",
    image: "/assets/images/hero/hero-5.jpg",
  },
];

const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section className="hero">
      {/* Background image layers - one per slide, crossfaded via active class */}
      <div className="hero-bg-layer">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero-bg-image ${i === active ? "active" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
        <div className="hero-bg-overlay" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content" key={active}>
          <span className="hero-badge fade-in">{slide.badge}</span>
          <h1 className="fade-in-up">{slide.title}</h1>
          <p className="fade-in-up delay-1">{slide.desc}</p>

          <div className="hero-actions fade-in-up delay-2">
            <Button to="/request-quotation" variant="primary">Request Quotation</Button>
            <Button to="/our-products" variant="outline">Explore Products</Button>
          </div>

          <div className="hero-stats fade-in-up delay-3">
            <div><strong>500+</strong><span>Products Listed</span></div>
            <div><strong>200+</strong><span>Hospitals Served</span></div>
            <div><strong>15+</strong><span>Years Experience</span></div>
          </div>

          <div className="hero-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={i === active ? "active" : ""}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-card card-1"><FaCapsules /><p>Genuine Medicines</p></div>
          <div className="hero-visual-card card-2"><FaSyringe /><p>Surgical Supplies</p></div>
          <div className="hero-visual-card card-3"><FaShieldAlt /><p>Licensed & Verified</p></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;