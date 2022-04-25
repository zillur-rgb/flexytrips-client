import React from "react";
import useTrending from "../../Hooks/useTrending";
import SingleCity from "../SingleCity/SingleCity";
import "./TopCities.css";

const TopCities = () => {
  const [trending] = useTrending();

  return (
    <div className="topCities-container">
      <h1 className="header">Top Cities</h1>
      <div className="allCities">
        {trending.map((t) => {
          return <SingleCity key={t.id} trending={t} />;
        })}
      </div>
    </div>
  );
};

export default TopCities;
