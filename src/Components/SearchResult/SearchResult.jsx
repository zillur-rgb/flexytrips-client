import React from "react";
import { useParams } from "react-router-dom";
import useTrending from "../../Hooks/useTrending";
import Navbar from "../Navbar/Navbar";
import SingleTour from "../SingleTour/SingleTour";
import "./SearchResult.css";

const SearchResult = () => {
  const params = useParams();
  const [trending] = useTrending();
  console.log(params);

  const location = trending.filter(
    (trend) =>
      trend.city.toLowerCase() === params.destination.toLocaleLowerCase() &&
      trend.price < +params.budget
  );

  console.log(location);
  return (
    <div>
      <Navbar label="Sign In" />
      <div className="searchResult-container">
        <h1 className="header">Search Result for {params.destination}</h1>
        <div className="tours">
          {location.map((trend) => {
            return <SingleTour key={trend.id} trend={trend} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
