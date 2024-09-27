import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function PageNav({ navCloseDrawer }) {
  return (
    <div className="page-nav">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/about" onClick={navCloseDrawer}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={navCloseDrawer}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

PageNav.propTypes = {
  navCloseDrawer: PropTypes.func,
};
