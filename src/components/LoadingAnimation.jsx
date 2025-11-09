import React from 'react';
import loadingGif from '../assets/loading.gif'

const LoadingAnimation = () => {
    return (
        <div className='h-full flex items-center justify-center bg-black backdrop-blur-3xl opacity-80'>
            <img src={loadingGif} alt="" className='opacity-100'/>
        </div>
    );
};

export default LoadingAnimation;