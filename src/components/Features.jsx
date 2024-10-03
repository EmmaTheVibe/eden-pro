import { media, features } from "../utils/data";
import { motion } from "framer-motion";

const featureVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.1 * index,
    },
  }),
};

export default function Features() {
  return (
    <div className="features">
      <div className="features-header">
        <h1>Why Organizations Use Edenpro</h1>
        <img src={media.arrowDown} alt="arrow down" />
      </div>
      <div className="features-list">
        {features.map((feature, index) => (
          <motion.div
            variants={featureVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
            className="feature-item"
            key={index}
          >
            <div className="feature-info">
              <img src={feature.svg} alt="" className="ft-svg" />
              <h2>{feature.title}</h2>
              <p>{feature.content}</p>
            </div>
            <div
              className="feature-img"
              style={{ backgroundColor: feature.color }}
            >
              <img src={feature.image} alt={feature.title} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
