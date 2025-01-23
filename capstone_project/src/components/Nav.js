import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ links }) => {
  return (
    <nav className="nav">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path} className="nav-item">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
