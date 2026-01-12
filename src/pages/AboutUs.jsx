

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/AboutUs.css";


const About = () => {
  return (
    <div className="about-page-wrapper">
      <Navbar />

      <section className="about-heading-section">
        <div className="container">
          <motion.div
            className="about-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="kicker">About Us</span>
            <h1>
              Powering <span>Financial Freedom</span> for India
            </h1>
          </motion.div>
        </div>
      </section>


      <section className="about-image-section">
        <div className="about-bg-image">
          <motion.div
            className="about-image-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p>
              Ask Me Credit makes working capital and financial access fluid, fair, and future-ready.
              Through intelligent technology and inclusive finance, we help businesses and individuals turn ambition into achievement.
            </p>
          </motion.div>
        </div>
      </section>



      <section className="mobile-img-section">
        <p>
          Ask Me Credit makes working capital and financial access fluid, fair, and future-ready.
          Through intelligent technology and inclusive finance, we help businesses and individuals turn ambition into achievement.
        </p>
        <img src="/images/about-mobile.png" alt="" />
      </section>



      {/* GRID */}
      <section className="bento-details-section">
                  <h2 className="bento-details-heading">About Us</h2>
        <div className="container bento-main-grid">

          {/* LEFT SIDE*/}
          <div className="bento-left-column">
            <img src="/images/about-us-grid.jpg" alt="Our Team" className="bento-main-img" />
          </div>

          {/* RIGHT SIDE*/}
          <div className="bento-right-column">

            {/* TOP RIGHT PART*/}
            <div className="bento-top-subgrid">

              {/* TOP LEFT of the Right Side: Vision Box */}
              <div className="vision-box-card">
                <h3>Our Vision</h3>
                <p>To simplify Finance Freedom access for New India by leveraging technology, innovation, and strategic partnerships, creating equal opportunities that help to grow, compete, and succeed at every stage.</p>
              </div>

              {/* TOP RIGHT of the Right Side: Stats*/}
              <div className="stats-mission-stack">
                {/* Stats part */}
                <div className="stats-mini-grid">
                  <div className="stat-unit">
                    <h4>50K+</h4>
                    <p>Active Users</p>
                  </div>
                  <div className="stat-unit">
                    <h4>12K+</h4>
                    <p>Happy Customers</p>
                  </div>
                  <div className="stat-unit">
                    <h4>25 Cr+</h4>
                    <p>Amount Disbursed</p>
                  </div>
                  <div className="stat-unit">
                    <h4>15+</h4>
                    <p>Cities Covered</p>
                  </div>
                </div>

                {/* Mission part */}
                <div className="mission-box-card">
                  <h3>Our Mission</h3>
                  <p>Finance For All according to their unique need</p>
                </div>
              </div>
            </div>

            {/* BOTTOM RIGHT PART*/}
            <div className="bento-bottom-row">
              <div className="loan-approved-card">
                <h3>Loan Approved</h3>
                <p>AskMe Credit is built for people who want quick, clear, and stress-free access to money—without confusion, delays, or hidden terms. Whether you're managing monthly expenses, planning something important, or growing your business, we help you move forward with confidence.</p>
                <p>We combine smart technology with real-world flexibility so you can check eligibility instantly, understand costs clearly, and apply without paperwork or pressure. Everything is designed around your needs, your timeline, and your goals.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="container">
          <h2 className="values-main-title">Our Core Values</h2>

          <div className="values-bento-grid">
            {/* 1 */}
            <div className="value-card">
              <h3>First Time Right</h3>
              <p>Do it accurately and efficiently the first time, minimizing errors and rework.</p>
              <div className="value-icon"><img src="/images/about-us-grid/first-time-right.jpg" alt="Innovate" /></div>
            </div>

            {/* 2 */}
            <div className="value-card">
              <h3>Intelligent Technology</h3>
              <p>Leverage AI and smart systems to deliver fast, precise, and innovative financial solutions.</p>
              <div className="value-icon"><img src="/images/about-us-grid/intelligent-technology.jpg" alt="Respect" /></div>
            </div>

            {/* 3 */}
            <div className="value-card tall-card">
              <h3>Efficient Execution</h3>
              <p>Think like an owner, stay mission-focused, and deliver results with speed and precision.</p>
              <ul>
                <li>Accountability and Ownership</li>
                <li>Effective planning</li>
                <li>Clear goals with milestones defined</li>
                <li>Customer Focus</li>
              </ul>
              <div className="value-icon"><img src="/images/about-us-grid/efficient-execution.jpg" alt="Execution" /></div>
            </div>

            {/* 4 */}
            <div className="value-card">
              <h3>Respect the Rules</h3>
              <p>Operate responsibly with regulators, partners, and customers at every step.</p>
              <div className="value-icon"><img src="/images/about-us-grid/respect-the-rules.jpg" alt="Customer" /></div>
            </div>

            {/* 5 */}
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Be honest, transparent, and accountable—trust always comes first.</p>
              <div className="value-icon"><img src="/images/about-us-grid/integrity.jpg" alt="Integrity" /></div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;