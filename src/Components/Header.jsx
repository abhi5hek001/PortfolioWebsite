import React, { useState } from 'react';
import '../styles.css'; // Ensure you have a styles.css file in your project

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="loader"></div>
      <div className="navbar">
        <div className="brand" style={{fontFamily: "garamond"}}><span style={{fontSize: "2rem", fontWeight: "bodler", color: "rgba(163, 108, 37, 1)"}}>Abhishek</span> SAHAY</div>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#footer" className="nav-link">Contact</a>
        </nav>
        <button onClick={toggleMenu} className="hamburger">
          <svg
            className="hamburger-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
