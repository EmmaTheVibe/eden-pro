import MissionBox from "../components/MissionBox";
import Utilities from "../components/Utilities";
import { media } from "../utils/data";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const aboutHeroVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function AboutPage({ lg2 }) {
  return (
    <section className="home">
      <div className="container">
        <motion.div
          variants={aboutHeroVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="hero"
        >
          <h1 className="about-header">Welcome To EdenPro</h1>
          <p
            style={{
              textAlign: "center",
              color: "#64728F",
              fontWeight: "400",
              lineHeight: "30px",
            }}
            className="hero-p"
          >
            where we transform challenges into streamlined solutions. We
            specialize in enhancing efficiency and boosting operational
            performance, meticulously tailored to meet your unique needs. Our
            commitment to excellence drives us to deliver bespoke strategies
            that propel your business forward in today&apos;s competitive
            landscape.
          </p>
          <NavLink to="/contact">
            <button
              style={{ backgroundImage: `url(${media.buttonBg})` }}
              className="about-btn"
            >
              <p>GET IN TOUCH</p>
              <img src={media.arrowRight} alt="" className="arrow-right" />
            </button>
          </NavLink>
        </motion.div>
        <MissionBox lg2={lg2} />
        <Utilities />
        <div className="about-rand">
          <h1>Why Choose Us?</h1>
          <p>
            Choosing EdenPro means partnering with a team that is dedicated to
            your success. We pride ourselves on delivering results that exceed
            expectations, fostering long-term relationships built on trust and
            mutual growth. Let us help you streamline your operations, enhance
            your product development, and achieve your business goals.
          </p>
          <p>
            Together, we can create a future where your business not only
            survives but thrives. Discover the difference with EdenPro today.
          </p>
        </div>
      </div>
    </section>
  );
}

AboutPage.propTypes = {
  lg2: PropTypes.bool,
};
