import React from 'react';
import './App.css';

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
        Try
        <HeroSection />
        Create
        <AboutAGI />
        <Research />
        <ExperimentalApproaches />
        <TeamLab />
        <NewsPublications />
        <ContactSocial />
      </main>
      <Footer />
    </div>
  );
}

export default App;
