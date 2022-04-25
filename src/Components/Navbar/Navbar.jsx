import { getAuth } from "firebase/auth";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo.jpeg";
import "./Navbar.css";

const Navbar = ({ label }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const routeMatchPath = (route) => {
    if (location.pathname === route) {
      return true;
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
    toast("You are loggedout");
  };
  return (
    <div className="navContainer">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <ul className="menubar">
        <Link to="/">
          <li className={routeMatchPath("/") ? "active" : "menu"}>Home</li>
        </Link>
        <Link to="/destinations">
          <li className={routeMatchPath("/destinations") ? "active" : "menu"}>
            Destinations
          </li>
        </Link>
        {auth.currentUser ? (
          <Link to="/profile">
            <li className={routeMatchPath("/profile") ? "active" : "menu"}>
              Profile
            </li>
          </Link>
        ) : (
          <Link to="/latest">
            <li className={routeMatchPath("/latest") ? "active" : "menu"}>
              Latest Tours
            </li>
          </Link>
        )}

        <Link to="/testimonials">
          <li className={routeMatchPath("/testimonials") ? "active" : "menu"}>
            Testimonials
          </li>
        </Link>
        <Link to="/contact">
          {" "}
          <li className={routeMatchPath("/contact") ? "active" : "menu"}>
            Contact
          </li>
        </Link>
      </ul>

      {auth.currentUser ? (
        <div>
          <p
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Hello {auth.currentUser.displayName}
          </p>
          <button
            style={{
              padding: "5px 20px",
              backgroundColor: "rgba(255, 0, 0, .2)",
              color: "rgba(255, 0, 0, 1)",
              cursor: "pointer",
              borderRadius: "50px",
              margin: "5px 0",
            }}
            onClick={handleLogout}
          >
            Logout?
          </button>
        </div>
      ) : (
        <Link to={location.pathname === "/login" ? "/signup" : "/login"}>
          <button className="signin">{label}</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
