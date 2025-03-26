import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Carouselcomponent from "./components/Carouselcomponent";
import Movie from "./components/Movie";
import MoviesPage from "./components/MoviesPage";  
import "./components/style.css";

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<><Carouselcomponent /><Movie /></>} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Router>
  );
}
