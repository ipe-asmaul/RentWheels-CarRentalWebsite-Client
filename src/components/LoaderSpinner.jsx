import React from 'react';
import Spinner from '../assets/Loading.json'
import Lottie from 'lottie-react';

const LoaderSpinner = () => {
    return (
        <div>
            <div className=' flex items-center justify-center h-1/2  bg-white backdrop-blur-3xl opacity-90 w-full '>
                <Lottie animationData={Spinner}></Lottie>
            </div>
        </div>
    );
};

export default LoaderSpinner;