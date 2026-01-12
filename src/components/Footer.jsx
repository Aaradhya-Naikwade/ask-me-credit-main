import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ChevronRight, 
  ShieldCheck 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../components/styles/Footer.css";
import LogoImg from "../assets/ask-me-credit.png"

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "Personal Loan", path: "/loans/personal" },
    { name: "Business Loan", path: "/loans/business" },
    { name: "Home Loan", path: "/loans/home" },
    { name: "Gold Loan", path: "/loans/gold" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-column brand-col">
          <div className="footer-logo" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
            <img src={LogoImg} alt="Ask Me Credit" className="logo-img" />
            <h2>Ask Me <span>Credit</span></h2>
          </div>
          <p className="footer-desc">
            Empowering your financial journey with smart, transparent, and instant credit solutions tailored for your lifestyle.
          </p>
          <div className="social-links">
            <motion.a 
              whileHover={{ y: -5, backgroundColor: "#2664eb" }} 
              href="https://linkedin.com/company/askmecredit" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, backgroundColor: "#2664eb" }} 
              href="https://instagram.com/askmecredit" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </motion.a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Our Products</h4>
          <ul>
            {productLinks.map((link) => (
              <li key={link.name}>
                <motion.a 
                  whileHover={{ x: 5, color: "#ffffff" }} 
                  onClick={() => navigate(link.path)}
                  style={{ cursor: 'pointer' }}
                >
                  <ChevronRight size={18} className="link-icon" /> {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.name}>
                <motion.a 
                  whileHover={{ x: 5, color: "#ffffff" }} 
                  onClick={() => navigate(link.path)}
                  style={{ cursor: 'pointer' }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-column">
          <h4>Get in Touch</h4>
          <ul className="footer-contact">
            <li>
              <Mail size={22} className="contact-icon" />
              <a href="mailto:support@askmecredit.com">support@askmecredit.com</a>
            </li>
            <li>
              <Phone size={22} className="contact-icon" />
              <a href="tel:+911234567890">+91 12345 67890</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {currentYear} Ask Me Credit. All Rights Reserved.</p>
          <div className="footer-legal">
            <ShieldCheck size={18} className="legal-icon" />
            <p>Made in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;