import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* On utilise notre composant dans notre JSX */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
