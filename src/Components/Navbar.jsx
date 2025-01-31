import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">Wedding Wardrobe</div>
      <div
        className={`menu-icon ${menuActive ? "span-anime" : ""}`}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </div>
      <ul className={`nav-links ${menuActive ? "menu-active" : ""}`}>
        <Link to= '/'>
        <li><a href="#home">Home</a></li>
        </Link>
        <Link to= '/Blog'>
        <li><a href="#services">Blog</a></li>
        </Link>
        <Link to= '/AboutUs'>
        <li><a href="#about">About</a></li>
        </Link>
        <Link to= '/Contact'>
        <li><a href="#contact">Contact</a></li>
        </Link>
        <Link to= '/Signup'>
        <li><a href="#contact">Sign up</a></li>
        </Link>
        <Link to= '/Cart'>
        <li><a href="#cart"><i class="fa-solid fa-cart-shopping"></i></a></li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
