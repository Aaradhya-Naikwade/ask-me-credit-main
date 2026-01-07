import { motion } from "framer-motion";
import "./styles/LoanForm.css";

const LoanForm = ({ defaultLoanType = "" }) => {
  return (
    <motion.div
      className="premium-loan-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-brand">
        <h3>Apply for Financing</h3>
        <p>Quick 2-minute application</p>
      </div>

      <form className="premium-form">
        <div className="input-grid">
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" placeholder="Type Your Name" required />
          </div>

          <div className="input-box">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91" required />
          </div>

          <div className="input-box">
            <label>Loan Type</label>
            <select defaultValue={defaultLoanType} required>
              <option value="" disabled>Select Type</option>
              <option value="Personal Loan">Personal</option>
              <option value="Home Loan">Home</option>
              <option value="Business Loan">Business</option>
              <option value="Car Loan">Vehicle</option>
            </select>
          </div>

          <div className="input-box">
            <label>City</label>
            <input type="text" placeholder="Enter City" required />
          </div>
        </div>

        <motion.button
          whileHover={{ backgroundColor: "#003d82" }}
          whileTap={{ scale: 0.98 }}
          className="premium-submit"
          type="submit"
        >
          Submit Request
        </motion.button>
      </form>
    </motion.div>
  );
};

export default LoanForm;