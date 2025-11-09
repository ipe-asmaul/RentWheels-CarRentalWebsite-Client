import React from 'react';
import CarOne from '../assets/car-2.png'
import { AiOutlineDollar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
// import App from '../App';





const CarDetails = () => {
    return (
        <>
        
        <div className='bg-linear-to-bl from-orange-50 to-white h-full'>
            {/* <div className="z-50 absolute top-0 right-0 w-full h-full overflow-hidden"><App/></div> */}
            <div className="details-content">
                <div className="header-details flex flex-col md:flex-row w-full gap-20">
                    <div className="img w-full md:w-1/3">
                        <img src={CarOne} alt="" className='h-full w-full aspect-4/3'/>

                    </div>
                    <div className="header-text-content flex flex-col space-y-6 justify-between flex-1 p-5">
                        <div className="name-check space-y-2">
                           <h2 className="text-4xl font-bold text-secondary">Toyota SUPRA</h2>
                           <p className='text-gray-900 w-fit bg-gray-100 p-2 rounded-2xl'>Electric</p>
                           </div>
                           <div className="small-details-items grid grid-cols-2 place-items-center md:grid-cols-3 w-fit gap-5">


                            <div className="small-detail-card shadow-sm p-3 rounded-xl w-full">
                               <div className="icon-item text-4xl text-primary">
                                <AiOutlineDollar/>
                               </div>
                               <h3 className="text-md md:text-2xl  font-bold text-standard">135.45</h3>
                            </div>

                             <div className="small-detail-card shadow-sm p-3 rounded-xl w-fit">
                               <div className="icon-item text-4xl text-primary">
                                <FaLocationDot/>
                               </div>
                               <h3 className=" text-md md:text-2xl font-bold text-standard">Bangladesh</h3>
                            </div>

                             <div className="small-detail-card shadow-sm p-3 rounded-xl w-fit">
                               <div className="icon-item text-4xl text-green-600">
                                <FaRegCircleCheck/>
                               </div>
                               <h3 className="text-md md:text-2xl  font-bold text-standard">Available</h3>
                            </div>


                           </div>
                           <div className="provider-info space-y-3">
                            <h4 className="text-2xl font-semibold text-secondary">Provider Info</h4>
                            <div className="details-provider">
                                <p className='text-xl text-black flex items-center gap-2 opacity-85'><IoPerson/> Jhon Doe</p>
                                <p className='text-xl text-black flex items-center gap-2 opacity-85'><MdAlternateEmail/> jhondoe@jhon.io</p>
                            </div>
                           </div>
                           <button className="btn btn-primary w-fit text-secondary">Book Now <FiPlus/></button>
                           
                        </div>
                    </div>
                     <div className="divider w-6/10 mx-auto"></div>
                     <div className="description p-5">
                        <h2 className="text-3xl text-secondary font-semibold mb-5">Description</h2>
                        <p className="text-gray-700 text-xl">The Long Last Car for Renting</p>
                     </div>
                </div>
               
            </div>
            </>
        
    );
};

export default CarDetails;