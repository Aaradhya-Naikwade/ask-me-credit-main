import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "../components/styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loanOpenDesktop, setLoanOpenDesktop] = useState(false);
  const [loanOpenMobile, setLoanOpenMobile] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setLoanOpenDesktop(false);
    setLoanOpenMobile(false);
  }, [location]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Loans", dropdown: true },
    { name: "Calculators", path: "/calculators" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const loanLinks = [
    { name: "Personal Loan", path: "/loans/personal" },
    { name: "Home Loan", path: "/loans/home" },
    { name: "Business Loan", path: "/loans/business" },
    { name: "Vehicle Loan", path: "/loans/vehicle" },
  ];

  return (
    <nav className="navbar">
      {/* MAIN BAR */}
      <div className="navbar-inner">
        {/* LOGO */}
        <Link to="/" className="navbar-left">
          <div className="logo-box">
            <svg className="wallet-icon" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="6" width="20" height="14" rx="2" />
              <path d="M16 12h4" />
            </svg>
          </div>
          <span className="brand">
            Ask Me <span className="brand-accent">Credit</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="navbar-center desktop-only">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.name}
                className="nav-item dropdown"
                onMouseEnter={() => setLoanOpenDesktop(true)}
                onMouseLeave={() => setLoanOpenDesktop(false)}
              >
                <span className="nav-dropdown-trigger">
                  Loans
                  <FiChevronDown
                    className={`chevron ${loanOpenDesktop ? "rotate" : ""
                      }`}
                  />
                </span>

                <AnimatePresence>
                  {loanOpenDesktop && (
                    <motion.div
                      className="dropdown-mega"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      {loanLinks.map((loan) => (
                        <Link
                          key={loan.name}
                          to={loan.path}
                          className="mega-link"
                        >
                          {loan.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li
                key={link.name}
                className={`nav-item ${location.pathname === link.path ? "active" : ""
                  }`}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            )
          )}
        </ul>

        {/* DESKTOP CTA */}
        <Link to="/apply" className="cta-premium desktop-only">
          Apply Now
        </Link>
      </div>

      {/* MOBILE TOGGLE — ALWAYS VISIBLE */}
      <button
        className="menu-toggle mobile-only"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
          >
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name}>
                  <div
                    className="mobile-link"
                    onClick={() =>
                      setLoanOpenMobile(!loanOpenMobile)
                    }
                  >
                    Loans
                    <FiChevronDown
                      className={`chevron ${loanOpenMobile ? "rotate" : ""
                        }`}
                    />
                  </div>

                  {loanOpenMobile &&
                    loanLinks.map((loan) => (
                      <Link
                        key={loan.name}
                        to={loan.path}
                        className="mobile-sublink"
                      >
                        {loan.name}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="mobile-link"
                >
                  {link.name}
                </Link>
              )
            )}

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
