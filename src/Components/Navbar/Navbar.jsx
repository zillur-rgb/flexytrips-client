import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import "./Navbar.css";

const Navbar = ({ label }) => {
  return (
    <div className="navContainer">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <ul className="menubar">
        <Link to="/">
          <li className="menu">Home</li>
        </Link>
        <Link to="/Destinations">
          <li className="menu">Destinations</li>
        </Link>
        <Link to="/Tours">
          <li className="menu">Tours</li>
        </Link>
        <Link to="/Blog">
          <li className="menu">Blog</li>
        </Link>
        <Link to="/Contact">
          {" "}
          <li className="menu">Contact</li>
        </Link>
      </ul>

      <Link to="/login">
        <button className="signin">{label}</button>
      </Link>
    </div>
  );
};

export default Navbar;
