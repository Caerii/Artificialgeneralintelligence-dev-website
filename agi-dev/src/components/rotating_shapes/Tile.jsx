// import React, { useState } from 'react';
// import { Html } from '@react-three/drei';
// import { animated, useSpring } from '@react-spring/three';

// function Tile({ position, rotation, scale, onClick, children, isSelected }) {
//     const [hovered, setHovered] = useState(false);

//     const { scaleSpring, colorSpring } = useSpring({
//         scaleSpring: hovered ? [1.2, 1.2, 1.2] : scale,
//         colorSpring: isSelected ? 'orange' : hovered ? 'lightblue' : 'white',
//         config: { tension: 300, friction: 30 },
//     });

//     return (
//         <animated.mesh
//             position={position}
//             rotation={rotation}
//             scale={scaleSpring}
//             onClick={onClick}
//             onPointerOver={() => setHovered(true)}
//             onPointerOut={() => setHovered(false)}
//         >
//             <roundedBoxGeometry args={[4, 4, 0.5, 4, 0.5]} />
//             <animated.meshStandardMaterial color={colorSpring} roughness={0.3} metalness={0.6} />
//             <Html position={[0, 0, 0.26]} transform occlude>
//                 <div
//                     className="tile-content"
//                     onMouseEnter={() => setHovered(true)}
//                     onMouseLeave={() => setHovered(false)}
//                     onClick={onClick}
//                 >
//                     {children}
//                 </div>
//             </Html>
//         </animated.mesh>
//     );
// }

// export default Tile;

// import React, { useState, useRef, useEffect } from 'react';
// import { Html } from '@react-three/drei';
// import { animated, useSpring } from '@react-spring/three';
// import { useFrame } from '@react-three/fiber';
// import { Vector3 } from 'three';

// function Tile({ position, rotation, originalRotation, scale, onClick, children, isSelected, camera }) {
//   const [hovered, setHovered] = useState(false);
//   const meshRef = useRef();

//   useFrame(() => {
//     if (isSelected && meshRef.current) {
//       meshRef.current.lookAt(camera.position);
//       meshRef.current.rotation.x = 0; // Keep the bottom edge flat relative to the camera view
//       meshRef.current.rotation.z = 0; // Keep the bottom edge flat relative to the camera view
//     }
//   });

//   const { positionSpring, rotationSpring, scaleSpring, colorSpring } = useSpring({
//     positionSpring: isSelected ? [0, 0, 0] : position,
//     rotationSpring: isSelected ? meshRef.current?.rotation.toArray() : rotation,
//     scaleSpring: hovered ? [1.2, 1.2, 1.2] : scale,
//     colorSpring: isSelected ? 'orange' : hovered ? 'lightblue' : 'white',
//     config: { tension: 300, friction: 30 },
//   });

//   useEffect(() => {
//     if (!isSelected) {
//       meshRef.current.rotation.set(...originalRotation);
//     }
//   }, [isSelected, originalRotation]);

//   return (
//     <animated.mesh
//       ref={meshRef}
//       position={positionSpring}
//       rotation={rotationSpring}
//       scale={scaleSpring}
//       onClick={onClick}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//     >
//       <roundedBoxGeometry args={[4, 4, 0.5, 4, 0.5]} />
//       <animated.meshStandardMaterial color={colorSpring} roughness={0.3} metalness={0.6} />
//       <Html position={[0, 0, 0.26]} transform occlude>
//         <div
//           className="tile-content"
//           onMouseEnter={() => setHovered(true)}
//           onMouseLeave={() => setHovered(false)}
//           onClick={onClick}
//         >
//           {children}
//         </div>
//       </Html>
//     </animated.mesh>
//   );
// }

// export default Tile;

import React, { useState, useRef, useEffect } from 'react';
import { Html } from '@react-three/drei';
import { animated, useSpring } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';

function Tile({ position, rotation, scale, onClick, children, isSelected, camera, index }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      if (isSelected) {
        meshRef.current.lookAt(camera.position);
        meshRef.current.rotation.x = 0; // Keep the bottom edge flat relative to the camera view
        meshRef.current.rotation.z = 0; // Keep the bottom edge flat relative to the camera view
      }
    }
  });

  const { positionSpring, rotationSpring, scaleSpring, colorSpring } = useSpring({
    positionSpring: isSelected ? [0, 0, 0] : position,
    rotationSpring: isSelected ? meshRef.current?.rotation.toArray() : rotation,
    scaleSpring: hovered ? [1.2, 1.2, 1.2] : scale,
    colorSpring: isSelected ? 'orange' : hovered ? 'lightblue' : 'white',
    config: { tension: 300, friction: 30 },
  });

  useEffect(() => {
    if (!isSelected) {
      meshRef.current.rotation.set(...rotation);
    }
  }, [isSelected, rotation]);

  return (
    <animated.mesh
      ref={meshRef}
      position={positionSpring}
      rotation={rotationSpring}
      scale={scaleSpring}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <roundedBoxGeometry args={[4, 4, 0.5, 4, 0.5]} />
      <animated.meshStandardMaterial color={colorSpring} roughness={0.3} metalness={0.6} />
      <Html position={[0, 0, 0.26]} transform occlude>
        <div
          className="tile-content"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onClick}
          style={{ fontSize: isSelected ? '24px' : '14px' }} // Adjust font size when selected
        >
          {children}
        </div>
      </Html>
      {isSelected && (
        <Html position={[0, -2.5, 0]} transform>
          <div className="tile-button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
            <button
              style={{ fontSize: '14px', padding: '10px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #ccc', cursor: 'pointer' }}
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = `/tile-${index + 1}`;
              }}
            >
              Go to Tile Page
            </button>
          </div>
        </Html>
      )}
    </animated.mesh>
  );
}

export default Tile;






