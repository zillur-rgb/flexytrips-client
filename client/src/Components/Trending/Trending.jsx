import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleTour from "../SingleTour/SingleTour";
import "./Trending.css";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/tours")
      .then((res) => setTrending(res.data));
  }, []);

  return (
    <div className="trending-container">
      <div className="allTours">
        <h1 className="header">Trending Tours</h1>
        <p className="allTour">Explore All</p>
      </div>

      <div className="tours">
        {trending.slice(0, 6).map((trend) => {
          return <SingleTour key={trend.id} trend={trend} />;
        })}
      </div>
    </div>
  );
};

export default Trending;
<h1>Trending</h1>;
