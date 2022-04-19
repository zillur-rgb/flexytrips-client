import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { BsGoogle } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import "./Login.css";

import signinImage from "../../assets/signinImage.jpg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      if (userCred.user) {
        navigate("/");
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      toast("Error signing in");
    }
  };
  return (
    <div className="loginContainer">
      <Navbar label="Sign Up" />

      <div className="loginMain">
        <div className="form">
          <h1 className="loginHeader">Login</h1>
          <form onSubmit={handleSignIn}>
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
