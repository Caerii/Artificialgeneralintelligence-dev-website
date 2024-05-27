import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

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

export default SpinningCube;