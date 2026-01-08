import React from "react";
import { motion } from "framer-motion";
import { FiLock, FiShield, FiEye, FiServer } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/Privacy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page-wrapper">
      <Navbar />
      
      <section className="privacy-hero">
        <div className="container">
          <motion.div 
            className="privacy-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="kicker">Security First</span>
            <h1>Privacy <span>Policy.</span></h1>
            <p>Your trust is our greatest asset. Learn how we protect and manage your data.</p>
          </motion.div>

          {/* Security Highlights */}
          <div className="security-ribbon">
            <div className="security-item"><FiShield /> 256-bit Encryption</div>
            <div className="security-item"><FiLock /> RBI Compliant</div>
            <div className="security-item"><FiServer /> Secure Data Storage</div>
          </div>

          <div className="privacy-grid">
            {/* Left side: Highlights */}
            <motion.div 
              className="privacy-side-panel"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="summary-card">
                <h4>Privacy Highlights</h4>
                <div className="highlight-point">
                  <FiEye />
                  <p>We never sell your personal data to third-party advertisers.</p>
                </div>
                <div className="highlight-point">
                  <FiLock />
                  <p>All financial records are encrypted at rest and in transit.</p>
                </div>
                {/* <div className="highlight-box">
                  <p>Questions about your data?</p>
                  <a href="mailto:privacy@askmecredit.com">privacy@askmecredit.com</a>
                </div> */}
              </div>
            </motion.div>

            {/* Right side*/}
            <motion.div 
              className="privacy-content-panel"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="policy-card">
                <section>
                  <h3>1. Information Collection</h3>
                  <p>We collect information that you provide directly to us when you apply for a loan, including your name, contact details, PAN, and Aadhaar number for KYC verification.</p>
                </section>

                <section>
                  <h3>2. How We Use Your Data</h3>
                  <p>Your data is used specifically to:</p>
                  <ul>
                    <li>Assess creditworthiness and loan eligibility.</li>
                    <li>Verify identity through government databases.</li>
                    <li>Facilitate loan disbursement with lending partners.</li>
                    <li>Communicate updates regarding your application.</li>
                  </ul>
                </section>

                <section>
                  <h3>3. Data Sharing</h3>
                  <p>We only share your data with regulated financial institutions (Banks/NBFCs) and credit bureaus (like CIBIL) as required to process your loan application.</p>
                </section>

                <section>
                  <h3>4. Your Rights</h3>
                  <p>You have the right to request access to your data, ask for corrections, or request deletion of non-essential records in accordance with local financial regulations.</p>
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

export default PrivacyPolicy;