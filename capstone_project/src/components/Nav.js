import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ links }) => {
  return (
    <nav>
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
