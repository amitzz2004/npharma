import { FaCheckCircle, FaBullseye, FaEye } from "react-icons/fa";
import PageBanner from "../components/common/PageBanner";
import SectionHeading from "../components/common/SectionHeading";
import { companyInfo } from "../data/companyInfo";

const AboutUs = () => {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title={`About ${companyInfo.name}`}
        subtitle="Delivering healthcare essentials with trust, compliance and speed since our inception."
        current="About Us"
      />

      <section className="section">
        <div className="container info-grid">
          <div>
            <span className="eyebrow" style={{ display: "inline-block", color: "var(--color-primary)", background: "var(--color-primary-light)", padding: "6px 16px", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 600, marginBottom: 16 }}>
              Our Story
            </span>
            <h2 style={{ marginBottom: 18, fontSize: "1.9rem" }}>
              A Trusted Name in Pharmaceutical Distribution
            </h2>
            <p style={{ color: "var(--color-text-muted)", marginBottom: 16 }}>
              {companyInfo.name} was founded with a simple mission — to make quality
              medicines and surgical supplies accessible to hospitals, clinics, and
              retail pharmacies through a dependable, compliant, and efficient
              distribution network.
            </p>
            <p style={{ color: "var(--color-text-muted)", marginBottom: 16 }}>
              Over {companyInfo.yearsInBusiness}+ years, we have built strong
              relationships with leading pharmaceutical manufacturers and medical
              device brands, enabling us to offer a comprehensive product portfolio
              spanning medicines, surgical consumables and hospital equipment.
            </p>
            <p style={{ color: "var(--color-text-muted)" }}>
              Every product we distribute is sourced through verified channels and
              stored under proper conditions, ensuring quality and safety reach our
              customers exactly as intended.
            </p>
          </div>

          <div style={{ display: "grid", gap: 20 }}>
            <div className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <FaBullseye style={{ fontSize: "1.6rem", color: "var(--color-primary)", flexShrink: 0, marginTop: 4 }} />
                <div>
                  <h3 style={{ marginBottom: 8, fontSize: "1.1rem" }}>Our Mission</h3>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>
                    To ensure timely, reliable and compliant access to essential
                    medicines and surgical supplies for every healthcare provider we serve.
                  </p>
                </div>
              </div>
            </div>
            <div className="card" style={{ padding: 28 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <FaEye style={{ fontSize: "1.6rem", color: "var(--color-accent)", flexShrink: 0, marginTop: 4 }} />
                <div>
                  <h3 style={{ marginBottom: 8, fontSize: "1.1rem" }}>Our Vision</h3>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.92rem" }}>
                    To become the most trusted regional pharma distribution partner,
                    known for quality, compliance and customer-first service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us Every Day"
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {["Integrity", "Compliance", "Reliability", "Customer Focus"].map((value) => (
              <div key={value} className="card" style={{ padding: 24, textAlign: "center" }}>
                <FaCheckCircle style={{ fontSize: "1.6rem", color: "var(--color-primary)", marginBottom: 12 }} />
                <h3 style={{ fontSize: "1rem" }}>{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
