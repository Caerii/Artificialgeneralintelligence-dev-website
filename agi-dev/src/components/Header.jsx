import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styling/Header.css'; // Assuming you have a CSS file for styles

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation(); // This hook gives you the current URL location

  // Function to determine if the link is active based on the current location
  const isActive = (path) => location.pathname === path;

  // Function to handle screen resizing
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setNavOpen(false); // Close nav menu when switching to desktop view
    }
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Add event listener for resizing
    return () => window.removeEventListener('resize', handleResize); // Clean up the listener
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-bar">
        <div className="logo">
          {/* Insert logo image or text here */}
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Logo" />
          </Link>
        </div>
        {isMobile ? (
          <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : null}
        <ul className={`nav-links ${navOpen ? 'active' : ''} ${isMobile ? '' : 'desktop'}`}>
          {/* Use `Link` component for navigation */}
          <li className={isActive('/') ? 'active' : ''}>
            <Link to="/" onClick={() => setNavOpen(false)}>Home</Link>
          </li>
          <li className={isActive('/about') ? 'active' : ''}>
            <Link to="/about" onClick={() => setNavOpen(false)}>About AGI</Link>
          </li>
          <li className={isActive('/research') ? 'active' : ''}>
            <Link to="/research" onClick={() => setNavOpen(false)}>Research</Link>
          </li>
          <li className={isActive('/experiments') ? 'active' : ''}>
            <Link to="/experiments" onClick={() => setNavOpen(false)}>Experimental Approaches</Link>
          </li>
          <li className={isActive('/team') ? 'active' : ''}>
            <Link to="/team" onClick={() => setNavOpen(false)}>Team Lab</Link>
          </li>
          <li className={isActive('/news') ? 'active' : ''}>
            <Link to="/news" onClick={() => setNavOpen(false)}>News & Publications</Link>
          </li>
          <li className={isActive('/contact') ? 'active' : ''}>
            <Link to="/contact" onClick={() => setNavOpen(false)}>Contact & Social</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
