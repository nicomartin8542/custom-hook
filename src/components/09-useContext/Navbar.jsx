/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Context App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="nav-item nav-link"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
