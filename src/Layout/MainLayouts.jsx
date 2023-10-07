import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../Footer/Footer';

const MainLayouts = () => {
    return (
        <div>

            <div className='md:max-w-7xl mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayouts;