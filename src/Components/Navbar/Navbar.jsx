import React from "react";
import logo from "../../assets/logo.jpeg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <img className="logo" src={logo} alt="logo" />

      <ul className="menubar">
        <li className="menu">Home</li>
        <li className="menu">Destinations</li>
        <li className="menu">Tours</li>
        <li className="menu">Blog</li>
        <li className="menu">Contact</li>
      </ul>

      <button className="signin">Login</button>
    </div>
  );
};

export default Navbar;
