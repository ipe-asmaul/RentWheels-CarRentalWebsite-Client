import Lottie from 'lottie-react';
import React from 'react';
import errorGif from '../assets/404.json'
import { GoHome } from "react-icons/go";
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className='flex h-screen w-full flex-col items-center justify-center gap-3'>
                        <title>Not Found - Rent Wheel</title>

            <div className="iconOfErrorPage text-primary">
             <Lottie animationData={errorGif}></Lottie>
            </div>
            <div className="text-content space-y-2 text-center">
                <h3 className="text-xl font-bold text-secondary">Opps! Seems Car Broken</h3>
                <p className="text-gray-600">No Page Found </p>
                <Link to={'/'} className="btn btn-primary">Back <GoHome/></Link>
                
            </div>
        </div>
    );
};

export default ErrorPage;