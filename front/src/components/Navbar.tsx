import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/App.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <Link to="/login" className="navbar-logo">
          My Logo
        </Link>
        <li>
          <NavLink to="/about" className="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
