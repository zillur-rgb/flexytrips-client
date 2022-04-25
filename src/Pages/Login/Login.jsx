import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

import "./Login.css";

import signinImage from "../../assets/signinImage.jpg";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { auth } from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetPass, setResetPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  let errElem = "";
  if (error) {
    errElem = <div>Error: {error.message}</div>;
  }

  if (loading || sending) {
    return <div>Loading...........</div>;
  }

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  const handleSignin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const handleForgetPass = () => {
    sendPasswordResetEmail(email);
    toast("Sent Email");
  };

  return (
    <div className="loginContainer">
      <ToastContainer></ToastContainer>
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
            {errElem}
            <button className="login" onClick={handleSignin}>
              Login
            </button>
            <div className="texts">
              <p className="signupLink">
                Not Registered?{" "}
                <Link to="/signup" className="link">
                  Sign Up Here
                </Link>
              </p>
              <p
                style={{
                  cursor: "pointer",
                }}
                className="forgetPass"
                onClick={() => {
                  setResetPass(!resetPass);
                }}
              >
                Forgot Password?
              </p>
            </div>
          </form>
          <div className={resetPass ? "resetPassShow" : "resetPassNoShow"}>
            <input
              type="email"
              placeholder="Email"
              onChange={({ target }) => setEmail(target.value)}
            />
            <button
              className="login"
              onClick={handleForgetPass}
              style={{
                border: "1px solid #aaa",
              }}
            >
              Send Link
            </button>
          </div>
          <SocialLogin />
        </div>

        <img src={signinImage} alt="signinImage" />
      </div>
    </div>
  );
};

export default Login;
