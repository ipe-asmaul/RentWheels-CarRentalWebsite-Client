import React from 'react';
import ProductCard from '../components/ProductCard';

const AllCars = () => {
    return (
        <div className='bg-linear-to-tl from-orange-50 to-white h-full px-10'>
            <div className="all-cars mb-15">
                <h3 className="text-4xl text-secondary font-bold text-center pt-10 mb-8">Browse Cars</h3>
                <div className="car-cards w-full md:w-7/10 lg:w-6/10 mx-auto container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCars;