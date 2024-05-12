import React from 'react';
import Logo from './Logo.jsx';
import Navbar from './Navbar.jsx';

const Header = () => {
    return (
        <header className='header bg-dark-bckground sticky top-0 z-[20] mx-auto flex w-full items-center  justify-between border-b border-amber-400 p-8'>
            <Logo/>
            {/* <Navbar/> */}
        </header>
    );
};

export default Header;