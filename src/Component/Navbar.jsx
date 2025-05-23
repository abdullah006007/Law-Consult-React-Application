import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div>

            <div className="lg:navbar bg-base-100 max-w-7xl mx-auto  ">
                <div className="md:navbar-start flex items-center justify-between pt-5 px-5">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            <li><NavLink className={({ isActive }) => isActive ? 'text-purple-400' : ''} to="/">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-purple-400' : ''} to="/my-booking">My-Bookings</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-purple-400' : ''} to="/blogs">Blogs</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'text-purple-400' : ''} to="/contact-us">Contact Us</NavLink></li>

                        </ul>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <Link to="/" className=" font-bold text-xl">Law.BD</Link>
                        <img src={logo} alt="" />
                    </div>
                </div>



                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className={({ isActive }) => isActive ? 'text-purple-400' : ''} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-purple-400' : ''} to="/my-booking">My-Bookings</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-purple-400' : ''} to="/blogs">Blogs</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-purple-400' : ''} to="/contact-us">Contact Us</NavLink></li>

                    </ul>
                </div>




                <div className="navbar-end ">
                    <Link to="/contact-us" className="text-white hidden md:block bg-[#0EA106] py-1 px-3 rounded-4xl">Contact Now</Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;