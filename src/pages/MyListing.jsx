import React, { useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../auth/AuthContext';
import LoadingAnimation from '../components/LoadingAnimation';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import LoadingDaisySpinner from '../components/LoadingDaisySpinner';

const MyListing = () => {
    const { user } = useContext(Context);
    const [data, setData] = useState(null);
    const [singleData, setSingleData] = useState(null)
    const [updateId, setUpdateId] = useState(null);
    const [isDataLoaded, setIsDataLoaded] = useState(true)
    const [modalLoading, setModalLoading] = useState(true)
    useEffect(() => {
        setIsDataLoaded(true)
        fetch(`https://rent-wheel-server.vercel.app/listings?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(result => result.json())
            .then(info => { setData(info); setIsDataLoaded(false) })
            .catch(err => toast.error(err.message));

    }, [user])
    useEffect(() => {
        updateId && fetch(`https://rent-wheel-server.vercel.app/car/${updateId}`)
            .then(result => result.json())
            .then(info => { setSingleData(info); setModalLoading(false) })
            .catch(err => toast.error(err.message))
            .finally(() => setModalLoading(false))
    }, [updateId])
    // console.log(data)
    const modal_update = useRef(null)
    const handleUpdateCar = (id) => {
        setModalLoading(true)
        modal_update.current.showModal();
        setUpdateId(id)



    }

    const handleUpdate = (e) => {
        setModalLoading(true)
        e.preventDefault();
        const id = updateId;
        const carName = e.target.name.value;
        const description = e.target.description.value;
        const rent = e.target.rent.value;
        const location = e.target.location.value;
        const photo = e.target.url.value;
        const category = e.target.category.value;
        const carObj = { id, carName, description, rent, location, photo, category }

        fetch(`https://rent-wheel-server.vercel.app/updatecar?email=${user?.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${user?.accessToken}`
            },
            body: JSON.stringify(carObj)
        })
            .then(result => result.json())
            .then(info => {
                if (info.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Updated",
                        text: "Successfully inserted data to database!",
                    });
                    modal_update.current.close()
                    // const newData = data.filter(item => item._id !== id)
                    setData(prev => prev.map(car => car._id == id ? { ...car, ...carObj } : car))
                    setSingleData({ ...singleData, ...carObj })
                    setUpdateId(null)
                }
            })
            .catch(err => toast.error(err.message))
            .finally(() => setModalLoading(false));


    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Do you want to delete this car?",
            showDenyButton: true,
            confirmButtonText: "Delete",

        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                setIsDataLoaded(true)
                fetch(`https://rent-wheel-server.vercel.app/deletecar?id=${id}&email=${user?.email}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${user?.accessToken}`
                    }
                })
                    .then(result => result.json())
                    .then(result => {
                        if (result.deletedCount) {
                            setData(prev => prev.filter(item => item._id !== id));
                            setIsDataLoaded(false)
                            Swal.fire("Deleted!", "", "success");
                        }

                    })
                    .catch(err => toast.err(err.message))
                    .finally(() => setIsDataLoaded(false))

            } else if (result.isDenied) {
                return;
            }
        });
    }
    return (
        <div className='bg-linear-to-bl from-accent to-white h-full'>
            <title>Added Cars - Rent Wheel</title>

            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" ref={modal_update} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {
                        !modalLoading ?
                            <>

                                <form className='p-10  space-y-2.5' onSubmit={handleUpdate}>
                                    <div className="name">

                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">Car Name</legend>
                                            <input type="name" className="input w-full" defaultValue={singleData?.carName} placeholder="Enter Car Name" name='name' />
                                        </fieldset>
                                    </div>
                                    <div className="description">
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">Car Description</legend>
                                            <textarea className="textarea h-24" defaultValue={singleData.description} placeholder="Description" name='description'></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="category">
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">Category</legend>
                                            <select defaultValue={singleData.category} className="select" name='category'>
                                                <option disabled={true}>Pick a Car Model</option>
                                                <option>Sedan</option>
                                                <option>SUV</option>
                                                <option>Hatchback</option>
                                                <option>Luxury</option>
                                                <option>Electric</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="ext">
                                        <div className="rent-per-day">
                                            <fieldset className="fieldset">
                                                <legend className="fieldset-legend">Rent (per day)</legend>
                                                <input type="number" className="input" defaultValue={singleData.rent} placeholder="Rent" name='rent' />
                                            </fieldset>
                                        </div>
                                        <div className="location">
                                            <fieldset className="fieldset">
                                                <legend className="fieldset-legend">Location</legend>
                                                <input type="text" className="input" defaultValue={singleData.location} placeholder="Add Your Location" name='location' />
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <label className="input validator">
                                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <g
                                                    strokeLinejoin="round"
                                                    strokeLinecap="round"
                                                    strokeWidth="2.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                                </g>
                                            </svg>
                                            <input
                                                type="url"
                                                required
                                                placeholder="Enter Image Url"
                                                name='url'
                                                defaultValue={singleData.photo}

                                            />
                                        </label>
                                        <p className="validator-hint">Must be valid URL</p>

                                    </div>
                                    <div className="user-info space-y-1.5">
                                        <p className='text-sm'>Personal Info</p>

                                        <div className="email">
                                            <label className="input validator">
                                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <g
                                                        strokeLinejoin="round"
                                                        strokeLinecap="round"
                                                        strokeWidth="2.5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                    >
                                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                                    </g>
                                                </svg>
                                                <input type="email" defaultValue={user?.email} required readOnly />
                                            </label>
                                        </div>
                                        <div className="name">
                                            <label className="input validator">
                                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <g
                                                        strokeLinejoin="round"
                                                        strokeLinecap="round"
                                                        strokeWidth="2.5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                    >
                                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </g>
                                                </svg>
                                                <input
                                                    type="text"
                                                    defaultValue={user?.displayName}
                                                    readOnly
                                                />
                                            </label>


                                        </div>
                                    </div>
                                    <input type="submit" value="Update" className='btn btn-secondary' />
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn" onClick={() => { setModalLoading(false); setUpdateId(null) }}>Close</button>
                                    </form>




                                </div>
                            </>
                            :
                            <LoadingAnimation />
                    }
                </div>

            </dialog>


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
                                            data.length ? data.map((item, index) => {
                                                return (

                                                    <tr key={item?._id}>
                                                        <th>{Number(index) + 1}</th>
                                                        <td>{item.carName}</td>
                                                        <td>{item.category}</td>
                                                        <td>${item.rent}</td>
                                                        <td><span className={item.isBooked ? 'text-orange-900 bg-orange-200 w-fit h-fit p-2 rounded-xl' : 'text-green-900 bg-green-200 w-fit h-fit p-2 rounded-xl'}>{item.isBooked ? 'Booked' : 'Available'}</span></td>
                                                        <td className='flex gap-3'>
                                                            <button className="btn-primary btn" onClick={() => handleUpdateCar(item?._id)}>Update</button>
                                                            <button className="btn bg-red-700 text-white" onClick={() => handleDelete(item?._id)}>Delete</button>
                                                        </td>

                                                    </tr>)

                                            })
                                                : <tr className='text-gray-600 text-xl m-10'><td>You haven't added any car</td></tr>
                                        }


                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    :
                    <LoadingDaisySpinner />

            }
        </div>
    );
};

export default MyListing;