import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

import "./Login.css";

import signinImage from "../../assets/signinImage.jpg";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="loginContainer">
      <Navbar label="Sign Up" />

      <div className="loginMain">
        <div className="form">
          <h1 className="loginHeader">Login</h1>
          <form>
            <input
              type="text"
              placeholder="Email"
              onChange={({ target }) => {
                setEmail(target.value);
              }}
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />{" "}
            <br />
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
          </form>
          <SocialLogin />
        </div>

        <img src={signinImage} alt="signinImage" />
      </div>
    </div>
  );
};

export default Login;
