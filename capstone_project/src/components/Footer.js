import React from "react";
import "./Footer.css";

const Footer = ( { imgSrc } ) => {
  return (
    <footer>
      <div className="footer-section icon">
        <img src={imgSrc} alt="logo" />
      </div>
      <div className="footer-section contact">
        <h3>Contacto</h3>
        <p>123 Calle Principal, Ciudad, País</p>
        <p>Teléfono: +123 456 7890</p>
        <p>Email: contacto@littlelemon.com</p>
      </div>
      <div className="footer-section copyright">
        <p>© 2025 Little Lemon. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer;
