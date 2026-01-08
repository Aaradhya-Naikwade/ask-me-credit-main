import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/TermsAndCo.css";

const Terms = () => {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "eligibility", title: "2. Loan Eligibility" },
    { id: "privacy", title: "3. Data Privacy" },
    { id: "obligations", title: "4. User Obligations" },
  ];

  return (
    <div className="terms-page-wrapper">
      <Navbar />
      
      <section className="terms-hero">
        <div className="container">
          <motion.div 
            className="terms-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span className="kicker">Legal Framework</span> */}
            <h1>Terms & <span>Conditions.</span></h1>
            <p>Last updated: January 2026. Please read these terms carefully before using our services.</p>
          </motion.div>

          <div className="terms-grid">
            {/* Left side: Navigation/Summary */}
            <motion.div 
              className="terms-nav-panel"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="nav-card">
                <h5>Table of Contents</h5>
                <ul>
                  {sections.map((item) => (
                    <li key={item.id}><a href={`#${item.id}`}>{item.title}</a></li>
                  ))}
                </ul>
                <div className="help-box">
                  <p>Have questions? Reach out to our legal team.</p>
                  <a href="/contact">Contact Support</a>
                </div>
              </div>
            </motion.div>

            {/* Right side: Legal Content */}
            <motion.div 
              className="terms-content-panel"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="content-card">
                <section id="acceptance">
                  <h3>1. Acceptance of Terms</h3>
                  <p>By accessing or using AskMeCredit, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, please refrain from using our platform.</p>
                </section>

                <section id="eligibility">
                  <h3>2. Loan Eligibility</h3>
                  <p>Users must be at least 18 years of age and residents of India to apply for financial products. Verification of income and credit score is mandatory for all applications.</p>
                </section>

                <section id="privacy">
                  <h3>3. Data Privacy</h3>
                  <p>Your data is encrypted using industry-standard protocols. We collect information only necessary for the loan assessment process as governed by RBI guidelines.</p>
                </section>

                <section id="obligations">
                  <h3>4. User Obligations</h3>
                  <p>You agree to provide accurate, current, and complete information during the application process. Fraudulent activity will lead to immediate termination of service and legal action.</p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;