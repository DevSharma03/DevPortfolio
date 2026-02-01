import React, { useState, useEffect } from "react";
import './Navbar.css';

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
      // Scrolling down
      setVisible(false);
    } else {
      // Scrolling up
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className="navbar-container d-flex justify-content-center"
      style={{ top: visible ? "20px" : "-120px" }} // hide/show
    >
      <div className="navbar-box d-flex justify-content-around align-items-center">
        <a href="#Home" className="Navbar-Routes">Home</a> 
        <a href="#About" className="Navbar-Routes">About</a>
        <a href="#Projects" className="Navbar-Routes">Projects</a>
        <a href="#Work_Experience" className="Navbar-Routes">Work Experience</a>
        <a href="#Contact" className="Navbar-Routes">Contact</a>
      </div>
    </nav>
  );
}


