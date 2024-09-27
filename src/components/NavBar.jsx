import { NavLink } from "react-router-dom";
import { media } from "../utils/data";
import PropTypes from "prop-types";
import PageNav from "./PageNav";

export default function NavBar({ lg, toggleDrawer, setOpenDrawer }) {
  const navCloseDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <nav>
      <div className="container">
        <div className="nav-items">
          <NavLink to="/">
            <img src={media.logo} alt="logo" className="logo" />
          </NavLink>
          {lg ? (
            <PageNav navCloseDrawer={navCloseDrawer} />
          ) : (
            <img
              src={media.hamburger}
              alt="menu"
              className="menu"
              onClick={toggleDrawer}
            />
          )}
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  lg: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  setOpenDrawer: PropTypes.func,
};
