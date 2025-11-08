import React from 'react';
import { FaCarCrash } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className='flex h-screen w-full flex-col items-center justify-center gap-3'>
            <div className="iconOfErrorPage text-9xl text-primary">
             <FaCarCrash/>
            </div>
            <div className="text-content space-y-2 text-center">
                <h3 className="text-xl font-bold text-secondary">Opps! No Car Broken</h3>
                <Link to={'/'} className="btn btn-primary">Back <GoHome/></Link>
                
            </div>
        </div>
    );
};

export default ErrorPage;