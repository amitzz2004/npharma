import PageBanner from "../components/common/PageBanner";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import MapEmbed from "../components/contact/MapEmbed";

const ContactUs = () => {
  return (
    <>
      <PageBanner
        eyebrow="Contact Us"
        title="Get In Touch With Us"
        subtitle="Have a question or need a bulk order? Fill out the form below and our team will reach out to you shortly."
        current="Contact Us"
      />

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 50, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <ContactInfo />
              <MapEmbed />
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
