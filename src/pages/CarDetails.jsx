import React, { useContext, useEffect, useState } from 'react';
import CarOne from '../assets/car-2.png'
import { AiOutlineDollar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { useLoaderData } from 'react-router';
// import App from '../App';
import { CgBlock } from "react-icons/cg";
import { Context } from '../auth/AuthContext';
import Swal from 'sweetalert2';
import LoadingAnimation from '../components/LoadingAnimation';






const CarDetails = () => {
    const loadingData = useLoaderData();
    const [data,setData] = useState(() => loadingData || [])
    const [bookingLoading, setBookingLoading] = useState(false)

    
    useEffect(()=>{
    setData(loadingData)
    },[loadingData])
    // console.log(data)
    const {user, loading} = useContext(Context);
    
   
    const bookingObj = {
        carId: data?._id,
        bookingHolder: user.email
    }
    const handleBookNow = () =>{
        setBookingLoading(true)
          fetch(`https://rent-wheel-server.vercel.app/booking-car/${data._id}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            },
            body:JSON.stringify(bookingObj)
          })
          .then(result => result.json())
          .then(info => 
            {console.log(info);
             setData(prev => ({...prev, isBooked: true}))
             setBookingLoading(false);
               Swal.fire({
                        icon: "success",
                        title: "Car Booked",
                        text: "Successfully Booked Your Drive!",
                    });
          })
          .catch(err => console.log(err))
    }
    return (
        <>
        <title>{data?.carName}</title>
        <div className='bg-linear-to-bl from-orange-50 to-white h-full relative'>
            {
                bookingLoading && <div className='fixed top-0 right-0 w-full z-50'>
                    <LoadingAnimation/>
                </div>
            }
            {
       !loading &&
            
            <div className="details-content">
                <div className="header-details flex flex-col md:flex-row w-full gap-20">
                    <div className="img w-full md:w-1/3">
                        <img src={data?.photo} alt="" className='h-full w-full aspect-4/3'/>

                    </div>
                    <div className="header-text-content flex flex-col space-y-6 justify-between flex-1 p-5">
                        <div className="name-check space-y-2">
                           <h2 className="text-4xl font-bold text-secondary">{data?.carName}</h2>
                           <p className='text-gray-900 w-fit bg-gray-100 p-2 rounded-2xl'>{data?.category}</p>
                           </div>
                           <div className="small-details-items grid grid-cols-2 place-items-center md:grid-cols-3 w-fit gap-5">


                            <div className="small-detail-card shadow-sm p-3 rounded-xl w-full">
                               <div className="icon-item text-4xl text-primary">
                                <AiOutlineDollar/>
                               </div>
                               <h3 className="text-md md:text-2xl  font-bold text-standard">{data?.rent}</h3>
                            </div>

                             <div className="small-detail-card shadow-sm p-3 rounded-xl w-fit">
                               <div className="icon-item text-4xl text-primary">
                                <FaLocationDot/>
                               </div>
                               <h3 className=" text-md md:text-2xl font-bold text-standard">{data?.location}</h3>
                            </div>

                             <div className="small-detail-card shadow-sm p-3 rounded-xl w-fit">
                               <div className={`icon-item text-4xl ${!data?.isBooked ? 'text-green-600' : 'text-orange-300'}`}>
                                {data.isBooked ? <CgBlock/>  :<FaRegCircleCheck/>}
                               </div>
                               <h3 className="text-md md:text-2xl  font-bold text-standard">{data?.isBooked ? 'Booked' : 'Available'}</h3>
                            </div>


                           </div>
                           <div className="provider-info space-y-3">
                            <h4 className="text-2xl font-semibold text-secondary">Provider Info</h4>
                            <div className="details-provider">
                                <p className='text-xl text-black flex items-center gap-2 opacity-85'><IoPerson/> {data.userName}</p>
                                <p className='text-xl text-black flex items-center gap-2 opacity-85'><MdAlternateEmail/> {data.email}</p>
                            </div>
                           </div>
                           <button className="btn btn-primary w-fit text-secondary" onClick={handleBookNow} disabled={data.isBooked}>Book Now <FiPlus/></button>
                           
                        </div>
                    </div>
                     <div className="divider w-6/10 mx-auto"></div>
                     <div className="description p-5">
                        <h2 className="text-3xl text-secondary font-semibold mb-5">Description</h2>
                        <p className="text-gray-700 text-xl">{data.description}</p>
                     </div>
                </div> 
}

            </div>
            </>
        
    );
};

export default CarDetails;