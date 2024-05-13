import { NavLink } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import { Button } from "./ui/button";
import ListenDrawer from "./ListenDrawer";
import Logo from '../components/Logo'
import CritLogo from '../assets/CritLogo.png'

const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpenDrawer = () => {
      setIsDrawerOpen(true);
    };
  
    return (
        <nav className="bg-gray-800 w-full fixed top-0 z-10 left-0 flex flex-row justify-between items-center px-4">
    <div className="flex items-center">
    <div className='w-12 h-12'>
            <img src={CritLogo} alt='logo' className="w-full h-full object-contain" />
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

{/* <nav className="bg-gray-800 w-full fixed top-0 z-10 left-0 flex flex-col">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <Logo/>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            <NavLink to="/" exact activeClassName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Cast</NavLink>
                            <NavLink to="/team" activeClassName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Caldron</NavLink>
                            <NavLink to="/projects" activeClassName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Apothecary</NavLink>
                            <NavLink to="/calendar" activeClassName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</NavLink>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <ListenDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
                </div>
            </div>
        </div>
    </nav> */}