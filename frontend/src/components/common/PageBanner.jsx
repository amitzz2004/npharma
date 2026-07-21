import { Link } from "react-router-dom";

const PageBanner = ({ eyebrow, title, subtitle, current }) => {
  return (
    <section className="page-banner">
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <span>{current}</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
