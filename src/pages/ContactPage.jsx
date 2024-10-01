import ContactForm from "../components/ContactForm";
import PropTypes from "prop-types";

export default function ContactPage({ showPopUp }) {
  return (
    <section className="home">
      <div className="container">
        <div className="hero">
          <h1 className="contact-header">Get in touch</h1>
          <p className="contact-p">
            Get in touch for personalized assistance. We&apos;re here to help
            and provide solutions tailored to your requirements.
          </p>
          <p className="cont-hd">Contact us</p>
          <a
            href="tel:09067031363"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
            }}
          >
            <p className="cont-tel">09067031363</p>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:hello@edenprong.com"
            style={{
              textDecoration: "none",
            }}
          >
            <p className="cont-mail">hello@edenprong.com</p>
          </a>
          <p className="cont-add">Ikeja, Lagos, NG</p>
          <div className="base"></div>
        </div>
        <ContactForm showPopUp={showPopUp} />
      </div>
    </section>
  );
}

ContactPage.propTypes = {
  showPopUp: PropTypes.func,
};
