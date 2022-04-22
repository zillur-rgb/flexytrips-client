import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import TourDetails from "../../Components/TourDetails/TourDetails";
import ContactUs from "../ContactUs/ContactUs";
import Destinations from "../Destinations/Destinations";
import Homepage from "../Homepage/Homepage";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Signup from "../Signup/Signup";

const AllPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default AllPages;
