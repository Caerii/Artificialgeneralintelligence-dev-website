import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './styling/HeroSection.css';

function SpinningMesh({ position, args, color }) {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.z += 0.01;
  });

  return (
    <mesh position={position} ref={meshRef}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

const HeroSection = () => (
  <section className="hero-section" id="home">
    <Canvas>
      <ambientLight intensity={10.5} />
      <pointLight position={[10, 10, 10]} />
      <SpinningMesh position={[0, 0, 0]} args={[3, 3, 3]} color="white" />
      <OrbitControls enableZoom={false} />
    </Canvas>
    <div className="hero-content">
      <h1 className="hero-title">Dive Into AGI</h1>
      <p className="hero-subtitle">Beyond the black box.</p>
      <button className="cta-button">Start the Adventure</button>
    </div>
  </section>
);

export default HeroSection;
