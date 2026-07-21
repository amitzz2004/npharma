import { FaCapsules, FaTruck, FaThermometerHalf, FaCertificate } from "react-icons/fa";
import PageBanner from "../components/common/PageBanner";
import SectionHeading from "../components/common/SectionHeading";
import ProductGrid from "../components/products/ProductGrid";
import Button from "../components/common/Button";
import { getProductsByDivision } from "../data/products";

const features = [
  { icon: <FaCertificate />, title: "Licensed Distribution", desc: "Fully compliant wholesale drug license for pharma distribution." },
  { icon: <FaThermometerHalf />, title: "Cold Chain Storage", desc: "Temperature-controlled storage for sensitive medicines." },
  { icon: <FaTruck />, title: "Fast Dispatch", desc: "Efficient logistics network for on-time medicine delivery." },
];

const PharmaDistribution = () => {
  const items = getProductsByDivision("pharma-distribution");

  return (
    <>
      <PageBanner
        eyebrow="Our Divisions"
        title="Pharma Distribution"
        subtitle="Wide-ranging pharmaceutical distribution across therapeutic categories, delivered to pharmacies, hospitals and clinics."
        current="Pharma Distribution"
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
            eyebrow="Medicine Categories"
            title="Pharmaceutical Products We Distribute"
            subtitle="A comprehensive range of medicine categories to meet every healthcare need."
          />
          <ProductGrid products={items} />

          <div style={{ textAlign: "center", marginTop: 50 }}>
            <Button to="/request-quotation" variant="primary">
              <FaCapsules /> &nbsp;Request Medicine Quotation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PharmaDistribution;
