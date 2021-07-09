import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <nav className="container">
        <ul className="menu">
          <li>
            <span>BoilerPlate</span>
          </li>
          <li>Home</li>
          <li>connection</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
