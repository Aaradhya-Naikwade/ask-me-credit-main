import { motion } from "framer-motion";
import "../components/styles/CultureSection.css";

const values = [
  {
    id: 1,
    title: "Team-First",
    desc: "We win together through trust and transparency.",
    image: "/images/culture-section/team-first.png" 
  },
  {
    id: 2,
    title: "Bold Innovation",
    desc: "We experiment, learn, and lead.",
    image: "/images/culture-section/bold-innovation.png"
  },
  {
    id: 3,
    title: "People-Focused",
    desc: "Customers aren’t users—they’re our purpose.",
    image: "/images/culture-section/people-focused.png"
  },
  {
    id: 4,
    title: "Always Evolving",
    desc: "Change fuels our growth.",
    image: "/images/culture-section/always-evolving.png"
  },
];

const CultureSection = () => {
  return (
    <section className="culture-section">
      <div className="container">
        <motion.div
          className="culture-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Build the Future of Financial Freedom</h2>
          <p>
            We’re more than a fintech—we’re a collective of thinkers and builders redefining how India experiences money.
          </p>
        </motion.div>

        <div className="culture-grid">
          {values.map((item, index) => (
            <motion.div
              key={item.id}
              className="culture-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image Container updated for top-left placement */}
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.title} className="culture-image" />
              </div>
              <div className="card-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;