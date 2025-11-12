import React from 'react';
import ProductCard from '../components/ProductCard';
import { useLoaderData } from 'react-router';

const AllCars = () => {
    const data = useLoaderData();
    return (
 
        <div className='bg-linear-to-tl from-orange-50 to-white h-full px-10'>
                        <title>Explore Cars - Rent Wheel</title>

            <div className="all-cars mb-15">
                <h3 className="text-4xl text-secondary font-bold text-center pt-10 mb-8">Browse Cars</h3>
                <div className="car-cards w-full md:w-7/10 lg:w-6/10 mx-auto container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                        {
                            data.map(car => <ProductCard key={car._id} car={car}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCars;