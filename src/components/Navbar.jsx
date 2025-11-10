import React, { useContext } from 'react';
import { GiCarWheel } from "react-icons/gi";
import { Link, NavLink } from 'react-router';
import { Context } from '../auth/AuthContext';


const Navbar = () => {
    const { user, loading, logOut } = useContext(Context)
    // console.log(user)
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
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
        </div>
    );
};

export default Navbar;