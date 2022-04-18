import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Signup.css";
import signinImage from "../../assets/signinImage.jpg";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";

import { auth, db } from "../../firebase.init";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formData = { name, email, password };
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCred.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      delete formData.password;

      formData.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formData);

      navigate("/");
    } catch (error) {
      toast.error("Error signing up");
    }
  };

  return (
    <div className="loginContainer">
      <Navbar label="Sign In" />

      <div className="loginMain">
        <img src={signinImage} alt="signinImage" />
        <div className="form">
          <h1 className="loginHeader">Sign Up</h1>
          <form onSubmit={handleSignup}>
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
