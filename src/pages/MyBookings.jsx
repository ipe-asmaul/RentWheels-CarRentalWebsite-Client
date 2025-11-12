import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../auth/AuthContext';
import LoadingAnimation from '../components/LoadingAnimation';
import { toast } from 'react-toastify';
import LoaderSpinner from '../components/LoaderSpinner';

const MyBookings = () => {
    const { user,loading } = useContext(Context);
    const [data, setData] = useState([]);
    const [bookingLoading, setBookingLoading] = useState(false)
    useEffect(() => {
        
        setBookingLoading(true)
        fetch(`https://rent-wheel-server.vercel.app/mybookedcars?email=${user.email}`,{
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(result => result.json())
            .then(info => {
                setData(info)
                setBookingLoading(false)
            })
            .catch(err => toast.error(err.message))
    }, [user])
    return (
        <div className='bg-linear-to-bl from-orange-100 to-white h-full'>
                        <title>Car Bookings - Rent Wheel</title>

            {
                loading ? <LoadingAnimation/>
                : 
                bookingLoading ? 
                
                    <LoaderSpinner/>
                
                :
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
                                {
                                    data.map((item,index) => {
                                        return (
                                            <tr className="hover:bg-base-100" key={item._id}>
                                                <th>{(index + 1)}</th>
                                                <td>{item.carName}</td>
                                                <td>{item.description}</td>
                                                <td>${item.rent}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
}
        </div>
    );
};

export default MyBookings;