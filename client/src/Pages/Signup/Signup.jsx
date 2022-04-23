import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Signup.css";
import signinImage from "../../assets/signinImage.jpg";
import { auth } from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating] = useUpdateProfile(auth);
  let errorElem = "";
  if (error) {
    errorElem = <div>Error: {error.message}</div>;
  }

  if (loading || updating) {
    return <div>Loading.............</div>;
  }

  if (user) {
    navigate("/EmailVerification");
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

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
            {errorElem}
            <button className="login" onClick={handleSignUp}>
              Signup
            </button>
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
