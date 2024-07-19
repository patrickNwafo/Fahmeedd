import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function ThreeDModelRoom() {
    const mesh = useRef();

    useFrame((state, delta) => {
        mesh.current.rotation.y += delta;
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}

export default ThreeDModelRoom;