import { useForm } from "react-hook-form";
import { media } from "../utils/data";
import emailjs from "emailjs-com";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";

export default function ContactForm({ showPopUp }) {
  const emailjsUserId = import.meta.env.VITE_EMAILJS_USER_ID;
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const registerOptions = {
    name: {
      required: "Required",
    },
    email: {
      required: "Required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Invalid email address",
      },
    },
    number: {
      required: "Required",
      pattern: {
        value: /^[0-9]+$/,
        message: "Invaid phone number",
      },
    },
    message: {
      required: "Required",
    },
  };

  const handleRegistration = async (formData) => {
    setLoading(true);
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      phoneNumber: formData.number,
    };

    emailjs
      .send(emailjsServiceId, emailjsTemplateId, templateParams, emailjsUserId)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          console.log("Email sent successfully to edenprosolutions@gmail.com");
        },
        (error) => {
          console.log("Email send error:", error.text);
          console.log("Service Id:", emailjsServiceId);
          console.log("User Id:", emailjsUserId);
        }
      );
    setLoading(false);
    showPopUp();
    reset();
  };
  return (
    <div className="contact-form-box">
      <h2>Email Us</h2>
      <p className="snd">Send us a mail</p>
      <form
        action=""
        noValidate
        onSubmit={handleSubmit(handleRegistration)}
        className="contact-form"
      >
        <div className="form-flex">
          <div>
            <div className="label">
              <img src={media.name} alt="" />
              <input
                type="text"
                placeholder="Your Name"
                id="name"
                {...register("name", registerOptions.name)}
              />
            </div>
            <p className="error" style={{ opacity: errors?.name ? "1" : "0" }}>
              {errors?.name ? <em>{errors.name.message}</em> : "www"}
            </p>
          </div>

          <div>
            <div className="label">
              <img src={media.mail} alt="" />
              <input
                type="email"
                placeholder="Your Email Address"
                id="email"
                {...register("email", registerOptions.email)}
              />
            </div>
            <p className="error" style={{ opacity: errors?.email ? "1" : "0" }}>
              {errors?.email ? <em>{errors.email.message}</em> : "www"}
            </p>
          </div>

          <div>
            <div className="label">
              <img src={media.tel} alt="" />
              <input
                type="tel"
                placeholder="Your Phone Number"
                id="number"
                {...register("number", registerOptions.number)}
              />
            </div>
            <p
              className="error"
              style={{ opacity: errors?.number ? "1" : "0" }}
            >
              {errors?.number ? <em>{errors.number.message}</em> : "www"}
            </p>
          </div>
        </div>
        <div>
          <div className="label">
            <textarea
              type="text"
              placeholder="Message"
              id="message"
              {...register("message", registerOptions.message)}
            ></textarea>
          </div>
          <p className="error" style={{ opacity: errors?.message ? "1" : "0" }}>
            {errors?.message ? <em>{errors.message.message}</em> : "www"}
          </p>
        </div>

        <button
          disabled={loading}
          type="submit"
          style={{ backgroundImage: `url(${media.buttonBg})` }}
          className="contact-btn"
        >
          {loading ? (
            <CircularProgress
              style={{
                color: "#f9b21d",
                width: "25px",
                height: "25px",
              }}
            />
          ) : (
            <p>Submit Message</p>
          )}
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  showPopUp: PropTypes.func,
};
