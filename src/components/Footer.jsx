import React from 'react';
import { GiCarWheel } from "react-icons/gi";
import { FaFacebook, FaYoutube, FaQuora } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoLogoPinterest } from "react-icons/io";



const Footer = () => {
    return (
        <div className='bg-secondary w-full'>
            <footer className="footer container mx-auto sm:footer-horizontal bg-secondary text-white p-10">
                <aside>
                    <p className='flex text-2xl'> <span className='text-primary mr-2'>Rent</span> Wh<span className='flex color-accent'><GiCarWheel /><GiCarWheel /></span>L </p>
                    <p>
                        Rent Wheel
                        <br />
                        Providing Trusted Car Rental Service
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover flex items-center text-md"><span className='text-2xl mr-2'><FaFacebook /></span>RentWheel</a>
                    <a className="link link-hover flex items-center text-md"><span className='text-2xl mr-2'><IoLogoPinterest /></span>RentWheel</a>
                    <a className="link link-hover flex items-center text-md"><span className='text-2xl mr-2'><FaQuora /></span>RentWheel</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Legal </h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover flex items-center"><span className='text-2xl mr-2'><MdLocalPhone /></span> +88017XXXXX</a>
                    <a className="link link-hover flex items-center"><span className='text-2xl mr-2'><MdAlternateEmail /></span> info@rentwheel</a>
                    <a className="link link-hover flex items-center"><span className='text-2xl mr-2'><FaLocationDot /></span> Dhaka, Bangladesh</a>

                </nav>
            </footer>
        </div>
    );
};

export default Footer;