import React from 'react';
import { GiCarWheel } from "react-icons/gi";

const Footer = () => {
    return (
        <div>
            <footer className="footer container mx-auto sm:footer-horizontal bg-secondary text-white p-10">
                <aside>
                    <p className='flex text-2xl'> <span className='text-primary mr-2'>Rent</span> Wh<span className='flex color-accent'><GiCarWheel/><GiCarWheel/></span>L </p>
                    <p>
                        Rent Wheel
                        <br />
                        Providing Trusted Car Rental Service
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;