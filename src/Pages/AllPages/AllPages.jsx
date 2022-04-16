import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";

const AllPages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
};

export default AllPages;
