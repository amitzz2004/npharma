import { useState } from "react";
import { FaCapsules, FaSyringe } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="product-card card">
      <div className="product-card-image-wrap">
        {/* Image temporarily disabled — using icon-only fallback for now
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-card-image"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="product-card-image-fallback">
            {product.category === "medicine" ? <FaCapsules /> : <FaSyringe />}
          </div>
        )}
        */}
        <div className="product-card-image-fallback">
          {product.category === "medicine" ? <FaCapsules /> : <FaSyringe />}
        </div>

        <div className={`product-card-badge ${product.category}`}>
          {product.category === "medicine" ? <FaCapsules /> : <FaSyringe />}
        </div>
      </div>

      <div className="product-card-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card-tags">
          {product.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;