import React from 'react';
import { useParams } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useTileData } from './content/Context';

const TilePage = () => {
  const { tileId } = useParams();
  const tileData = useTileData().find(tile => tile.id === parseInt(tileId));

  if (!tileData) {
    return <div>Tile not found</div>;
  }

  return (
    <div className="tile-page">
      <h1>{tileData.title}</h1>
      <p>{tileData.details}</p>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={true} />
        {/* Render the 3D content dynamically here */}
        {tileData.render3DContent && tileData.render3DContent()}
      </Canvas>
    </div>
  );
};

export default TilePage;
