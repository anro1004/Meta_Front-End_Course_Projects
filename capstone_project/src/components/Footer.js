import React from "react";
const Footer = ({ imgSrc }) => {
  return (
    <footer>
      <div class="footer-section icon">
        <img src={imgSrc} alt="logo" />
      </div>
      <div class="footer-section contact">
        <h3>Contacto</h3>
        <p>123 Calle Principal, Ciudad, País</p>
        <p>Teléfono: +123 456 7890</p>
        <p>Email: contacto@littlelemon.com</p>
      </div>
      <div class="footer-section copyright">
        <p>© 2025 Little Lemon. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer;
