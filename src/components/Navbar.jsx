
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "../components/styles/Navbar.css";
import logo from "../assets/ask-me-credit.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Close menus when route changes
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Loans",
      path: "/loans",
      submenu: [
        { name: "Personal Loan", path: "/loans/personal" },
        { name: "Business Loan", path: "/loans/business" },
        { name: "Home Loan", path: "/loans/home" },
        { name: "Education Loan", path: "/loans/education" },
        { name: "Car Loan", path: "/loans/car" },
        { name: "Gold Loan", path: "/loans/gold" },
        { name: "Two-wheeler Loan", path: "/loans/two-wheeler" },
        { name: "Commercial Vehicle Loan", path: "/loans/commercial-vehicle" },
        { name: "Working Capital Loan", path: "/loans/working-capital" },
        { name: "Loan Against Property", path: "/loans/lap" },
      ],
    },
    {
      name: "Calculators",
      path: "/calculators",
      submenu: [
        { name: "EMI Calculator", path: "/emi-calculator" },
        { name: "Personal Loan Calculator", path: "/personal-loan-calculator" },
        { name: "Home Loan Calculator", path: "/home-loan-calculator" },
        { name: "Business Loan Calculator", path: "/business-loan-calculator" },
        { name: "Car Loan Calculator", path: "/car-loan-calculator" },
        { name: "GST Calculator", path: "/gst-calculator" },
      
      ],
    },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileSubmenu = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LOGO */}
        <Link to="/" className="navbar-left">
          <img src={logo} alt="Ask Me Credit" className="navbar-logo" />
          <span className="brand">
            Ask Me <span className="brand-accent">Credit</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="navbar-right desktop-only">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`nav-item ${link.submenu ? "has-dropdown" : ""} ${location.pathname === link.path ? "active" : ""
                  }`}
              >
                <Link to={link.path}>
                  {link.name}
                  {link.submenu && <FiChevronDown className="chevron" />}
                </Link>

                {link.submenu && (
                  <ul className="dropdown-menu">
                    {link.submenu.map((sub) => (
                      <li key={sub.name}>
                        <Link to={sub.path}>{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <Link to="/apply" className="cta-premium">
            Apply Now
          </Link>
        </div>
      </div>

      {/* MOBILE TOGGLE */}
      <button
        className="menu-toggle mobile-only"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="mobile-nav-content">
              {navLinks.map((link) => (
                <div key={link.name} className="mobile-nav-group">
                  <div className="mobile-link-wrapper">
                    <Link to={link.path} className="mobile-link">
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <button
                        className={`submenu-trigger ${activeDropdown === link.name ? 'rotated' : ''}`}
                        onClick={() => toggleMobileSubmenu(link.name)}
                      >
                        <FiChevronDown />
                      </button>
                    )}
                  </div>

                  {link.submenu && (
                    <motion.div
                      className="mobile-submenu"
                      initial={false}
                      animate={{ height: activeDropdown === link.name ? "auto" : 0, opacity: activeDropdown === link.name ? 1 : 0 }}
                      style={{ overflow: "hidden" }}
                    >
                      {link.submenu.map((sub) => (
                        <Link key={sub.name} to={sub.path} className="mobile-sublink">
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <Link to="/apply" className="cta-premium full-width">
              Start Application
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;