import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";

const Searchbar = () => {
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState();
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(destination, budget);
    navigate(`/searcheresult/${destination}/${budget}`);
    setDestination("");
    setBudget();
  };
  return (
    <form className="searchContainer" onSubmit={handleSearch}>
      <div className="searcInput">
        <label htmlFor="budget">Destination</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Astroidburg..."
          value={destination}
          onChange={({ target }) => setDestination(target.value)}
        />
      </div>
      <div className="searcInput">
        <label htmlFor="budget">Budget</label>
        <input
          type="number"
          name="budget"
          placeholder="150"
          id="budget"
          value={budget}
          onChange={({ target }) => setBudget(target.value)}
        />
      </div>
      <div className="searcInput">
        <label htmlFor="guests">Guests</label>
        <input type="number" name="guests" id="name" placeholder="2 Guests" />
      </div>
      <button>Search</button>
    </form>
  );
};

export default Searchbar;
