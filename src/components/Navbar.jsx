import React, { useContext, useEffect, useRef, useState } from 'react';
import { GiCarWheel } from "react-icons/gi";
import { Link, NavLink, useLocation } from 'react-router';
import { Context } from '../auth/AuthContext';
import { Links } from 'react-router';


const Navbar = () => {
    const { user, loading, logOut, allData } = useContext(Context);
    const [data, setData] = useState(allData)
    const [query, setQuery] = useState(null)
    useEffect(() => {
        if (!query) {
            setData(allData)
        } else {
            setData(prev => prev.filter(el => el.carName.trim().toLowerCase().includes(query.trim().toLowerCase())))

        }

    }, [query, allData])
    const search_modal = useRef(null)
    const location = useLocation();
    if(location.pathname !== '/'){
        search_modal.current.close();
    }
    const handleSearchClick = () => {
        search_modal.current.showModal();
    }
    const handleInput = (e) => {
        setQuery(e.target.value);
     
    }

    const handleLogOut = () => {
        logOut().then(() => console.log('Logged Out')).catch(err => console.log(err))
    }
    return (
        <div>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/cars'}>Browse Cars</NavLink>
                            <NavLink to={'/addcar'}>Add Car</NavLink>
                            <NavLink to={'/listing'}>My Listing</NavLink>
                            <NavLink to={'/bookings'}>My Bookings</NavLink>


                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><span className='text-primary'>Rent</span> Wh<span className='flex color-accent'><GiCarWheel /><GiCarWheel /></span>L</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/cars'}>Browse Cars</NavLink>
                        <NavLink to={'/addcar'}>Add Car</NavLink>
                        <NavLink to={'/listing'}>My Listing</NavLink>
                        <NavLink to={'/bookings'}>My Bookings</NavLink>

                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    {
                        location.pathname == '/' &&
                        <button className="btn btn-ghost btn-circle" onClick={handleSearchClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                        </button>
                    }
                    {
                        !loading ? user ? <> {/* --start of profile-Icon */}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow z-50">
                                    <li>
                                        <a className="justify-between">
                                            {user.displayName}
                                        </a>
                                        <a className="justify-between">
                                            {user.email}
                                        </a>
                                    </li>
                                    <li onClick={handleLogOut}><a>Logout</a></li>
                                </ul>
                            </div>
                            {/* ---End Of Profile Icon */}
                        </>
                            : <Link className="btn btn-primary cursor-pointer" to={'/login'}>Login</Link>
                            : <span className="loading loading-spinner text-accent"></span>

                    }

                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" ref={search_modal} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal_input_search">
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" className='w-full' required placeholder="Enter Car Name or Model.." onChange={handleInput} />

                        </label>
                    </div>
                    <div className="search-items mt-5">
                        { 
                       
                          
                           query ? data.length ? data.map(element => {return(
                           <Link to={`/car/${element._id}`} className="flex justify-between items-center card-search mt-3 hover:bg-gray-100 p-2 rounded-md h-fit w-full" key={element._id}>
                            <div className="text-content">
                           <p className=' text-start mx-2 text-xl text-primary hover:text-seondary'>{element.carName}</p>
                           <p className="text-gray-600 font-semibold ml-2">${element.rent}</p>
                           <span className={`h-fit w-fit px-2 py-1 rounded-md ${element.isBooked ? 'bg-orange-100 text-orange-900' : 'bg-green-100 text-green-900'}`}>{element.isBooked ? 'Booked' : 'Available'}</span>
                           </div>
                           <div className="img w-1/4"><img src={element.photo} className='w-full h-fit aspect-4/3 rounded-md' alt="" /></div>
                           </Link>
                          
                        )
                        })
                        :<p className="text-gray-500 text-center">No Car Matched</p>
                         : <p className="text-gray-500 text-center">Nothing Here</p>

                    
                        }
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Navbar;