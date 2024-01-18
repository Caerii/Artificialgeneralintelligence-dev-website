import React from 'react';
// The header should include the navigation bar with links to each section.
// Include the logo and make sure the navigation is responsive for different devices.

const Header = () => (
  <header className="site-header">
    <nav className="nav-bar">
      <div className="logo">
        {/* Insert logo image or text here */}
      </div>
      <ul className="nav-links">
        {/* Add `active` class to the link that corresponds to the current section */}
        <li><a href="#about">About AGI</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#experiments">Experimental Approaches</a></li>
        <li><a href="#team">Team Lab</a></li>
        <li><a href="#news">News & Publications</a></li>
        <li><a href="#contact">Contact & Social</a></li>
      </ul>
    </nav>
  </header>
);


export default Header;
