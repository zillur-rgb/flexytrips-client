import React from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../../Components/RequireAuth/RequireAuth";
import SearchResult from "../../Components/SearchResult/SearchResult";
import TourDetails from "../../Components/TourDetails/TourDetails";
import BookingSuccess from "../BookingSuccess/BookingSuccess";
import Checkout from "../Checkout/Checkout";
import ContactUs from "../ContactUs/ContactUs";
import Destinations from "../Destinations/Destinations";
import EmailVerification from "../EmailVerification/EmailVerification";
import Homepage from "../Homepage/Homepage";
import Latest from "../Latest";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Signup from "../Signup/Signup";
import Testimonials from "./Testimonials/Testimonials";

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
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/latest" element={<Latest />} />
        <Route
          path="/Checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/success" element={<BookingSuccess />} />
        <Route
          path="searcheresult/:destination/:budget"
          element={<SearchResult />}
        />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </>
  );
};

export default AllPages;
