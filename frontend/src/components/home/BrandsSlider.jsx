import SectionHeading from "../common/SectionHeading";
import { brands } from "../../data/brands";
import "./BrandsSlider.css";

const BrandsSlider = () => {
  // duplicate list for seamless infinite scroll effect
  const loopBrands = [...brands, ...brands];

  return (
    <section className="section section-alt brands-slider">
      <div className="container">
        <SectionHeading
          eyebrow="Our Partners"
          title="Brands We Deal In"
          subtitle="We proudly distribute products from India's most trusted pharmaceutical and medical device brands."
        />
      </div>
      <div className="brands-track-wrapper">
        <div className="brands-track">
          {loopBrands.map((brand, i) => (
            <div className="brand-chip" key={`${brand.id}-${i}`}>
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSlider;
