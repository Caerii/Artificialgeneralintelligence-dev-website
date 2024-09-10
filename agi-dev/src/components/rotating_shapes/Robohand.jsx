import { useRef, useEffect } from 'react';
import { useLoader, useFrame, extend, useThree } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

extend({ OrbitControls });

function Robohand({ modelPath }) {
  const modelRef = useRef();
  const controlsRef = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  const { camera, gl, scene } = useThree();

  useEffect(() => {
    new RGBELoader().load('/path/to/your/hdr/image.hdr', (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.background = texture;
    });

    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.envMapIntensity = 1.5;
        }
      });
    }
  }, [gltf.scene, scene]);

  // Based on clock, rotate the model
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.rotation.y = time * 0.5;
    }
  });

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
    }
  });

  return (
    <>
      <ambientLight intensity={2.1} />
      <directionalLight position={[25, -45, 15]} intensity={0.3} />
      <primitive object={gltf.scene} rotation={[12.6, 0, 60]} position={[0, 4, 0]} scale={[30, 30, 30]} ref={modelRef} />
      <orbitControls ref={controlsRef} args={[camera, gl.domElement]} enableZoom={true} enablePan={true} enableRotate={true} enableDamping={true} dampingFactor={0.01} />
    </>

    
  );
}

export default Robohand;
