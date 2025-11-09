import React from 'react';

const MyBookings = () => {
    return (
        <div className='bg-linear-to-bl from-orange-100 to-white h-full'>
            <div className="my-listing pt-8">
                <h3 className="text-2xl font-bold text-primary text-center mb-10">My Bookings</h3>
                <div className="table-content">
                    <div className="overflow-x-auto">
                        <table className="table">
                           
                            <thead>
                                <tr>
                                    <th>Serial No.</th>
                                    <th>Car Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <th>1</th>
                                    <td>Toyota SUV</td>
                                    <td>Quality Control Specialist</td>
                                    <td>$103.45</td>
                                </tr>
                               
                                <tr className="hover:bg-base-100">
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>
                                
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;