import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slideOne from '../assets/suv-slider.png'
import carColl from "../assets/cars-coll.png"
import jeep from '../assets/jeep.png'
import { Link } from 'react-router';
import { Fade, Slide } from 'react-awesome-reveal';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CarouselSlide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
                <SwiperSlide>
                  <div className="slide-content flex flex-col-reverse md:flex-row justify-between items-center w-9/10 mx-auto container h-[500px] py-5">
                    <div className="text-content flex-1 md:w-2/3">
                      <Fade cascade duration={1500}>
                        <h2 className="text-secondary text-3xl font-bold mb-3">Your City, Your Ride</h2>
                      </Fade>
                      <Fade cascade duration={2000}>
                        <p className='text-justify text-gray-500 md:w-8/10'>From business trip to family weekend, Find the perfect car for your journey. Go to vacation inter country or outside the country.</p>
                      </Fade>
                      <Link to={'/cars'} className='btn btn-primary text-black mt-3'>Rent a Car</Link>
                    </div>
                    <Slide direction='right' className='md:w-1/2'>
                      <div className="img  h-full"><img src={carColl} alt="Hunday Suv" className='aspect-video h-full w-full' /></div>
                    </Slide>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content flex flex-col-reverse md:flex-row justify-between items-center w-9/10 mx-auto container h-[500px] py-5">
                    <div className="text-content">
                      <Fade cascade duration={1500}>
                        <h2 className="text-secondary text-3xl font-bold mb-3">Escape the Ordinary</h2>
                      </Fade>
                      <Fade cascade duration={2000}>
                        <p className='text-justify text-gray-500 md:w-8/10'>SUVs, Sedans or Electrics, Start your trip with comfort and freedom. Limitless adventure go hicking or beach, forest with friends or bros</p>
        
                      </Fade>
                      <Link to={'/cars'} className='btn btn-primary text-black mt-3 mb-3'>Start Booking</Link>
                    </div>
                    <Slide direction='right'>
                      <div className="img"><img src={jeep} alt="Hunday Suv" className='aspect-4/3 h-full w-full' /></div>
                    </Slide>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide-content flex flex-col-reverse md:flex-row justify-between items-center w-9/10 mx-auto container h-[500px] py-5">
        
                    <div className="text-content">
                      <Fade cascade duration={1500}>
                        <h2 className="text-secondary text-3xl font-bold mb-3">Luxury Comfort, Every Journey</h2>
                      </Fade>
                      <Fade cascade duration={2000}>
                        <p className='text-justify text-gray-500'>Experience top tier Comfort in afforadable range with our premium car selection. Perfect for leisure and business</p>
        
                      </Fade>
                      <Link to={'/cars'} className='btn btn-primary text-black mt-3 mb-3'>Book Now</Link>
                    </div>
        
        
                    <Slide direction='right'>
                      <div className="img"><img src={slideOne} alt="Hunday Suv" className='aspect-4/3 h-full w-full' /></div>
                    </Slide>
                  </div>
                </SwiperSlide>
      </Swiper>
    </>
  );
}
