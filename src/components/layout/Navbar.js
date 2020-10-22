import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";

const Navbar = ({ icon, title }) => {
  return (
    <header>
      <div className="logo">
        <GitHubIcon fontSize="large" className="header-icon" />
        <span>Github</span>
      </div>
      <ul>
        <li>
          <Link to="/" className="header-item">Home</Link>
        </li>
        <li>
          <Link to="/about" className="header-item">About</Link>
        </li>
      </ul>
    </header>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "logo fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
