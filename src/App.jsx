import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Carouselcomponent from "./components/Carouselcomponent";
import Movie from "./components/Movie";
import MoviesPage from "./components/MoviesPage";
import "./components/style.css";
import Footer from"./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : ""}>
        <NavigationBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<><Carouselcomponent /><Movie /></>} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
