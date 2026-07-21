import { FaCapsules, FaSyringe } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card card">
      <div className={`product-card-icon ${product.category}`}>
        {product.category === "medicine" ? <FaCapsules /> : <FaSyringe />}
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="product-card-tags">
        {product.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
