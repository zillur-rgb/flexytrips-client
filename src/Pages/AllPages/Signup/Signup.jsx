import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import "./Signup.css";

import signinImage from "../../../assets/signinImage.jpg";

const Signup = () => {
  return (
    <div className="loginContainer">
      <Navbar label="Sign In" />

      <div className="loginMain">
        <img src={signinImage} alt="signinImage" />
        <div className="form">
          <h1 className="loginHeader">Sign Up</h1>
          <form>
            <input type="text" placeholder="Fullname" /> <br />
            <input type="mail" placeholder="Email" /> <br />
            <input type="password" placeholder="Password" /> <br />
            <button className="login">Login</button>
            <div className="texts">
              <p className="signupLink">
                Already Registered?{" "}
                <Link to="/login" className="link">
                  Sign In Here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
