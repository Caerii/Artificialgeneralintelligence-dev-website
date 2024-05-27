import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Html, Environment, useTexture } from '@react-three/drei';
import {  ChromaticAberration, Pixelation, WaterEffect, TiltShift2, Noise, BrightnessContrast, HueSaturation, Glitch, EffectComposer, Bloom, SSAO, DepthOfField } from '@react-three/postprocessing';
import './styling/Cylinder.css'; // Make sure to include your CSS file
import { RoundedBoxGeometry } from 'three-stdlib';

extend({ RoundedBoxGeometry });

const TILE_COUNT = 12; // Number of tiles around the cylinder

function Tile({ position, rotation, children }) {
    return (
        <mesh position={position} rotation={rotation}>
            <roundedBoxGeometry args={[4, 4, 0.5, 4, 0.5]} />
            <meshStandardMaterial roughness={0.3} metalness={0.6} />
            <Html position={[0, 0, 0.26]} transform occlude>
                <div className="tile-content">
                    {children}
                </div>
            </Html>
        </mesh>
    );
}

function RotatingCylinder({ tiltAngle }) {
    const cylinderRef = useRef();
    const radius = 13;
    useFrame(() => {
        cylinderRef.current.rotation.y += 0.0005;
    });
    const tiles = Array.from({ length: TILE_COUNT }).map((_, index) => {
        const angle = (index / TILE_COUNT) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        return {
            position: [x, 0, z],
            rotation: [0, -angle + Math.PI / 2, 0],
            content: (
                <div className="tile-content">
                    <h2>Tile {index + 1}</h2>
                    <p>Content for tile {index + 1}.</p>
                    <p>What the hell {index + 1}.</p>
                </div>
            ),
        };
    });
    return (
        <group ref={cylinderRef} rotation={[tiltAngle, 0, 0]}>
            {tiles.map((tile, index) => (
                <Tile key={index} position={tile.position} rotation={tile.rotation}>
                    {tile.content}
                </Tile>
            ))}
        </group>
    );
}

const SpinningCube = () => {
    const cubeRef = useRef();
    useFrame(() => {
        if (cubeRef.current) {
            cubeRef.current.rotation.x += 0.01;
            cubeRef.current.rotation.y += 0.01;
        }
    });
    return (
        <mesh ref={cubeRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={'black'} />
        </mesh>
    );
};

const CylinderPage = () => (
    <div className="canvas-container">
        <Canvas
            camera={{ position: [-30, 3, 20], fov: 30 }}
            shadows
            gl={{ antialias: true }}
        >
            
            <ambientLight intensity={0.04} />
            <pointLight position={[10, 10, 10]} castShadow />
            <RotatingCylinder tiltAngle={Math.PI / 9} />
            <OrbitControls enableZoom={true} />
            <Environment preset="city" />
            <EffectComposer>
                <SSAO intensity={1} radius={0.4} />
                <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} />
                <DepthOfField focusDistance={0.02} focalLength={0.02} bokehScale={2} height={480} />
                {/* <Glitch delay={[1.5, 3.5]} strength={[0.3, 0.5]} duration={[0.1, 0.2]} /> */}
                <BrightnessContrast brightness={0.2} contrast={0.15} />
                <HueSaturation hue={0.3} saturation={0.8} />

                {/* <TiltShift2 h={0.5} v={0.5} blur={1.5} spread={2.0} /> Tilt shift effect */}
                {/* <WaterEffect factor={0.3} type="osciIIate" /> Water effect */}
                {/* <Pixelation granularity={4} /> Pixelation */}
                {/* <ChromaticAberration offset={[0.005, 0.001]} /> Chromatic Aberration */}
                {/* <Noise opacity={0.05} /> Noise effect */}
            </EffectComposer>
        </Canvas>

        
    </div>

);

export default CylinderPage;
