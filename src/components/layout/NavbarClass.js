import React, { Component } from "react";
import PropTypes from "prop-types";
// impt - prop types
// rce - default class

export class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i class={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
