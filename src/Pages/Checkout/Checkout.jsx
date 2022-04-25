import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        maxWidth: "100vw",
        height: "100vh",
      }}
    >
      <Navbar label="Sign In" />
      <div className="checkout-container">
        <h1 className="header">Checkout Here</h1>
        <form>
          <div className="checkoutForm">
            <label htmlFor="firstname">Firstname</label>
            <input required type="text" name="firstname" id="firstname" />
            <label htmlFor="lastname">Lastname</label>
            <input required type="text" name="lastname" id="lastname" />
          </div>
          <div className="checkoutForm">
            <label htmlFor="address">Address</label>
            <input required type="text" name="address" id="address" />
            <label htmlFor="city">City</label>
            <input type="text" name="city" required id="city" />
            <label htmlFor="postcode">Postcode</label>
            <input type="text" required name="postcode" id="postcode" />
          </div>
          <button
            className="confirm"
            onClick={() => {
              navigate("/success");
            }}
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
