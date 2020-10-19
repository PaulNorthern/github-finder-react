import React from "react";
import PropTypes from "prop-types";
// impt - prop types
// rce - default class

const Navbar = ({ icon, title }) => {
  //  render() {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i class={icon} /> {title}
      </h1>
    </nav>
  );
  // }
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
