import { Link } from "react-router-dom";
import Loader from "./Loader";

const Button = ({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary", // primary | outline | accent
  block = false,
  loading = false,
  disabled = false,
  className = "",
}) => {
  const classes = `btn btn-${variant} ${block ? "btn-block" : ""} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled || loading}>
      {loading ? <Loader /> : children}
    </button>
  );
};

export default Button;
