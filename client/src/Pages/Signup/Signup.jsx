import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Signup.css";
import signinImage from "../../assets/signinImage.jpg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formData = { name, email, password };
  const navigate = useNavigate();

  return (
    <div className="loginContainer">
      <Navbar label="Sign In" />

      <div className="loginMain">
        <img src={signinImage} alt="signinImage" />
        <div className="form">
          <h1 className="loginHeader">Sign Up</h1>
          <form>
            <input
              type="text"
              placeholder="Fullname"
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              onChange={({ target }) => setEmail(target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <br />
            <button className="login">Signup</button>
            <div className="texts">
              <p className="signupLink">
                Already Registered?
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
