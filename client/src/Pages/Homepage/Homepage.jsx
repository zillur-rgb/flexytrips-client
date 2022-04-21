import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Hero from "../../Components/Hero/Hero";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Services from "../../Components/Services/Services";
import TopCities from "../../Components/TopCities/TopCities";
import Trending from "../../Components/Trending/Trending";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Searchbar />
      <Services />
      <Trending />
      <TopCities />
      <ContactForm />
    </div>
  );
};

export default Homepage;
