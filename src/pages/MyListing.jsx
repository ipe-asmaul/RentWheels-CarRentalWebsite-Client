import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../auth/AuthContext';
import LoadingAnimation from '../components/LoadingAnimation';

const MyListing = () => {
    const {user} = useContext(Context);
    const [data, setData] = useState(null)
    const [isDataLoaded, setIsDataLoaded] = useState(true)
    useEffect(()=>{
        setIsDataLoaded(true)
         fetch(`http://localhost:3000/listings?email=${user?.email}`)
         .then(result => result.json())
         .then(info => {setData(info); setIsDataLoaded(false)})
         .catch(err => console.log(err))
    },[user])
    console.log(data)
    return (
        <div className='bg-linear-to-bl from-accent to-white h-full'>
            { 
            !isDataLoaded ?
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
                               
                                {
                                    data.map((item,index) => {
                                        return (
                                        
                                    <tr key={item?._id}>
                                    <th>{Number(index) + 1}</th>
                                    <td>{item.carName}</td>
                                    <td>{item.description}</td>
                                    <td>${item.rent}</td>
                                    <td><span className={ item.isBooked ? 'text-orange-900 bg-orange-200 w-fit h-fit p-2 rounded-xl' : 'text-green-900 bg-green-200 w-fit h-fit p-2 rounded-xl'}>{item.isBooked ? 'Booked': 'Available'}</span></td>
                                    <td className='flex gap-3'>
                                        <button className="btn-primary btn">Update</button>
                                        <button className="btn bg-red-700 text-white">Delete</button>
                                    </td>

                                </tr>)
                                        
                                    })
                                }
                               

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            :
            <LoadingAnimation/>

                            }
        </div>
    );
};

export default MyListing;