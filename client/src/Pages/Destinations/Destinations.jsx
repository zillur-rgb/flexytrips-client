import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SingleTour from "../../Components/SingleTour/SingleTour";
import useTrending from "../../Hooks/useTrending";

const Destinations = () => {
  const [trending] = useTrending();
  return (
    <div>
      <Navbar label={"Sign In"} />
      <div className="trending-container">
        <h1 className="header">All Upcoming Tours</h1>

        <div className="tours">
          {trending.map((trend) => {
            return <SingleTour key={trend.id} trend={trend} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
