import { useState, useMemo } from "react";
import { FaCapsules, FaSyringe, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import { getProductsByCategory } from "../../data/products";
import "./ProductCategories.css";

const ProductCategories = () => {
  const [active, setActive] = useState("medicine");

  const items = useMemo(() => getProductsByCategory(active).slice(0, 6), [active]);

  return (
    <section className="section section-alt product-categories">
      <div className="container">
        <SectionHeading
          eyebrow="What We Supply"
          title="Explore Our Product Categories"
          subtitle="We deal in two core categories — pharmaceutical medicines and surgical / hospital supplies — sourced from trusted, licensed manufacturers."
        />

        <div className="category-tabs">
          <button
            className={active === "medicine" ? "active" : ""}
            onClick={() => setActive("medicine")}
          >
            <FaCapsules /> Medicines
          </button>
          <button
            className={active === "surgical" ? "active" : ""}
            onClick={() => setActive("surgical")}
          >
            <FaSyringe /> Surgical Items
          </button>
        </div>

        <div className="category-grid">
          {items.map((product) => (
            <div className="category-card card" key={product.id}>
              <div className={`category-card-icon ${product.category}`}>
                {product.category === "medicine" ? <FaCapsules /> : <FaSyringe />}
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="category-card-tags">
                {product.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="category-cta">
          <Link to="/our-products">
            View All Products <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
