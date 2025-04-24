import React from 'react';
import { Link, NavLink } from 'react-router';
import img from '../assets/logo-footer.png'
import fb from '../assets/fb.png'
import y from '../assets/y.png'
import insta from '../assets/insta.png'


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded p-10">
                <div className='flex justify-center'>
                    <div className='flex items-center gap-2'>
                        <img src={img} alt="" />
                        <p className='text-3xl font-semibold text-white'>Law.BD</p>

                    </div>

                </div>
                <nav className="grid grid-flow-col gap-4">

                    <NavLink className={({ isActive }) => isActive ? 'underline text-white' : 'text-white'} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'underline text-white' : 'text-white'} to="/my-booking">My-Bookings</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'underline text-white' : 'text-white'} to="/blogs">Blogs</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'underline text-white' : 'text-white'} to="/contact-us">Contact Us</NavLink>
                   

                </nav>

                <div className='flex justify-center gap-2.5'>
                    <Link to="https://www.facebook.com/abdullahbinashraf77/"><img src={fb} alt="" /></Link>
                    <Link to="https://www.youtube.com/@Enraken12"><img src={y} alt="" /></Link>
                    <Link to="https://www.instagram.com/iam_abudllahh/"><img src={insta} alt="" /></Link>
                </div>


                
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;