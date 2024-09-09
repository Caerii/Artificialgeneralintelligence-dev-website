// import React from 'react';
// import { Canvas,  extend } from '@react-three/fiber';
// import { OrbitControls, Environment } from '@react-three/drei';

// import { RoundedBoxGeometry } from 'three-stdlib'; // Importing custom geometry
// import RotatingCylinder from './rotating_shapes/RotatingCylinder';

// import {  ChromaticAberration, Pixelation, WaterEffect, TiltShift2, Noise, BrightnessContrast, HueSaturation, Glitch, EffectComposer, Bloom, SSAO, DepthOfField } from '@react-three/postprocessing';
// import './styling/Cylinder.css'; // Styling


// extend({ RoundedBoxGeometry });

// const CylinderPage = () => (
//     <div className="canvas-container">
//         <Canvas
//             camera={{ position: [-30, 3, 20], fov: 30 }}
//             shadows
//             gl={{ antialias: true }}
//         >
//             <ambientLight intensity={0.04} />
//             <pointLight position={[10, 10, 10]} castShadow />
//             <RotatingCylinder tiltAngle={Math.PI / 9} />
//             <OrbitControls enableZoom={true} />
//             <Environment preset="city" />
            
//             <EffectComposer>
//                 <SSAO intensity={1} radius={0.4} />
//                 <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} />
//                 <DepthOfField focusDistance={0.02} focalLength={0.02} bokehScale={2} height={480} />
//                 {/* <Glitch delay={[1.5, 3.5]} strength={[0.3, 0.5]} duration={[0.1, 0.2]} /> */}
//                 <BrightnessContrast brightness={0.2} contrast={0.15} />
//                 <HueSaturation hue={0.3} saturation={0.8} />

//                 {/* <TiltShift2 h={0.5} v={0.5} blur={1.5} spread={2.0} /> Tilt shift effect */}
//                 {/* <WaterEffect factor={0.3} type="osciIIate" /> Water effect */}
//                 {/* <Pixelation granularity={4} /> Pixelation */}
//                 {/* <ChromaticAberration offset={[0.005, 0.001]} /> Chromatic Aberration */}
//                 {/* <Noise opacity={0.05} /> Noise effect */}
//             </EffectComposer>
//         </Canvas>

        
//     </div>

// );

// export default CylinderPage;

import React from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

import { RoundedBoxGeometry } from 'three-stdlib'; // Importing custom geometry
import RotatingCylinder from './rotating_shapes/RotatingCylinder';
import { TileDataProvider } from './content/Context';

import { ChromaticAberration, Pixelation, WaterEffect, TiltShift2, Noise, BrightnessContrast, HueSaturation, Glitch, EffectComposer, Bloom, SSAO, DepthOfField } from '@react-three/postprocessing';
import './styling/Cylinder.css'; // Styling

extend({ RoundedBoxGeometry });

const CylinderPage = () => (
  <div className="canvas-container">
    <TileDataProvider>
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
          <BrightnessContrast brightness={0.2} contrast={0.15} />
          <HueSaturation hue={0.3} saturation={0.8} />
        </EffectComposer>
      </Canvas>
    </TileDataProvider>
  </div>
);

export default CylinderPage;

