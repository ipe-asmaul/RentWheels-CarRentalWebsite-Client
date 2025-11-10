import React from 'react';
import carLoading from '../assets/Car.json'
import Lottie from 'lottie-react';

const LoadingAnimation = () => {
    return (
        <div className='h-full flex items-center justify-center bg-white backdrop-blur-3xl opacity-60 w-full '>
            <Lottie animationData={carLoading}></Lottie>
        </div>
    );
};

export default LoadingAnimation;