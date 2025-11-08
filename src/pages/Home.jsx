import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import CarouselSlide from '../components/CarouselSlide';
import { SiBmw } from "react-icons/si";
import { SiHonda } from "react-icons/si";
import { SiNissan } from "react-icons/si";
import { SiToyota } from "react-icons/si";
import ProductCard from '../components/ProductCard';



const Home = () => {
    return (
        <div>
            <div className=' bg-linear-to-r from-orange-50 via-white to-white '>
                <CarouselSlide />
            </div>
            <div className="our-partners text-center space-y-6 mt-8">
                <h2 className='text-5xl font-bold'><span className='text-secondary'>Our</span> <span className="text-primary">Partners</span></h2>
                <div className="partners flex gap-6 w-full justify-center space-x-8">
                    <div className="text-9xl hover:text-primary opacity-85 hover:opacity-100"><SiBmw/></div>
                    <div className="text-9xl hover:text-primary opacity-85 hover:opacity-100"><SiHonda/></div>
                    <div className="text-9xl hover:text-primary opacity-85 hover:opacity-100"><SiNissan/></div>
                    <div className="text-9xl hover:text-primary opacity-85 hover:opacity-100"><SiToyota/></div>
                </div>
            </div>

           <div className="product-cards-featured w-9/10 md:w-7/10 lg:w-6/10 mx-auto container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
            </div>
           </div>
        </div>
    );
};

export default Home;