import { FaCapsules, FaSyringe, FaThLarge } from "react-icons/fa";
import "./CategoryTabs.css";

const CategoryTabs = ({ active, onChange, showAll = true }) => {
  return (
    <div className="category-tabs-bar">
      {showAll && (
        <button className={active === "all" ? "active" : ""} onClick={() => onChange("all")}>
          <FaThLarge /> All
        </button>
      )}
      <button className={active === "medicine" ? "active" : ""} onClick={() => onChange("medicine")}>
        <FaCapsules /> Medicines
      </button>
      <button className={active === "surgical" ? "active" : ""} onClick={() => onChange("surgical")}>
        <FaSyringe /> Surgical Items
      </button>
    </div>
  );
};

export default CategoryTabs;
