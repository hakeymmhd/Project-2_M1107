import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../navigation/Home.jsx";
import About from "../navigation/About";
import ResultSummary from "../navigation/result-summary.jsx";
import ResultDetailed from "../navigation/result-detailed.jsx";

export default function Main () {
  return (
    <>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:result-summary" element={<ResultSummary />} />
          <Route path="/result-summary/:title" element={<ResultDetailed />} />
          <Route
            path="*"
            element={
              <Navigate to="/" />
              // <main style={{ padding: "1rem" }}>
              //   <p>There's nothing here!</p>
              // </main>
            } />
        </Routes>
        <p> Main function</p>
    </>
  );
}