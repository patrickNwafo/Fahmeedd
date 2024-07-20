import React, { useState } from 'react';
import Logo from './components/Logo';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ThreeDModelRoom from './components/ThreeDModelRoom';
import { Environment } from '@react-three/drei';


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
        <Canvas>
          <ambientLight intensity={0.5} />
          <Environment preset='city' />
          <Suspense fallback={null}>
            <ThreeDModelRoom />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

export default App
