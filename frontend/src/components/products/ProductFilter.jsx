import { FaSearch } from "react-icons/fa";
import CategoryTabs from "./CategoryTabs";
import "./ProductFilter.css";

const ProductFilter = ({ active, onCategoryChange, search, onSearchChange }) => {
  return (
    <div className="product-filter">
      <CategoryTabs active={active} onChange={onCategoryChange} />
      <div className="product-search">
        <FaSearch />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProductFilter;
