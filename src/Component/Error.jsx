import React from 'react';
import img from "../assets/error.jpeg"
import Navbar from './Navbar';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <div className='py-10'>
                <Navbar></Navbar>
                <img className='mx-auto' src={img} alt="" />

                <div className='text-center'>
                <h1 className='text-4xl font-semibold text-red-400'> 404 - Page Not Found </h1>
                <h1 className='pb-7 pt-2'> Oops! The page you are looking for doesn't exist. </h1>
                <Link to="/"><button className='btn bg-[#0EA106] text-white px-3 '>Go Back Home</button></Link>
                </div>

            </div>

            
        </div>
    );
};

export default Error;