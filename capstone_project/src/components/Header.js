import React from "react";

const Header = ( { imageSrc } ) => {
  return (
    <header>
      <img src={imageSrc} alt="logo" />
    </header>
  );
};

export default Header;
