import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { BsGoogle } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import "./Login.css";

import signinImage from "../../assets/signinImage.jpg";

const Login = () => {
  return (
    <div className="loginContainer">
      <Navbar label="Sign Up" />

      <div className="loginMain">
        <div className="form">
          <h1 className="loginHeader">Login</h1>
          <form>
            <input type="text" placeholder="Email" /> <br />
            <input type="password" placeholder="Password" /> <br />
            <button className="login">Login</button>
            <div className="texts">
              <p className="signupLink">
                Not Registered?{" "}
                <Link to="/signup" className="link">
                  Sign Up Here
                </Link>
              </p>
              <p className="forgetPass">Forgot Password?</p>
            </div>
            <button className="google">
              <BsGoogle /> Sign in with Google
            </button>
            <button className="facebook">
              <RiFacebookFill /> Sign In With Apple
            </button>
          </form>
        </div>

        <img src={signinImage} alt="signinImage" />
      </div>
    </div>
  );
};

export default Login;
