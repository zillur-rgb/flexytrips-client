import React from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Services from "../../Components/Services/Services";
import TopCities from "../../Components/TopCities/TopCities";
import Trending from "../../Components/Trending/Trending";

const Homepage = () => {
  return (
    <div>
      <Navbar label={"Sign In"} />
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
