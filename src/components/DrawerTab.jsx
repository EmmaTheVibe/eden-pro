import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import PageNav from "./PageNav";
import PropTypes from "prop-types";

export default function DrawerTab({ openDrawer, setOpenDrawer }) {
  const navCloseDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <div>
      <SwipeableDrawer
        anchor={"top"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        PaperProps={{
          sx: {
            backgroundColor: "black",
          },
        }}
      >
        <div className="drawer" onKeyDown={() => setOpenDrawer(false)}>
          <div className="tabs">
            <PageNav navCloseDrawer={navCloseDrawer} />
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

DrawerTab.propTypes = {
  openDrawer: PropTypes.bool,
  setOpenDrawer: PropTypes.func,
};
