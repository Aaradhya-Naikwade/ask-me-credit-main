import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styles/CalculatorSection.css";

const CalculatorSection = () => {
  const navigate = useNavigate();

  return (
    <section className="calculator-section">
      <div className="container calculator-container">

        {/* Left Content */}
        <motion.div
          className="calculator-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            Calculate Your <br />
            <span>Loan EMI</span> Instantly
          </h2>

          <button
            className="calculator-btn"
            onClick={() => navigate("/calculators")}
          >
            Open EMI Calculator
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="calculator-right"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/calculator.png"
            alt="Loan Calculator"
            className="calculator-image"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default CalculatorSection;
