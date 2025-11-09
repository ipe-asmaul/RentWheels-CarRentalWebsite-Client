import React from 'react';
import Slider from "react-slick";
// import "../slick-carousel/slick/slick.css";
// import "../slick-carousel/slick/slick-theme.css";
import { SiBmw } from "react-icons/si";
import { SiHonda } from "react-icons/si";
import { SiNissan } from "react-icons/si";
import { SiToyota } from "react-icons/si";
import { SiFord } from "react-icons/si";
import { SiTesla, SiAudi, SiVolkswagen } from "react-icons/si";

const BrandCarousel = () => {
    const settings = {
        // dots: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 10,
        cssEase: "linear"

    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="text-5xl mx-3  md:text-6xl lg:text-8xl text-accent hover:text-primary opacity-75 hover:opacity-100"><SiFord /></div>
                <div className="text-5xl mx-3 md:text-6xl lg:text-8xl text-accent hover:text-primary opacity-75 hover:opacity-100"><SiTesla /></div>
                <div className="text-5xl mx-3 md:text-6xl lg:text-8xl text-accent hover:text-primary opacity-75 hover:opacity-100"><SiAudi /></div>
                <div className="text-5xl mx-3 md:text-6xl lg:text-8xl text-accent hover:text-primary opacity-75 hover:opacity-100"><SiVolkswagen /></div>
                <div className="text-5xl mx-3 md:text-6xl lg:text-8xl text-accent hover:text-primary opacity-75 hover:opacity-100"><SiHonda /></div>
                <div className="text-5xl mx-3 md:text-6xl lg:text-8xl text-accent hover:text-primary opacity-75 hover:opacity-100"><SiNissan /></div>
                <div className="text-5xl mx-3 md:text-6xl lg:text-8xl text-accent hover:text-primary opacity-75 hover:opacity-100"><SiToyota /></div>
            </Slider>
        </div>
    );
};

export default BrandCarousel;