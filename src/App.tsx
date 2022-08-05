import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindAd from "./pages/FindAd";
import Home from "./pages/Home";
import PlaceAd from "./pages/PlaceAd";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposer-une-annonce" element={<FindAd/>} />
          <Route path="/annonces/offres" element={<PlaceAd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
