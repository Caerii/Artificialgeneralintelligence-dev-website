import React from 'react';
import './HeroSection.css';

// This should be a bold section that captures the essence of AGI and what the site is about.
// Include a striking image or animation, a headline, and a call-to-action button.

const HeroSection = () => (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>Exploring the Boundaries of Artificial General Intelligence</h1>
        <p>Join us on a journey to the forefront of AGI development.</p>
        <button className="cta-button">Discover More</button>
      </div>
    </section>
  );

export default HeroSection;