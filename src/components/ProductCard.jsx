import React from 'react';
import { FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router';
import { MdVerifiedUser } from "react-icons/md";



const ProductCard = ({car}) => {
    return (
        <div>
            <div className="car-card h-fit w-full md:w-fit rounded bg-linear-to-tl from-orange-50 via-white to-white backdrop-blur-8xl px-5 shadow-sm hover:bg-linear-to-br">
                <div className="image relative">
                    <div className={` h-fit w-fit text-sm ${car.isBooked ? 'bg-orange-200 text-orange-900' : 'bg-green-200 text-green-900'} rounded-md absolute top-2 left-1 p-1`}>{car.isBooked ? 'Booked' : 'Available'}</div>
                    <img src={car.photo} alt="" className='h-[200px] w-[250px] aspect-4/3 p-2 mx-auto' />
                </div>
                <div className="text-content p-2 space-y-2">
                    <h3 className="text-2xl font-bold text-secondary">{car.carName}</h3>
                    <h3 className="font-bold text-secondary"> <span className='flex items-center'><FaDollarSign /><span className='text-4xl'>{car.rent}<sub className='text-primary text-sm'>per day</sub></span></span></h3>
                    <p className="text-gray-500 flex items-center gap-1.5 text-md"><span className='text-green-500'> <MdVerifiedUser /> </span> {car.userName}</p>
                    <Link to={`/car/${car._id}`} className='btn btn-secondary hover:btn-primary w-full text-white mb-3'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;