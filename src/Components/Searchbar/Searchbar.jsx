import React from "react";
import "./Searchbar.css";

const Searchbar = () => {
  return (
    <form className="searchContainer">
      <div className="searcInput">
        <p>Destination</p>
        <input type="text" name="name" id="name" placeholder="Astroidburg..." />
      </div>
      <div className="searcInput">
        <p>Starts</p>
        <input type="date" name="name" id="start" />
      </div>
      <div className="searcInput">
        <p>Guests</p>
        <input type="number" name="name" id="name" placeholder="2 Guests" />
      </div>
      <button>Search</button>
    </form>
  );
};

export default Searchbar;
