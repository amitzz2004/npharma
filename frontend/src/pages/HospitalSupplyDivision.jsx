import { FaHospital, FaWheelchair, FaStethoscope, FaTools } from "react-icons/fa";
import PageBanner from "../components/common/PageBanner";
import SectionHeading from "../components/common/SectionHeading";
import ProductGrid from "../components/products/ProductGrid";
import Button from "../components/common/Button";
import { getProductsByDivision } from "../data/products";

const features = [
  { icon: <FaWheelchair />, title: "Hospital Equipment", desc: "Beds, wheelchairs, stretchers and patient-care furniture." },
  { icon: <FaStethoscope />, title: "Diagnostic Tools", desc: "Reliable diagnostic and monitoring instruments." },
  { icon: <FaTools />, title: "Installation Support", desc: "Assistance with setup and after-sales service for equipment." },
];

const HospitalSupplyDivision = () => {
  const items = getProductsByDivision("hospital-supply-division");

  return (
    <>
      <PageBanner
        eyebrow="Our Divisions"
        title="Hospital Supply Division"
        subtitle="Complete hospital infrastructure supplies — from equipment and furniture to diagnostics and PPE."
        current="Hospital Supply Division"
      />

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 60 }}>
            {features.map((f) => (
              <div className="card" key={f.title} style={{ padding: 28, textAlign: "center" }}>
                <div style={{ width: 56, height: 56, margin: "0 auto 16px", borderRadius: "var(--radius-sm)", background: "var(--color-primary-light)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: "1.05rem", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <SectionHeading
            eyebrow="Hospital Essentials"
            title="Equipment & Supplies for Healthcare Facilities"
            subtitle="Everything a hospital or clinic needs to run efficiently — sourced and delivered by our team."
          />
          <ProductGrid products={items} />

          <div style={{ textAlign: "center", marginTop: 50 }}>
            <Button to="/request-quotation" variant="primary">
              <FaHospital /> &nbsp;Request Equipment Quotation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HospitalSupplyDivision;
