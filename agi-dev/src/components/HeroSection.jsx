import React from 'react';

import './styling/HeroSection.css';
import CylinderPage from './CylinderPage';
import FrontPage from './FrontPage';

const HeroSection = () => (
  <section className="hero-section" id="home">
    <CylinderPage/>
    <FrontPage/>
  </section>
);

export default HeroSection;
