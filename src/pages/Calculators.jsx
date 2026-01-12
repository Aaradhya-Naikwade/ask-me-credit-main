import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styles/Calculators.css";

const calculators = [
  {
    title: "EMI Calculator",
    description: "Calculate your monthly EMI easily based on loan amount, tenure, and interest rate.",
    link: "/emi-calculator",
    image: "/images/calculators/emi-calculator.jpg", 
  },
  {
    title: "Personal Loan Calculator",
    description: "Estimate EMIs and total interest for your personal loan instantly.",
    link: "/personal-loan-calculator",
    image: "/images/calculators/personal-loan-calculator.jpg",
  },
  {
    title: "Home Loan Calculator",
    description: "Plan your home loan with accurate EMI, tenure, and interest insights.",
    link: "/home-loan-calculator",
    image: "/images/calculators/home-loan-calculator.jpg",
  },
  {
    title: "Business Loan Calculator",
    description: "Understand repayment structure and interest cost for business loans.",
    link: "/business-loan-calculator",
    image: "/images/calculators/business-loan-calculator.jpg",
  },
  {
    title: "Car Loan Calculator",
    description: "Check EMIs for new or used car loans with flexible tenure options.",
    link: "/car-loan-calculator",
    image: "/images/calculators/car-loan-calculator.jpg",
  },
  {
    title: "Two-Wheeler Loan Calculator",
    description: "Quickly calculate installments for your dream bike or scooter.",
    link: "/two-wheeler-loan-calculator",
    image: "/images/calculators/two-wheeler-loan-calculator.jpg",
  },
  {
    title: "Commercial Vehicle Calculator",
    description: "Check EMIs for trucks, buses, and commercial fleets to grow your business.",
    link: "/commercial-vehicle-loan-calculator",
    image: "/images/calculators/commercial-vehicle-loan-calculator.jpg",
  },
  {
    title: "GST Calculator",
    description: "Calculate Goods and Services Tax quickly for your business invoices.",
    link: "/gst-calculator",
    image: "/images/calculators/gst.jpg",
  },
  // {
  //   title: "Eligibility Calculator",
  //   description: "Know how much loan amount you are eligible for based on your income profile.",
  //   link: "/calculators/eligibility",
  //   image: "/images/calculators/eligibility.jpg",
  // },
];

const Calculators = () => {
  const navigate = useNavigate();

  return (
    <section className="loan-section">
      <div className="container">
        <motion.div
          className="loan-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-pill">Smart Financial Tools</span>
          <h2>Smart <span>Loan Calculators</span></h2>
          <p>Make informed decisions using our simple and accurate financial calculators.</p>
        </motion.div>

        <div className="loan-grid">
          {calculators.map((item, index) => (
            <motion.div
              key={index}
              className="loan-card"
              onClick={() => navigate(item.link)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="card-text-content">
                <h3 className="loan-title">{item.title}</h3>
                <p className="loan-desc">{item.description}</p>
              </div>

              <div className="card-footer">
                <div className="circle-arrow-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>

                <div className="card-illustration">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calculators;