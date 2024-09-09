// import React, { useRef, useState } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';
// import Tile from './Tile';

// const TILE_COUNT = 16; // Number of tiles around the cylinder
// const LEVEL_COUNT = 1; // Number of vertical levels

// function RotatingCylinder({ tiltAngle }) {
//   const { camera } = useThree();
//   const cylinderRefs = useRef([...Array(LEVEL_COUNT)].map(() => React.createRef()));
//   const [selectedTile, setSelectedTile] = useState(null);

//   useFrame(() => {
//     if (selectedTile === null) {
//       cylinderRefs.current.forEach((cylinderRef, level) => {
//         if (cylinderRef.current) {
//           cylinderRef.current.rotation.y += 0.0005 * (level + 1); // Different speeds for each level
//         }
//       });
//     }
//   });

//   const handleTileClick = (index) => {
//     setSelectedTile(selectedTile === index ? null : index);
//   };

//   const generateTiles = (level) => {
//     const radius = 13;
//     return Array.from({ length: TILE_COUNT }).map((_, index) => {
//       const angle = (index / TILE_COUNT) * Math.PI * 2;
//       const x = radius * Math.cos(angle);
//       const z = radius * Math.sin(angle);
//       const y = level * 5; // Adjust the spacing between levels
//       const isSelected = selectedTile === index;
//       const scale = selectedTile === null ? [1, 1, 1] : isSelected ? [2, 2, 2] : [0.5, 0.5, 0.5];

//       return {
//         position: [x, y, z],
//         rotation: [0, -angle + Math.PI / 2, 0],
//         originalRotation: [0, -angle + Math.PI / 2, 0],
//         scale: scale,
//         isSelected: isSelected,
//         content: (
//           <div className="tile-content">
//             <h2>Tile {index + 1}</h2>
//             <p>Content for tile {index + 1}.</p>
//             <p>What the hell {index + 1}.</p>
//           </div>
//         ),
//         onClick: () => handleTileClick(index),
//         index: index,
//       };
//     });
//   };

//   return (
//     <group rotation={[tiltAngle, 0, 0]}>
//       {cylinderRefs.current.map((ref, level) => (
//         <group ref={ref} key={level}>
//           {generateTiles(level).map((tile, index) => (
//             <Tile
//               key={index}
//               position={tile.position}
//               rotation={tile.rotation}
//               originalRotation={tile.originalRotation}
//               scale={tile.scale}
//               onClick={tile.onClick}
//               isSelected={tile.isSelected}
//               camera={camera}
//               index={tile.index}
//             >
//               {tile.content}
//             </Tile>
//           ))}
//         </group>
//       ))}
//     </group>
//   );
// }

// export default RotatingCylinder;

import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import Tile from './Tile';
import { useTileData } from '../content/Context';

const LEVEL_COUNT = 1; // Number of vertical levels

function RotatingCylinder({ tiltAngle }) {
  const { camera } = useThree();
  const cylinderRefs = useRef([...Array(LEVEL_COUNT)].map(() => React.createRef()));
  const [selectedTile, setSelectedTile] = useState(null);
  const tileData = useTileData();

  useFrame(() => {
    if (selectedTile === null) {
      cylinderRefs.current.forEach((cylinderRef, level) => {
        if (cylinderRef.current) {
          cylinderRef.current.rotation.y += 0.0005 * (level + 1); // Different speeds for each level
        }
      });
    }
  });

  const handleTileClick = (index) => {
    setSelectedTile(selectedTile === index ? null : index);
  };

  const generateTiles = (level) => {
    const radius = 13;
    return tileData.map((tile, index) => {
      const angle = (index / tileData.length) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      const y = level * 5; // Adjust the spacing between levels
      const isSelected = selectedTile === index;
      const scale = selectedTile === null ? [1, 1, 1] : isSelected ? [2, 2, 2] : [0.5, 0.5, 0.5];

      return {
        position: [x, y, z],
        rotation: [0, -angle + Math.PI / 2, 0],
        originalRotation: [0, -angle + Math.PI / 2, 0],
        scale: scale,
        isSelected: isSelected,
        data: tile,
        onClick: () => handleTileClick(index),
        index: index,
      };
    });
  };

  return (
    <group rotation={[tiltAngle, 0, 0]}>
      {cylinderRefs.current.map((ref, level) => (
        <group ref={ref} key={level}>
          {generateTiles(level).map((tile, index) => (
            <Tile
              key={index}
              position={tile.position}
              rotation={tile.rotation}
              originalRotation={tile.originalRotation}
              scale={tile.scale}
              onClick={tile.onClick}
              isSelected={tile.isSelected}
              camera={camera}
              index={tile.index}
              data={tile.data}
            />
          ))}
        </group>
      ))}
    </group>
  );
}

export default RotatingCylinder;