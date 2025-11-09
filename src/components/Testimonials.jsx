import React from 'react';
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    return (
        <div>
            <div className="testimoy-card md:w-9/10 shadow-xl p-5 rounded-xl relative backdrop-blur-3xl border-t-10 border-primary">
            <div className="badge-testimoy absolute top-0 right-0 h-8/10 w-50 bg-radial-[at_25%_75%] from-primary to-accent rounded-bl-full -z-10 opacity-80"></div>
                <div className="text-content">
                    <div className="reviewer-name"><h2 className="text-xl font-bold text-secondary">Jhon Doe</h2></div>
                    <div className="ratings flex gap-1 text-primary"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <div className="divider w-1/5"></div>
                    <p className="reviews text-gray-700 font-md text-justify ">
                        We had an amazing experience with Orange Car Rental! Everything went smoothly. They were waiting for us at the airport as soon as we arrived, the car was in great condition and the price was reasonable. The staff were very friendly and helpful. Would definitely recommend!
                    </p>
                </div>
            <div className="badge-testimoy absolute bottom-0 left-0 h-8/10 w-50 bg-radial-[at_25%_75%] from-primary to-accent rounded-tr-full -z-10 opacity-80"></div>


            </div>

        </div>
    );
};

export default Testimonials;