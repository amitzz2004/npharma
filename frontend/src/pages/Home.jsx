import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import ProductCategories from "../components/home/ProductCategories";
import StatsCounter from "../components/home/StatsCounter";
import WhyChooseUs from "../components/home/WhyChooseUs";
import BrandsSlider from "../components/home/BrandsSlider";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProductCategories />
      <StatsCounter />
      <WhyChooseUs />
      <BrandsSlider />

      <section className="section cta-section">
        <div className="container">
          <SectionHeading
            eyebrow="Get Started"
            title="Need a Bulk Quotation for Your Hospital or Pharmacy?"
            subtitle="Share your requirements with us and get a competitive quotation within 24 hours."
          />
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <Button to="/request-quotation" variant="primary">Request Quotation</Button>
            <Button to="/contact-us" variant="accent">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
