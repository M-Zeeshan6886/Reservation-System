import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rschedule from "./Modules/Reservation schedule/Rschedule";
import Login from "./SignUP SetUp/Login/Login";

const RoutesComp = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Rschedule />} />
        </Routes>
      </Router>
    </>
  );
};

export default RoutesComp;
