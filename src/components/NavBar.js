import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg d-flex justify-content-around">
        <Link
          className=" d-flex justify-content-center align-items-center link-tag"
          to="/"
        >
          Prime Number
        </Link>
        <Link
          className="d-flex justify-content-center align-items-center link-tag"
          to="/findkey"
        >
          Find Key
        </Link>
        <Link
          className="d-flex justify-content-center align-items-center link-tag"
          to="/login"
        >
          Log In
        </Link>
      </nav>
    );
  }
}

export default NavBar;
