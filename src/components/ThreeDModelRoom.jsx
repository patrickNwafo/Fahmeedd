import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Scene } from './Scene';
import { motion } from 'framer-motion-3d'


function ThreeDModelRoom() {

    return (
        <>
            <OrbitControls />

        </>
    );
}

export default ThreeDModelRoom;