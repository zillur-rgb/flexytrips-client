import React from "react";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Services from "../../Components/Services/Services";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Searchbar />
      <Services />
    </div>
  );
};

export default Homepage;
