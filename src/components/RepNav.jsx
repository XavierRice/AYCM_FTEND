import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



const RepNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 w-full fixed top-0 z-10 left-0 flex flex-row justify-between items-center px-4">
            <div className="flex items-center justify-between w-full">
                <div className='w-42 h-16 mt-[-135px]'>
                    <img src={AYCMLogo} alt='logo' className="w-full h-52 object-contain p-0 border-none" />
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"} />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                <div className="text-sm lg:flex-grow">
                    <NavLink to="/" exact activeClassName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium">
                        Cast
                    </NavLink>
                    <NavLink to="/caldron" exact activeClassName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium">
                        Caldron
                    </NavLink>
                    <NavLink to="/apothecary" exact activeClassName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium">
                        Apothecary
                    </NavLink>
                    <NavLink to="/events" exact activeClassName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium">
                        Events
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default RepNav;