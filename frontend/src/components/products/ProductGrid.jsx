import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return <p className="product-grid-empty">No products found in this category yet.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductGrid;
