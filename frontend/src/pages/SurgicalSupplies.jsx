import { FaSyringe, FaShieldAlt, FaBoxOpen, FaCertificate } from "react-icons/fa";
import PageBanner from "../components/common/PageBanner";
import SectionHeading from "../components/common/SectionHeading";
import ProductGrid from "../components/products/ProductGrid";
import Button from "../components/common/Button";
import { getProductsByDivision } from "../data/products";

const features = [
  { icon: <FaCertificate />, title: "Certified Quality", desc: "Sourced from ISO & CE certified surgical product manufacturers." },
  { icon: <FaShieldAlt />, title: "Sterile & Safe", desc: "Properly sealed, sterile consumables for safe clinical use." },
  { icon: <FaBoxOpen />, title: "Bulk Supply", desc: "Bulk order fulfilment for hospitals, nursing homes and OTs." },
];

const SurgicalSupplies = () => {
  const items = getProductsByDivision("surgical-supplies");

  return (
    <>
      <PageBanner
        eyebrow="Our Divisions"
        title="Surgical Supplies"
        subtitle="High-quality surgical consumables and OT supplies for hospitals, nursing homes and surgical centres."
        current="Surgical Supplies"
      />

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 60 }}>
            {features.map((f) => (
              <div className="card" key={f.title} style={{ padding: 28, textAlign: "center" }}>
                <div style={{ width: 56, height: 56, margin: "0 auto 16px", borderRadius: "var(--radius-sm)", background: "var(--color-accent-light)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: "1.05rem", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <SectionHeading
            eyebrow="Surgical Categories"
            title="Surgical Products We Supply"
            subtitle="From sutures to sterile gloves, we cover the full range of surgical consumables."
          />
          <ProductGrid products={items} />

          <div style={{ textAlign: "center", marginTop: 50 }}>
            <Button to="/request-quotation" variant="accent">
              <FaSyringe /> &nbsp;Request Surgical Quotation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SurgicalSupplies;
