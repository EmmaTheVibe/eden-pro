import { media } from "../utils/data";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function MissionBox({ lg2 }) {
  const missionVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: lg2 ? 0.8 : 0.5,
      },
    },
  };
  const approachVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="mission-box">
      <motion.div
        variants={missionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mission"
      >
        <h2>OUR MISSION</h2>
        <p>
          At EdenPro, our mission is to empower businesses to achieve their full
          potential. We focus on optimizing key areas such as sales, invoicing,
          organizational structure, training, automation, and branding, by
          building products and solutions to meet needs. By understanding your
          specific goals and challenges, we craft customized solutions that
          drive growth, innovation, and success.
        </p>
        <img src={media.mission} alt="" />
      </motion.div>
      <motion.div
        variants={approachVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="approach"
      >
        <img src={media.approach} alt="" />
        <h2>OUR APPROACH</h2>
        <p>
          We believe in a collaborative approach, working closely with you to
          understand your business inside out. Our team of experts brings
          diverse industry experience and a passion for innovation. We stay
          ahead of industry trends to provide you with the most effective and
          up-to-date solutions.
        </p>
      </motion.div>
    </div>
  );
}

MissionBox.propTypes = {
  lg2: PropTypes.bool,
};
