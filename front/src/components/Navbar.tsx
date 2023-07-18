import React from "react";
import { Link } from "react-router-dom";


export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Accueil</Link>
        </li>
        <li>
          <Link to="/about">Profil</Link>
        </li>
        <li>
          <Link to="/settings">Réglage</Link>
        </li>
        <li>
          <Link to="/commu">Communauté</Link>
        </li>
      </ul>
    </nav>
  );
};