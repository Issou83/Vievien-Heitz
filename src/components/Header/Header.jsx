import React, { useState } from "react";
import "./index.css";
import LogoAnim from "../LogoAnimation/LogoAnim";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="dispatchElementHeader">
      <LogoAnim />
      </div>
      
      <div className="menu-name dispatchElementHeader">
        <span>Vivien Heitz</span>
      </div>
      <nav className="dispatchElementHeader">
        <div
          className={`menu-toggle ${isOpen ? "open" : "close"}`}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <div >
              <span className="close-icon">&#x274C;</span>
            </div>
          ) : (
            <>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
            </>
          )}
        </div>
        <ul className={`menu-list ${isOpen ? "open" : "close"}`}>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/boutique">La boutique</a>
          </li>
          <li>
            <a href="/galerie">Séries</a>
          </li>
          <li>
            <a href="/expos">Expositions / Publications</a>
          </li>
          <li>
            <a href="/about">À propos</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;