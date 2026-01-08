
import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoanForm from "../components/LoanForm";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <Navbar />
      
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="contact-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="kicker">Get in Touch</span>
            <h1>Let’s start a <span>Conversation.</span></h1>
            <p>Our financial experts are here to help you navigate your credit journey.</p>
          </motion.div>

          <div className="contact-main-grid">
            {/* Left side: Contact Info */}
            <motion.div 
              className="contact-info-panel"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="info-card">
                <div className="info-icon">
                  <FiMail />
                </div>
                <div className="info-details">
                  <h4>Email Support</h4>
                  <p>support@askmecredit.com</p>
                  <span className="status-tag">Response in 2 hours</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <FiPhone />
                </div>
                <div className="info-details">
                  <h4>Advisory Hotline</h4>
                  <p>+91 1800 123 4567</p>
                  <span className="status-tag">Mon-Sat, 9am - 7pm</span>
                </div>
              </div>

              <div className="social-section">
                <h5>Global Presence</h5>
                <div className="social-links-grid">
                  <a href="#" className="social-link-item"><FiLinkedin /> LinkedIn</a>
                  <a href="#" className="social-link-item"><FiTwitter /> Twitter</a>
                  <a href="#" className="social-link-item"><FiInstagram /> Instagram</a>
                </div>
              </div>
            </motion.div>

            {/* Right side: Integrated LoanForm */}
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="form-wrapper-inner">
                <LoanForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;