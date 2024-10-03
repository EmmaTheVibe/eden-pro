import { media } from "../utils/data";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { submitEmail } from "../firebase/firebaseService";
import PropTypes from "prop-types";

export default function ConnectBox({ showPopUp }) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const registerOptions = {
    email: {
      required: "Required",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Invalid email address",
      },
    },
  };

  const handleRegistration = async (formData) => {
    setLoading(true);
    await submitEmail(formData.email);
    setLoading(false);
    reset();
    showPopUp();
  };
  return (
    <section className="connect-section">
      <div className="container">
        <div className="connect-box">
          <img src={media.logoWhite} alt="logo" className="connect-logo" />
          <p className="connect-remark">
            Let’s help you achieve your business goals today.
          </p>
          <form
            action=""
            noValidate
            onSubmit={handleSubmit(handleRegistration)}
          >
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              required
              {...register("email", registerOptions.email)}
            />
            <button
              disabled={loading}
              type="submit"
              style={{ backgroundImage: `url(${media.buttonBg})` }}
            >
              {loading ? (
                <CircularProgress
                  style={{
                    color: "#f9b21d",
                    width: "20px",
                    height: "20px",
                  }}
                />
              ) : (
                <>
                  <p>
                    Try Eden<span style={{ color: "#f9b21d" }}>pro</span>
                  </p>
                  <img src={media.arrowRight} alt="" />
                </>
              )}
            </button>
          </form>
          <p className="error-b" style={{ opacity: errors?.email ? "1" : "0" }}>
            {errors?.email ? <em>{errors.email.message}</em> : "www"}
          </p>
        </div>
      </div>
    </section>
  );
}

ConnectBox.propTypes = {
  showPopUp: PropTypes.func,
};
