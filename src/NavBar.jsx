import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './assets/logo.png'; 
import './App.css';


export default function NavBar() {
    const [nav, setNav] = useState(false); 
    const [menuOpen, setMenuOpen] = useState(false); 

    const changeBackground = () => {
        if (window.scrollY > 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Closes the dropdown menu
    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            {/* Logo */}
            <Link to="/" className="Logo">
                <img src={logo} alt="Logo" />
            </Link>

            {/* Hamburger Menu Button */}
            <button onClick={toggleMenu} className="menu-toggle">
                {menuOpen ? "✖" : "☰"}
            </button>

            {/* Nav Links for Desktop */}
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>
                    <NavLink to="/features" activeClassName="active" onClick={closeMenu}>
                        Features
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/offer" activeClassName="active" onClick={closeMenu}>
                        Offer
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>
                        Contact
                    </NavLink>
                </li>
            </ul>

            {/* Dropdown Menu for Mobile */}
            <div className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
                <Link to="/features" className="dropdown-item" onClick={closeMenu}>
                    Features
                </Link>
                <Link to="/offer" className="dropdown-item" onClick={closeMenu}>
                    Offer
                </Link>
                <Link to="/about" className="dropdown-item" onClick={closeMenu}>
                    About
                </Link>
                <Link to="/contact" className="dropdown-item" onClick={closeMenu}>
                    Contact
                </Link>
            </div>
        </nav>
    );
}
