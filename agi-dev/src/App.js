import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';

import {Canvas} from '@react-three/fiber';

import AboutAGI from './components/AboutAGI';
import Research from './components/Research';
import ExperimentalApproaches from './components/ExperimentalApproaches';
import TeamLab from './components/TeamLab';
import NewsPublications from './components/NewsPublications';
import ContactSocial from './components/ContactSocial';
import TilePage from './components/TilePage';
import Robohand from './components/rotating_shapes/Robohand';



import Footer from './components/Footer';

// import CylinderPage from './components/Cylinder';

function App() {
  return (
    <div className="App">
      <Header />

      {/* <Canvas className="robohand-canvas" camera={{ position: [25, -15, 40], fov: 80 }}>

      <Robohand modelPath="/robohand.glb"/>
      </Canvas> */}

      <main>
        <Routes>
          <Route path="/" element={<HeroSection />} />

          <Route path="/about" element={<AboutAGI />} />
          <Route path="/research" element={<Research />} />
          <Route path="/experiments" element={<ExperimentalApproaches />} />
          <Route path="/team" element={<TeamLab />} />
          <Route path="/news" element={<NewsPublications />} />
          <Route path="/contact" element={<ContactSocial />} />
          {/* Dynamic route for tile pages */}
          <Route path="/tile/:tileId" element={<TilePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
