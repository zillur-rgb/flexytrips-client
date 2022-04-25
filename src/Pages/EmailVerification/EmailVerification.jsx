import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";

const EmailVerification = () => {
  const navigate = useNavigate();
  if (auth.user) {
    console.log("Hello");
  }
  return (
    <div>
      <h1>Verify Your Email Please by clicking below button</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Verify Now
      </button>
    </div>
  );
};

export default EmailVerification;
