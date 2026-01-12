import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoanForm from "../components/LoanForm";
import "./styles/ApplyNow.css"; 


const ApplyNow = () => {
  return (
    <div className="apply-page-wrapper">
      <Navbar />
      
      <section className="apply-section">
        <div className="container">
          <div className="apply-grid">
            
            {/* Left side*/}
            <motion.div 
              className="apply-image-panel"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="image-container">
                <img 
                  src="/images/apply-now.jpg" 
                  alt="Apply for Credit" 
                  className="hero-image"
                />
                <div className="image-overlay-text">
                  <h2>Fast-Track Your <br/><span>Financial Future.</span></h2>
                  <p>Complete the form to get an instant credit assessment.</p>
                </div>
              </div>
            </motion.div>

            {/* Right side*/}
            <motion.div 
              className="apply-form-panel"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="form-card">
                <div className="form-header">
                  {/* <span className="kicker">Application Form</span> */}
                </div>
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

export default ApplyNow;