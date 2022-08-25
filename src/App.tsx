import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindAd from "./pages/FindAd";
import Home from "./pages/Home";
import FindAdd from "./pages/FindAdd";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposer-une-annonce" element={<FindAd/>} />
          <Route path="/annonces/offres" element={<FindAdd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
