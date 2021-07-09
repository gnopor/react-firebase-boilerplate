import React from "react";
import "./Footer.css";

const Footer = (props) => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">@T-Blaise {year}</div>
    </footer>
  );
};

export default Footer;
