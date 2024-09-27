import { services, media } from "../utils/data";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const serviceVariants = {
  initial: {
    opacity: 0,
    scale: 0,
    x: -50,
  },
  animate: (index) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.05 * index,
    },
  }),
};
const workVariants = {
  initial: {
    opacity: 0,
    y: 150,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Services() {
  return (
    <>
      <div className="services">
        {services.map((service, index) => (
          <motion.div
            variants={serviceVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
            className="service-item"
            key={service.name}
          >
            <div className="pc-pic" style={{ backgroundColor: service.color }}>
              <img src={service.url} alt="pc" className="pc" />
            </div>
            <div className="service-name">
              <p>{service.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={workVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="work"
      >
        <img src={media.workspace} alt="workspace" className="workspace" />
        <div>
          <h1>
            Eden<span>pro</span> for <br />
            Startups and large organizations.
          </h1>
          <p>
            Organizations can achieve maximum productivity and efficiency with
            the right business solutions. We want to hear from you.
          </p>
          <NavLink to="/contact">
            <button style={{ backgroundImage: `url(${media.buttonBg})` }}>
              <p>GET IN TOUCH</p>
              <img src={media.arrowRight} alt="" className="arrow-right" />
            </button>
          </NavLink>
        </div>
      </motion.div>
    </>
  );
}
