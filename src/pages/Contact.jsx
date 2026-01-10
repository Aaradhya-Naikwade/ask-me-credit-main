import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";

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

          {/* INTRO */}
          <motion.div
            className="contact-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="kicker">Get in Touch</span>
            <h1>
              Let’s start a <span>Conversation.</span>
            </h1>
            <p>
              Our financial experts are here to help you navigate your credit journey.
            </p>
          </motion.div>

          <div className="contact-main-grid">

            {/* LEFT */}
            <motion.div
              className="contact-image-panel"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/images/contact-us-page.jpg"
                alt="Customer support"
                className="contact-bg-image"
                loading="lazy"
              />

              <div className="glass-contact-box">
                <div className="glass-content-top">
                  <h3 className="glass-heading">Contact Info</h3>

                  <div className="glass-info-list">
                    <div className="glass-info-item">
                      <div className="glass-icon"><FiMail /></div>
                      <div>
                        <p className="label">Email Support</p>
                        <p className="value">support@askmecredit.com</p>
                      </div>
                    </div>

                    <div className="glass-info-item">
                      <div className="glass-icon"><FiPhone /></div>
                      <div>
                        <p className="label">Advisory Hotline</p>
                        <p className="value">+91 1800 123 4567</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-social-strip">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-box"
                  >
                    <FiLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-box"
                  >
                    <FiInstagram />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              // className="contact-form-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <LoanForm />
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
