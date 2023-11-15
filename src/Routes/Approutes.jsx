import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import Boutique from "../Pages/Boutique/Boutique.jsx";
import Apropos from "../Pages/Apropos/Apropos.jsx";
import Galerie from "../Pages/Galerie/Galerie.jsx";
import Expopubli from "../Pages/Expopuli/Expopubli.jsx";
import Categories from "../Pages/Categories/Categories.jsx";
import Contact from "../Pages/Contact/Contact.jsx";

/**
 * Définition les routes de l'application
 */
const AppRoutes = () => {
  return (
    <Routes>
      {/* Route pour la page d'accueil */}
      <Route path="/" element={<Home />} />
      <Route path="/boutique" element={<Boutique />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/galerie" element={<Galerie />} />
      <Route path="/expopubli" element={<Expopubli/>} />
      <Route path="/categories" element={<Categories/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
};

export default AppRoutes;


