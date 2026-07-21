// category: "medicine" | "surgical"
// division tags help split into Pharma Distribution / Surgical Supplies / Hospital Supply Division pages

export const products = [
  // ---------------- MEDICINES ----------------
  {
    id: "med-001",
    name: "Antibiotics Range",
    category: "medicine",
    division: "pharma-distribution",
    description: "Broad-spectrum antibiotics from leading pharmaceutical manufacturers.",
    image: "/assets/images/medicines/antibiotics.jpg",
    tags: ["Prescription", "Generic & Branded"],
  },
  {
    id: "med-002",
    name: "Analgesics & Painkillers",
    category: "medicine",
    division: "pharma-distribution",
    description: "Pain relief medication for acute and chronic conditions.",
    image: "/assets/images/medicines/analgesics.jpg",
    tags: ["OTC", "Prescription"],
  },
  {
    id: "med-003",
    name: "Cardiac & Diabetes Care",
    category: "medicine",
    division: "pharma-distribution",
    description: "Chronic disease management medicines for cardiac and diabetic patients.",
    image: "/assets/images/medicines/cardiac.jpg",
    tags: ["Chronic Care"],
  },
  {
    id: "med-004",
    name: "Vitamins & Supplements",
    category: "medicine",
    division: "pharma-distribution",
    description: "Nutritional supplements, multivitamins and immunity boosters.",
    image: "/assets/images/medicines/vitamins.jpg",
    tags: ["OTC", "Wellness"],
  },
  {
    id: "med-005",
    name: "Pediatric Medicines",
    category: "medicine",
    division: "pharma-distribution",
    description: "Safe and effective formulations designed for children.",
    image: "/assets/images/medicines/pediatric.jpg",
    tags: ["Pediatric"],
  },
  {
    id: "med-006",
    name: "Dermatology Range",
    category: "medicine",
    division: "pharma-distribution",
    description: "Skin care and dermatological treatment products.",
    image: "/assets/images/medicines/dermatology.jpg",
    tags: ["Skin Care"],
  },

  // ---------------- SURGICAL ITEMS ----------------
  {
    id: "sur-001",
    name: "Surgical Gloves",
    category: "surgical",
    division: "surgical-supplies",
    description: "Sterile latex & nitrile gloves for surgical and examination use.",
    image: "/assets/images/surgical/gloves.jpg",
    tags: ["Sterile", "Disposable"],
  },
  {
    id: "sur-002",
    name: "Sutures & Wound Closure",
    category: "surgical",
    division: "surgical-supplies",
    description: "Absorbable and non-absorbable sutures for all surgical needs.",
    image: "/assets/images/surgical/sutures.jpg",
    tags: ["OT Consumables"],
  },
  {
    id: "sur-003",
    name: "Syringes & Needles",
    category: "surgical",
    division: "surgical-supplies",
    description: "Disposable syringes and needles in various sizes.",
    image: "/assets/images/surgical/syringes.jpg",
    tags: ["Disposable"],
  },
  {
    id: "sur-004",
    name: "Surgical Dressing & Bandages",
    category: "surgical",
    division: "surgical-supplies",
    description: "Gauze, cotton, adhesive tapes and wound dressing materials.",
    image: "/assets/images/surgical/dressing.jpg",
    tags: ["Wound Care"],
  },
  {
    id: "sur-005",
    name: "Hospital Furniture & Equipment",
    category: "surgical",
    division: "hospital-supply-division",
    description: "Hospital beds, wheelchairs, stretchers and examination tables.",
    image: "/assets/images/surgical/furniture.jpg",
    tags: ["Equipment"],
  },
  {
    id: "sur-006",
    name: "Diagnostic Instruments",
    category: "surgical",
    division: "hospital-supply-division",
    description: "BP monitors, stethoscopes, thermometers and diagnostic kits.",
    image: "/assets/images/surgical/diagnostic.jpg",
    tags: ["Diagnostics"],
  },
  {
    id: "sur-007",
    name: "PPE Kits",
    category: "surgical",
    division: "hospital-supply-division",
    description: "Personal protective equipment kits for hospital staff.",
    image: "/assets/images/surgical/ppe.jpg",
    tags: ["Safety"],
  },
];

export const getProductsByCategory = (category) => {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
};

export const getProductsByDivision = (division) => {
  return products.filter((p) => p.division === division);
};
