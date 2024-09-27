import Snackbar from "@mui/material/Snackbar";
import PropTypes from "prop-types";

export default function PopUp({ popUp, setPopUp }) {
  const handleClosePopUp = () => {
    setPopUp({
      ...popUp,
      open: false,
    });
  };

  const vertical = "bottom";
  const horizontal = "center";

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={popUp.open}
        onClose={handleClosePopUp}
        TransitionComponent={popUp.Transition}
        key={popUp.Transition.name}
        autoHideDuration={1200}
      >
        <div
          style={{
            boxShadow: "2px 6px 8px 1px rgba(29, 32, 37, 0.2)",
            borderRadius: "10px",
            backgroundColor: "#fff",
            width: "200px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="popup"
        >
          <p className="popup-txt">Done!</p>
        </div>
      </Snackbar>
    </div>
  );
}

PopUp.propTypes = {
  popUp: PropTypes.object,
  setPopUp: PropTypes.func,
};
