import { FaHandshake } from "react-icons/fa";
import PageBanner from "../components/common/PageBanner";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import { brands } from "../data/brands";

const BrandsWeDealIn = () => {
  return (
    <>
      <PageBanner
        eyebrow="Our Partners"
        title="Brands We Deal In"
        subtitle="We are proud to be an authorized distribution partner for some of the most trusted names in pharmaceuticals and medical devices."
        current="Brands We Deal In"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Trusted Partnerships"
            title="Our Brand Network"
            subtitle="A carefully curated portfolio of pharmaceutical and surgical brands, chosen for quality and reliability."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
            {brands.map((brand) => (
              <div key={brand.id} className="card" style={{ padding: "26px 16px", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, margin: "0 auto 14px", borderRadius: "50%", background: "var(--color-bg-alt)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
                  {brand.name.charAt(0)}
                </div>
                <p style={{ fontSize: "0.88rem", fontWeight: 600 }}>{brand.name}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 56 }}>
            <p style={{ color: "var(--color-text-muted)", marginBottom: 20 }}>
              Looking for a specific brand? Get in touch — we likely already stock it.
            </p>
            <Button to="/contact-us" variant="primary">
              <FaHandshake /> &nbsp;Ask About a Brand
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandsWeDealIn;
