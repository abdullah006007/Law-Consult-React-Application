import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const MainLayout = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className='min-h-[calc(100vh-117px)] max-w-7xl mx-auto'>
                <div className='px-5 '>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;