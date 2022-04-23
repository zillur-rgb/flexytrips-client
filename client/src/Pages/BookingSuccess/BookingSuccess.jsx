import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const BookingSuccess = () => {
  return (
    <div>
      <Navbar label="Sign In" />
      <div
        className="success-container"
        style={{
          margin: "100px 15%",
        }}
      >
        <h1 className="header">Thanks for the Booking</h1>
        <h1>See you at the tour day</h1>
        <Link to="/">
          <p
            style={{
              width: "150px",
              marginTop: "20px",
              borderBottom: "3px solid #333",
              color: "#333",
              paddingBottom: "10px",
            }}
          >
            Go Back to Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BookingSuccess;
