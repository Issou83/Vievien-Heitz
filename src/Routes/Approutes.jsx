import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";

/**
 * Définition les routes de l'application
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Route pour la page d'accueil */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;


