import React from 'react';
import slideOne from '../assets/suv-slider.png'
import { Link } from 'react-router';
import { Fade, Slide } from 'react-awesome-reveal';

const CarouselSlide = () => {
    return (
        <div>
            <div className="slide-content flex flex-col-reverse md:flex-row justify-between items-center w-9/10 mx-auto container h-[500px] mb-5">
                
                    <div className="text-content">
                        <Fade cascade duration={1500}>
                            <h2 className="text-secondary text-3xl font-bold mb-3">Luxury Comfort, Every Journey</h2>
                        </Fade>
                        <Fade cascade duration={2000}>
                            <p className='text-justify text-gray-500'>Experience top tier Comfort in afforadable range with our premium car selection. Perfect for leisure and business</p>

                        </Fade>
                        <Link to={'/cars'} className='btn btn-primary text-black mt-3'>Book Now</Link>
                    </div>
              

                <Slide direction='right'>
                    <div className="img"><img src={slideOne} alt="Hunday Suv" className='aspect-4/3 h-full w-full' /></div>
                </Slide>
            </div>
        </div>
    );
};

export default CarouselSlide;