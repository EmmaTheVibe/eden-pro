import { utilities, media } from "../utils/data";
import { motion } from "framer-motion";

const utilVariants = {
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
export default function Utilities() {
  return (
    <div className="utilities">
      <div className="utilities-header">
        <h2>What We Do</h2>
        <img src={media.arrowDown} alt="" />
      </div>
      <div className="utilities-list">
        {utilities.map((util, index) => (
          <motion.div
            variants={utilVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
            className="util"
            key={index}
          >
            <img src={util.svg} alt="" className="util-svg" />
            <h2>{util.title}</h2>
            <p>{util.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
