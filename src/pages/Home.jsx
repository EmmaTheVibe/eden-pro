import Features from "../components/Features";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import { NavLink } from "react-router-dom";
import { media } from "../utils/data";
import { motion } from "framer-motion";

const heroVariants = {
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

const underlineVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      delay: 0.5,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="hero">
            <motion.div
              variants={heroVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="hero-box"
            >
              <div className="motto">
                <p>INNOVATE</p>
                <div className="dash"></div>
                <p>INTEGRATE</p>
                <div className="dash"></div>
                <p>ELEVATE</p>
              </div>

              <div className="banner">
                <h1 className="header">
                  All Your <br /> Business Solutions in One Place
                </h1>
                <motion.img
                  variants={underlineVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  src={media.underline}
                  alt=""
                  className="underline"
                />
              </div>

              <p className="details">
                Our solutions are designed to cater to businesses of all sizes,
                from innovative startups to established enterprises.
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

            <Services />

            <div className="rand">
              <h1>
                Imagine a vast collection of business solutions at your
                disposal.
              </h1>
              <p>
                Explore an extensive array of business solutions designed to
                enhance efficiency and streamline operations effortlessly.
              </p>
              <p>
                Whether you&apos;re looking to optimize processes or refine
                operations, our solutions are tailored to simplify tasks and
                boost productivity seamlessly.
              </p>
            </div>

            <Features />
          </div>
        </div>
        <Reviews />
      </section>
    </>
  );
}
