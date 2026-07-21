import { useMemo, useState } from "react";
import PageBanner from "../components/common/PageBanner";
import ProductFilter from "../components/products/ProductFilter";
import ProductGrid from "../components/products/ProductGrid";
import { products } from "../data/products";

const OurProducts = () => {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === "all" || p.category === category;
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <>
      <PageBanner
        eyebrow="Our Products"
        title="Our Complete Product Range"
        subtitle="Browse our dynamic catalogue of medicines and surgical items, sourced from trusted, licensed manufacturers."
        current="Our Products"
      />

      <section className="section">
        <div className="container">
          <ProductFilter
            active={category}
            onCategoryChange={setCategory}
            search={search}
            onSearchChange={setSearch}
          />
          <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginBottom: 30, fontSize: "0.9rem" }}>
            Showing {filtered.length} of {products.length} products
          </p>
          <ProductGrid products={filtered} />
        </div>
      </section>
    </>
  );
};

export default OurProducts;
