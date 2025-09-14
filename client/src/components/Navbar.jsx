import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Navbar.css";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="nav-container">
        <div className="logo-brand">
          <NavLink to="/">Muskan Bano</NavLink>
        </div>

        {/* Hamburger button for mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation */}
        <nav className={isOpen ? "nav-links active" : "nav-links"}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/service" onClick={() => setIsOpen(false)}>Service</NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <NavLink to="/logout" onClick={() => setIsOpen(false)}>Logout</NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register" onClick={() => setIsOpen(false)}>Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login" onClick={() => setIsOpen(false)}>Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
