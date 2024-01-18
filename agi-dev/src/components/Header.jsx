import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styling/Header.css'; // Assuming you have a CSS file for styles

const Header = () => {
  const location = useLocation(); // This hook gives you the current URL location

  // Function to determine if the link is active based on the current location
  const isActive = (path) => location.pathname === path;

  return (
    <header className="site-header">
      <nav className="nav-bar">
        <div className="logo">
          {/* Insert logo image or text here */}
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          {/* Use `Link` component for navigation */}
          <li className={isActive('/') ? 'active' : ''}><Link to="/">Home</Link></li>
          <li className={isActive('/about') ? 'active' : ''}><Link to="/about">About AGI</Link></li>
          <li className={isActive('/research') ? 'active' : ''}><Link to="/research">Research</Link></li>
          <li className={isActive('/experiments') ? 'active' : ''}><Link to="/experiments">Experimental Approaches</Link></li>
          <li className={isActive('/team') ? 'active' : ''}><Link to="/team">Team Lab</Link></li>
          <li className={isActive('/news') ? 'active' : ''}><Link to="/news">News & Publications</Link></li>
          <li className={isActive('/contact') ? 'active' : ''}><Link to="/contact">Contact & Social</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
