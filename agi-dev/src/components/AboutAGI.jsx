import './styling/AboutAGI.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { EffectComposer, Glitch, Pixelation } from '@react-three/postprocessing';
import SpinningCube from './SpinningCube';

const AboutAGI = () => (
    <div className="about-agi">
        <h1>About Artificial General Intelligence</h1>
        <p>
            Artificial General Intelligence (AGI) refers to the capability of an AI system to understand, learn, and apply
            knowledge in a way that is indistinguishable from human intelligence. It represents the next level of AI,
            surpassing current limitations of narrow AI which is designed for specific tasks only.
        </p>

        <p>BEYOND THE BLACK BOX</p>
        <Canvas
            camera={{ position: [-5, 2, 5], fov: 30 }}
            shadows
            gl={{ antialias: true }}
        >
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} castShadow />
            <SpinningCube />
            <OrbitControls enableZoom={true} />
            <Environment preset="sunset" />
            <EffectComposer>
                <Glitch delay={[1.5, 3.5]} strength={[0.7, 1]} duration={[0.1, 0.2]} />
                <Pixelation granularity={4} />
            </EffectComposer>
        </Canvas>
    </div>
);

export default AboutAGI;
