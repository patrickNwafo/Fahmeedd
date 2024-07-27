import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <ClipLoader color="#3A9BDC" loading={true} size={50} />
        </div>
    );
};

export default Spinner;