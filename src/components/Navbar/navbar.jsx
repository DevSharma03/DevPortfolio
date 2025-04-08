import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="#home" id="link-address" className="navbar-icon">
                    DEVASHISH SHARMA
                </a>
            </div>
            <div className="navbar-right">
                <div className="hamburger-icon" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
                <li className="nav-item">
                    <a href="#Home" id="link-address">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#about" id="link-address">About</a>
                </li>
                <li className="nav-item">
                    <a href="#skills" id="link-address">Skills</a>
                </li>
                <li className="nav-item">
                    <a href="#projects" id="link-address">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#work" id="link-address">Work Experience</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" id="link-address">Contact Me</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
