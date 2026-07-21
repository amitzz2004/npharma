import { FaFileInvoice, FaCertificate, FaCheckCircle } from "react-icons/fa";
import PageBanner from "../components/common/PageBanner";
import { companyInfo } from "../data/companyInfo";

const LicenseDetails = () => {
  return (
    <>
      <PageBanner
        eyebrow="Compliance"
        title="GST & Drug License Details"
        subtitle="Full transparency — verify our registration and licensing details below."
        current="GST & Drug License"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 780, margin: "0 auto" }}>
          <div className="card" style={{ padding: 36, marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ width: 50, height: 50, borderRadius: "var(--radius-sm)", background: "var(--color-primary-light)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>
                <FaFileInvoice />
              </div>
              <h2 style={{ fontSize: "1.3rem" }}>GST Registration</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid var(--color-border)" }}>
              <span style={{ color: "var(--color-text-muted)" }}>GSTIN Number</span>
              <strong>{companyInfo.gstNumber}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0" }}>
              <span style={{ color: "var(--color-text-muted)" }}>Registered Address</span>
              <strong style={{ textAlign: "right", maxWidth: "60%" }}>{companyInfo.address}</strong>
            </div>
          </div>

          <div className="card" style={{ padding: 36 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{ width: 50, height: 50, borderRadius: "var(--radius-sm)", background: "var(--color-accent-light)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem" }}>
                <FaCertificate />
              </div>
              <h2 style={{ fontSize: "1.3rem" }}>Drug License</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid var(--color-border)" }}>
              <span style={{ color: "var(--color-text-muted)" }}>Wholesale Drug License</span>
              <strong>{companyInfo.drugLicenseNumbers.wholesale}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0" }}>
              <span style={{ color: "var(--color-text-muted)" }}>Retail Drug License</span>
              <strong>{companyInfo.drugLicenseNumbers.retail}</strong>
            </div>
          </div>

          <div style={{ marginTop: 30, display: "flex", alignItems: "center", gap: 10, color: "var(--color-primary)", fontWeight: 600, justifyContent: "center" }}>
            <FaCheckCircle /> All licenses verified & up to date
          </div>
        </div>
      </section>
    </>
  );
};

export default LicenseDetails;
