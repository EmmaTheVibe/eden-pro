import { media, reviews } from "../utils/data";
import { motion } from "framer-motion";

const reviewVariants = {
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

export default function Reviews() {
  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews-box">
          <div className="reviews-header">
            <h1>They All Love</h1>
            <img src={media.reviewsLogo} alt="logo" />
          </div>
          <div className="reviews-list">
            {reviews.map((review, index) => (
              <motion.div
                variants={reviewVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true }}
                className="review-item"
                key={index}
              >
                <div className="review-info">
                  <img
                    src={review.logo}
                    alt={review.company}
                    className="review-logo"
                  />
                  <p>{review.comment}</p>
                </div>
                <div className="commenter">
                  <div className="commenter-info">
                    <p className="commenter-name">{review.name}</p>
                    <p className="position">{review.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
