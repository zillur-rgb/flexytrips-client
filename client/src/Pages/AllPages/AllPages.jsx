import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Homepage from "../Homepage/Homepage";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Signup from "../Signup/Signup";

const AllPages = () => {
  return (
    <>
      <Navbar label="Sign In" />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default AllPages;
