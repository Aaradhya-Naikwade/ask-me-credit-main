// import React from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import "./styles/AboutUs.css";

// const AboutUs = () => {
//   return (
//     <div className="about-page">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="about-hero">
//         <div className="container">
//           <motion.div 
//             className="about-hero-content"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="kicker">Our Story</span>
//             <h1>Reimagining the future of <span>Credit in India.</span></h1>
//             <p className="lead">
//               Ask Me Credit was born out of a simple observation: Access to capital should be 
//               as fluid as the dreams it fuels. We are bridging the gap between traditional 
//               banking and modern aspirations.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Mission & Vision - Split Layout */}
//       <section className="mission-section">
//         <div className="container mission-grid">
//           <motion.div 
//             className="mission-image"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <img src="src/assets/Demo.avif" alt="Our Workspace" />
//           </motion.div>

//           <motion.div 
//             className="mission-text"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2>The Mission</h2>
//             <p>
//               To empower 10 million underserved Indians with fair, fast, and 
//               transparent credit by 2030. We believe financial inclusion is not 
//               just a goal, but a fundamental right.
//             </p>
//             <div className="stats-row">
//               <div>
//                 <h3>100%</h3>
//                 <p>Digital Process</p>
//               </div>
//               <div>
//                 <h3>24/7</h3>
//                 <p>Accessibility</p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Philosophy - Three Column */}
//       <section className="philosophy-section">
//         <div className="container">
//           <div className="section-header">
//             <h2>Our Core Philosophy</h2>
//           </div>
//           <div className="philosophy-grid">
//             <div className="phi-card">
//               <span className="phi-num">01</span>
//               <h4>Radical Transparency</h4>
//               <p>No fine print. No hidden costs. We talk to our users like we talk to our friends.</p>
//             </div>
//             <div className="phi-card">
//               <span className="phi-num">02</span>
//               <h4>Technology First</h4>
//               <p>We use proprietary AI models to look beyond credit scores and see real potential.</p>
//             </div>
//             <div className="phi-card">
//               <span className="phi-num">03</span>
//               <h4>User Obsession</h4>
//               <p>Our products aren't built in boardrooms; they are built from user feedback loops.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default AboutUs;



import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./styles/AboutUs.css";

const About = () => {
  return (
    <div className="about-page-wrapper">
      <Navbar />

      {/* HEADING */}
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
              Powering  <span>Financial Freedom</span> for India
            </h1>
            {/* <p>
              Ask Me Credit makes working capital and financial access fluid, fair, and future-ready. Through intelligent technology and inclusive finance, we help businesses and individuals turn ambition into achievement.</p> */}
          </motion.div>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="about-image-section">
        <div className="about-bg-image">
          <motion.div
            className="about-image-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* <h2>Your Financial Partner</h2> */}
            <p>
              Ask Me Credit makes working capital and financial access fluid, fair, and future-ready. Through intelligent technology and inclusive finance, we help businesses and individuals turn ambition into achievement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      {/* <section className="about-content-section">
        <div className="container">
          <div className="about-content-grid">
            <div>
              <h3>Who We Are</h3>
              <p>
                Ask Me Credit is a customer-first financial services platform
                designed to make borrowing transparent, simple, and stress-free.
              </p>
            </div>

            <div>
              <h3>What We Do</h3>
              <p>
                We connect you with trusted lenders, guide you through
                eligibility, and help you choose the best financial products.
              </p>
            </div>

            <div>
              <h3>Why Choose Us</h3>
              <p>
                Our experts, technology, and personalized support ensure you
                always make informed credit decisions.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default About;
