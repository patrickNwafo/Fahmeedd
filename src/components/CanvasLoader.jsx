import React from 'react';
import { useProgress } from '@react-three/drei';

const Loader = () => {
    const { progress } = useProgress();
    console.log(`Loading progress: ${progress}%`);
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            fontSize: '1.5rem',
            position: 'absolute',
            top: 0,
            left: 0
        }}>
            <div>Loading {Math.round(progress)} %</div>
        </div>
    );
};

export default Loader;