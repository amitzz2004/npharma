import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { navLinks } from "../../data/navLinks";
import { companyInfo } from "../../data/companyInfo";
import Button from "../common/Button";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-main">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-icon">+</span>
          <span>
            {companyInfo.name.split(" ")[0]}
            <small>{companyInfo.name.split(" ").slice(1).join(" ")}</small>
          </span>
        </NavLink>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) =>
            link.children ? (
              <div
                className="nav-dropdown"
                key={link.label}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="nav-dropdown-toggle" onClick={() => setDropdownOpen((o) => !o)}>
                  {link.label} <FaChevronDown size={11} />
                </button>
                <div className={`nav-dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                  <NavLink to={link.path} onClick={() => setMenuOpen(false)}>
                    All Products
                  </NavLink>
                  {link.children.map((child) => (
                    <NavLink to={child.path} key={child.path} onClick={() => setMenuOpen(false)}>
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                to={link.path}
                key={link.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="navbar-actions">
          <Button to="/request-quotation" variant="primary" className="navbar-cta">
            Get Quotation
          </Button>
          <button className="navbar-toggle" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;