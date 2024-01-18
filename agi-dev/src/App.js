import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutAGI from './components/AboutAGI';
import Research from './components/Research';
import ExperimentalApproaches from './components/ExperimentalApproaches';
import TeamLab from './components/TeamLab';
import NewsPublications from './components/NewsPublications';
import ContactSocial from './components/ContactSocial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutAGI />} />
          <Route path="/research" element={<Research />} />
          <Route path="/experiments" element={<ExperimentalApproaches />} />
          <Route path="/team" element={<TeamLab />} />
          <Route path="/news" element={<NewsPublications />} />
          <Route path="/contact" element={<ContactSocial />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
