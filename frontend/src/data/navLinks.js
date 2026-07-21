export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  {
    label: "Our Products",
    path: "/our-products",
    children: [
      { label: "Pharma Distribution", path: "/pharma-distribution" },
      { label: "Surgical Supplies", path: "/surgical-supplies" },
      { label: "Hospital Supply Division", path: "/hospital-supply-division" },
    ],
  },
  { label: "Brands We Deal In", path: "/brands-we-deal-in" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Request Quotation", path: "/request-quotation" },
  { label: "Contact Us", path: "/contact-us" },
];
