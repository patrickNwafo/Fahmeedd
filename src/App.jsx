import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Scene } from './components/Scene';
import { motion } from 'framer-motion-3d';


function App() {
  const [show3DModel, setShow3DModel] = useState(false);

  const handleLogoClick = () => {
    setShow3DModel(true);
  };



  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {!show3DModel ? (
        <Logo onClick={handleLogoClick} />
      ) : (
        <Canvas camera={{ position: [0, 4, 11], fov: 100 }}>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={1.15} penumbra={1} />
          <group>
            <Scene />
          </group>
        </Canvas>
      )}
    </div>
  );
}

export default App
