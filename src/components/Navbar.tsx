import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/App.css";
import logo from "../assets/headerLogo.svg";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <Link to="/" className="navbar-logo">
          <div className="logo">
            <img src={logo} alt="LogoOfSportSee" />
          </div>
          <h1 className="logo-title">SportSee</h1>
        </Link>
        <li>
          <NavLink to="/" className="active">
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active">
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="active">
            Reglage
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active">
            Communauté
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
