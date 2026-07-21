import PageBanner from "../components/common/PageBanner";
import WhyChooseUsSection from "../components/home/WhyChooseUs";
import StatsCounter from "../components/home/StatsCounter";
import Button from "../components/common/Button";
import SectionHeading from "../components/common/SectionHeading";

const WhyChooseUsPage = () => {
  return (
    <>
      <PageBanner
        eyebrow="Why Choose Us"
        title="Why Healthcare Providers Trust Us"
        subtitle="Compliance, quality, and speed — the three pillars behind every order we fulfil."
        current="Why Choose Us"
      />

      <WhyChooseUsSection />
      <StatsCounter />

      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <SectionHeading
            title="Ready to Experience the Difference?"
            subtitle="Get in touch today and see why hospitals and pharmacies across the region choose us as their supply partner."
          />
          <Button to="/request-quotation" variant="primary">Request a Quotation</Button>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsPage;
