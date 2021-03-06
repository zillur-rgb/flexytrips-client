import React, { useState } from "react";
import { HiOutlineLocationMarker, HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiOutlineRightSquare } from "react-icons/ai";
import "./SingleTour.css";
const SingleTour = ({ trend }) => {
  const [allDetails, setAllDetails] = useState(false);

  const starArray = [];
  for (let i = 0; i < trend.ratings; i++) {
    starArray.push(<HiStar />);
  }

  return (
    <div className="tourCard">
      <div className="image">
        {trend.imgs.map((img, idx) => {
          return (
            <>
              <img
                src={img}
                key={idx}
                alt="trendingImage"
                className="cardImg"
              />
              <AiOutlineRightSquare />
            </>
          );
        })}
      </div>
      <div className="location">
        <HiOutlineLocationMarker />
        <p>
          {trend.city}, {trend.country}
        </p>
      </div>

      <h1 className="tripName">{trend.tripName.slice(0, 24)}...</h1>

      <p className="tourDetailsShort">
        {allDetails ? trend.details : trend.details.slice(0, 145)}...{" "}
        <span
          onClick={() => {
            setAllDetails(!allDetails);
          }}
          style={{
            cursor: "pointer",
            fontFamily: "'Inter', sans-serif",
            color: "#18b2dc",
          }}
        >
          Show {allDetails ? "Less" : "More"}
        </span>
      </p>

      <div className="info">
        <p>
          Package Price:{" "}
          <b
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#0a1128",
            }}
          >
            €{trend.price}
          </b>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p>Ratings:</p>{" "}
          <div
            style={{
              color: "#FFD233",
              fontSize: "20px",
              margin: "0 5px -7px",
              display: "flex",
            }}
          >
            {starArray.map((star, idx) => (
              <div key={idx}>{star}</div>
            ))}
          </div>{" "}
        </div>
      </div>

      <div className="btns">
        <Link to={`/tour/${trend.id}`}>
          <button>View Details</button>
        </Link>
        <Link to="/Checkout">
          <button>Book a Place</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleTour;
