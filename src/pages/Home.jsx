import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import CarouselSlide from '../components/CarouselSlide';
import callCar from '../assets/car-call.png'
import { FaPhone } from "react-icons/fa6";

import ProductCard from '../components/ProductCard';
import { ImCalendar } from "react-icons/im";
import { GiWallet } from "react-icons/gi";
import { LuClock3 } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";
import Testimonials from '../components/Testimonials';
import BrandCarousel from '../components/BrandCarousel';







const Home = () => {
    return (
        <div>
            <div className=' bg-linear-to-r from-orange-50 via-white to-white '>
                <CarouselSlide />
            </div>
            <div className="our-partners text-center space-y-12  p-20 bg-secondary">
                <h2 className='text-5xl font-bold'><span className='text-accent'>Our</span> <span className="text-primary">Partners</span></h2>
                <BrandCarousel/>
            </div>

            <div className="product-cards-featured w-9/10 md:w-7/10 lg:w-6/10 mx-auto container">
                <h2 className=" text-4xl font-bold text-center mt-15 mb-5">Featured <span className='border-b-3 text-secondary border-primary'>Cars</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>


            <div className="why-to-choose-us bg-linear-to-tl from-accent to-white p-8 mt-10 backdrop-blur-3xl">
                <div className="content-body container flex flex-col justify-center items-center gap-8">
                    <div className="h2 text-3xl font-bold text-secondary"><span className='text-primary'>Why</span> Rent <span className='text-primary'>With</span> Us</div>
                    <div className="cards flex flex-col md:flex-row items-center text-center justify-between gap-5">
                        <div className="rent-car-card flex flex-col gap-3 items-center w-full md:w-1/3 hover:shadow-2xl p-3 hover:rounded-xl transition">
                            <h3 className="text-xl font-bold text-secondary opacity-90">Easy Online Booking</h3>
                            <div className="icon-card text-7xl text-primary"><ImCalendar /></div>
                            <p className="text-gray-700 w-2/3">Book Your Car  with Online System Anytime - Fast, Secure, Easy</p>
                        </div>
                        <div className="rent-car-card flex flex-col gap-3 items-center w-full md:w-1/3 hover:shadow-2xl p-3 hover:rounded-xl transition">
                            <h3 className="text-xl font-bold text-secondary opacity-90">Afforable Pricing</h3>
                            <div className="icon-card text-7xl text-primary"><GiWallet /></div>
                            <p className="text-gray-700 w-2/3">Enjoy competetive rates with no hidden charge, pay what you use</p>
                        </div>
                        <div className="rent-car-card flex flex-col gap-3 items-center w-full md:w-1/3 hover:shadow-2xl p-3 hover:rounded-xl transition">
                            <h3 className="text-xl font-bold text-secondary opacity-90">Flexible Rental Plans</h3>
                            <div className="icon-card text-7xl text-primary"><LuClock3 /></div>
                            <p className="text-gray-700 w-2/3">Hourly, Daily or Weekly - Rent your car with your changable schedule</p>
                        </div>
                        <div className="rent-car-card flex flex-col gap-3 items-center w-full md:w-1/3 hover:shadow-2xl p-3 hover:rounded-xl transition">
                            <h3 className="text-xl font-bold text-secondary opacity-90">24/7 Support</h3>
                            <div className="icon-card text-7xl text-primary"><RiCustomerService2Line /></div>
                            <p className="text-gray-700 w-2/3">Any Query, Question or Problem - We are always here to provide support</p>
                        </div>

                    </div>
                </div>
            </div>



            <section className="top-rated">
                <div className="product-cards-featured w-9/10 md:w-7/10 lg:w-6/10 mx-auto container">
                    <h2 className=" text-4xl font-bold text-center mt-15 mb-5">Top <span className='border-b-3 text-secondary border-primary'>Rated</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </div>
                </div>
            </section>
            <section className="all-reviews w-full mt-25">
                <h1 className="text-4xl font-bold text-secondary text-center">Testimonials</h1>


                <div className="customer-review w-[95%] grid grid-cols-1 lg:grid-cols-3 mx-auto mt-5 mb-20 gap-y-8 md:grid-cols-2 place-items-center">
                    <Testimonials />
                    <Testimonials />
                    <Testimonials />
                </div>
            </section>

            <section className="confused w-full h-fit p-10">
                <div className="content container flex md:flex-row-reverse flex-col items-center justify-around bg-radial-[at_25%_55%] p-10 rounded-4xl  from-primary to-orange-100 via-orange-200 backdrop-blur-3xl">
                    <div className="img hidden md:block"><img src={callCar} alt="" className='h-90 w-110 aspect-4/3'/></div>
                    <div className="text-content space-y-4">
                        <h2 className="text-5xl font-bold text-secondary">Still Confused!</h2>
                        <p className="text-black text-xl">Call us right now</p>
                        <button className="btn btn-primary">Call Now <FaPhone/></button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;