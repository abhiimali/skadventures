import React from "react";
import {   Route , Routes } from "react-router-dom";
import About from "./components/About/About.js";
import StickyFooter from "./components/Footer/footer.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Header from "./components/Header/Header.jsx";
const App = () => {
  return (
    <>
       <Header/>
      
        <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />

        </Routes>
     
      <StickyFooter/>
    </>
  );
};

export default App;
