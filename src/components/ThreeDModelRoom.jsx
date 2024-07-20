import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Scene } from './Scene';


function ThreeDModelRoom() {
    // const mesh = useRef();

    // useFrame((state, delta) => {
    //     mesh.current.rotation.y += delta;
    // });

    return (
        <>
            <OrbitControls />
            <Scene />
        </>
    );
}

export default ThreeDModelRoom;