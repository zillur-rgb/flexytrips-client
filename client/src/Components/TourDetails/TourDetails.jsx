import React from "react";
import { useParams } from "react-router-dom";
import useTrending from "../../Hooks/useTrending";
import "./TourDetails.css";
import { GoLocation, GoStar } from "react-icons/go";
import Navbar from "../Navbar/Navbar";

const TourDetails = () => {
  const params = useParams();
  const [trending] = useTrending();
  const exactTour = trending.find((t) => t.id === params.id);
  console.log(exactTour);
  return (
    <>
      <Navbar label="Sign in" />
      {exactTour && (
        <div className="detail-container">
          <img src={exactTour.imgs[0]} alt="tourImage" className="tourImage" />
          <div className="description">
            <h1
              className="name"
              style={{
                color: "#2EB1DC",
              }}
            >
              {exactTour.tripName}
            </h1>

            <p className="tourDate">Date: {exactTour.date}</p>
            <div className="ratings">
              <p>
                {exactTour.ratings}
                <GoStar /> (1656 ratings)
              </p>
            </div>
            <p>
              <GoLocation /> {exactTour.city}, {exactTour.country}
            </p>
            <p className="price">
              All inclusive cost: <b>€{exactTour.price}</b>
            </p>
            <p className="details">{exactTour.details}</p>

            <button>Book a Place Now</button>
          </div>
        </div>
      )}
    </>
  );
};

export default TourDetails;
