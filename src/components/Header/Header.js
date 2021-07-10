import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <nav className="container">
        <ul className="menu">
          <li>
            <Link to="/">
              <span>BoilerPlate</span>
            </Link>
          </li>
          <li>
            <Link to="update-profile">Update</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
