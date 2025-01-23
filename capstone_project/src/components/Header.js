import React from "react";
import "./Header.css";

const Header = ( { imageSrc } ) => {
  return (
    <header>
      <img src={imageSrc} alt="logo" />
    </header>
  );
};

export default Header;
