import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const MainLayouts = () => {
    return (
        <div className='md:max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayouts;