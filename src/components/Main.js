import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../navigation/Home.jsx";
import About from "../navigation/About";

export default function Main () {
  return (
    <>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
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