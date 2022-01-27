import React from "react";

// Import styles
import "./Header.scss";

// Import components
import MenuMobile from "../../components/menuMobile/MenuMobile";

function Header() {
  return (
    <div className="header"> 
      
      <MenuMobile />

    </div>
  );
}

export default Header;
