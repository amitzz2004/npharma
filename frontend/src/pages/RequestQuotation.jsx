import { FaClock, FaCheckDouble, FaHeadset } from "react-icons/fa";
import PageBanner from "../components/common/PageBanner";
import QuotationForm from "../components/quotation/QuotationForm";

const perks = [
  { icon: <FaClock />, title: "Quick Response", desc: "We respond to quotation requests within 24 hours." },
  { icon: <FaCheckDouble />, title: "Accurate Pricing", desc: "Transparent, competitive pricing with no hidden costs." },
  { icon: <FaHeadset />, title: "Dedicated Support", desc: "A dedicated executive to help finalize your order." },
];

const RequestQuotation = () => {
  return (
    <>
      <PageBanner
        eyebrow="Request Quotation"
        title="Get a Custom Quotation"
        subtitle="Tell us what you need — medicines, surgical items, or both — and we'll get back to you with the best pricing."
        current="Request Quotation"
      />

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 50, alignItems: "start" }}>
            <div>
              <h2 style={{ fontSize: "1.5rem", marginBottom: 20 }}>Why Request a Quote From Us?</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {perks.map((p) => (
                  <div key={p.title} style={{ display: "flex", gap: 16 }}>
                    <div style={{ width: 46, height: 46, flexShrink: 0, borderRadius: "var(--radius-sm)", background: "var(--color-accent-light)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
                      {p.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1rem", marginBottom: 4 }}>{p.title}</h3>
                      <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <QuotationForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestQuotation;
