import React from 'react';

const MyListing = () => {
    return (
        <div className='bg-linear-to-bl from-accent to-white h-full'>
            <div className="my-listing pt-8">
                <h3 className="text-2xl font-bold text-primary text-center mb-10">My Added Cars</h3>
                <div className="table-content">
                    <div className="overflow-x-auto">
                        <table className="table table-xs">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Car Name</th>
                                    <th>Category</th>
                                    <th>Rent Price</th>
                                    <th>Status</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Toyota SUV</td>
                                    <td>A Nice Elegent Car for family</td>
                                    <td>$102.35</td>
                                    <td><span className='text-green-900 bg-green-200 w-fit h-fit p-2 rounded-xl'>Available</span></td>
                                    <td className='flex gap-3'>
                                        <button className="btn-primary btn">Update</button>
                                        <button className="btn bg-red-700 text-white">Delete</button>
                                    </td>

                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Toyota Offroad</td>
                                    <td>A Nice Elegent Car for family</td>
                                    <td>$112.35</td>
                                    <td><span className='text-orange-900 bg-orange-200 w-fit h-fit p-2 rounded-xl'>Booked</span></td>
                                    <td className='flex gap-3'>
                                        <button className="btn-primary btn">Update</button>
                                        <button className="btn bg-red-700 text-white">Delete</button>
                                    </td>

                                </tr>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyListing;