import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styles/Loans.css";
import { title } from "framer-motion/client";

/* ---- TYPES OF LOANS ---- */
const loanTypes = [
  {
    title: "Personal Loan",
    description:
      "Instant personal loans with minimal documentation and flexible repayment options.",
    link: "/loans/personal",
  },
  {
    title: "Home Loan",
    description:
      "Affordable home loans with low interest rates and long repayment tenure.",
    link: "/loans/home",
  },
  {
    title: "Business Loan",
    description:
      "Fuel your business growth with quick approvals and flexible loan amounts.",
    link: "/loans/business",
  },
  {
    title: "Car Loan",
    description:
      "Finance new or used cars with competitive interest rates and easy EMIs.",
    link: "/loans/car",
  },
  {
    title: "Two-Wheeler Loan",
    description:
      "Own your bike easily with fast approvals and budget-friendly EMIs.",
    link: "/loans/two-wheeler",
  },
  {
    title: "Commercial Vehicle Loan",
    description:
      "Loans designed for trucks, buses, and commercial vehicles to grow your fleet.",
    link: "/loans/commercial-vehicle",
  },
  {
    title: "Education Loan",
    description:
      "Support higher education in India or abroad with flexible repayment options.",
    link: "/loans/education",
  },
  {
    title: "Gold Loan",
    description:
      "Get instant funds by pledging gold with secure storage and high value.",
    link: "/loans/gold",
  },
];

const LoanTypes = () => {
  const navigate = useNavigate();

  return (
    <section className="loan-section">
      <div className="container">
        {/* HEADER */}
        <motion.div
          className="loan-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-pill">Loan Categories</span>
          <h2>
            Types of <span>Loans</span>
          </h2>
          <p>
            Explore different loan options tailored to meet your personal and
            business needs.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="loan-grid">
          {loanTypes.map((item, index) => (
            <motion.div
              key={index}
              className="loan-card clickable"
              onClick={() => navigate(item.link)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="card-content">
                <h3 className="loan-title">{item.title}</h3>
                <p className="loan-desc">{item.description}</p>
              </div>

              <div className="card-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanTypes;
