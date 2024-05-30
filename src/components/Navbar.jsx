import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import ListenDrawer from "./ListenDrawer";
import Logo from '../components/Logo'
import CritLogo from '../assets/CritLogo.png'
import AYCMLogo from '../assets/AYCMLog1.png'


const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
    };

    return (
        <nav className="bg-gray-800 w-full fixed top-0 z-10 left-0 flex flex-row justify-between items-center px-4">
            <div className="flex items-center">
                <div className='w-42 h-16'style={{ marginTop: '-135px' }} >
                    <img src={AYCMLogo} alt='logo' className="w-full h-52 object-contain" style={{ padding: 0, border: 'none' }}/>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex space-x-4">
                    <NavLink to="/" exact activeClassName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-large font-medium">Cast</NavLink>
                    <NavLink to="/" exact activeClassName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-large font-medium">Caldron</NavLink><NavLink to="/" exact activeClassName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-large font-medium">Apothecary</NavLink>
                    <NavLink to="/" exact activeClassName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-large font-medium">Events</NavLink>
                </div>
            </div>
            <div className="flex items-center">
                <ListenDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            </div>
        </nav>
    );
};

export default Navbar;

