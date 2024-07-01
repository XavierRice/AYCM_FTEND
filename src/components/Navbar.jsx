import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import ListenDrawer from "./ListenDrawer";
import Logo from '../components/Logo'
import CritLogo from '../assets/CritLogo.png'
import AYCMLogo from '../assets/AYCMLog1.png'



const Navbar = ({ spotify }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isSpotifyLoaded, setIsSpotifyLoaded] = useState(false)

    useEffect(() => {
        if (spotify) {
            setIsSpotifyLoaded(true)
        }

    }, [spotify])


    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
    };
    //style={{ padding: 0, border: 'none' }} img styling
    return (
        <nav className="navbar-container bg-gray-800 w-full fixed top-0 z-10 left-0 flex justify-between items-center px-4 py-2">
            <div className="flex items-center">
                <div className='w-20 h-10 sm:w-24 sm:h-12 md:w-32 md:h-16 lg:w-40 lg:h-20 xl:w-48 xl:h-24' style={{ marginTop: '-10px' }} >
                    <Link to="/">
                    <img src={AYCMLogo} alt='AYCM logo' className="w-full h-full object-contain"
                    />
                    </Link>
                </div>
            </div>
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                    <NavLink to="/caldron"
                        exact
                        activeClassName="bg-gray-900 text-white "
                        className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-bold text-base md:text-honk">
                        Caldron
                    </NavLink>
                    <NavLink to="/cast"
                        exact activeClassName="bg-gray-900 text-white "
                        className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">
                        Cast
                    </NavLink>
                    <NavLink to="/Apothecary"
                        exact activeClassName="bg-gray-900 text-white "
                        className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        Apothecary
                    </NavLink>
                    <NavLink to="/events"
                        exact activeClassName="bg-gray-900 text-white "
                        className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        Events</NavLink>
                </div>
            </div>
            <div className="flex items-center">
                {/* {isSpotifyLoaded && (
                    <ListenDrawer
                        isOpen={isDrawerOpen}
                        onClose={() => setIsDrawerOpen(false)}
                        spotify={spotify}
                    />
                )} */}
            </div>
        </nav>
    );
};

export default Navbar;

