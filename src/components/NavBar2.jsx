import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import ListenDrawer from '../components/ListenDrawer'
import AYCMLogo from '../assets/AYCMLog1.png'
import { Podcast } from 'lucide-react'

const Navbar2 = ({ latestEpisode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSpotifyLoaded, setIsSpotifyLoaded] = useState(false)

  useEffect(() => {
    if (latestEpisode) {
      setIsSpotifyLoaded(true)
    }
  }, [latestEpisode])

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <nav className="bg-gray-900 shadow-lg h-[60%]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" >
                <img src={AYCMLogo} alt='AYCM logo' className="object-contain size-10.4" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/episodes" className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-large">Episodes</Link>
                <Link to="/characters" className="text-honk ext-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-large">Crew</Link>
                <Link to="/apothecary" className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-large">Apothecary</Link>
                <Link to="/caldron" className="text-honk ext-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-large">Caldron</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-large font-medium">Login</Link>
            {isSpotifyLoaded && (
              <ListenDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                episode={latestEpisode}
              >
                <button onClick={handleOpenDrawer} className="flex items-center text-honk text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-large font-medium">
                  <Podcast className='mr-2 h-4 w-4'/> Listen
                </button>
              </ListenDrawer>
            )}
          </div>
          <div className="md:hidden flex items-center">
        
            {isSpotifyLoaded && (
              <ListenDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                episode={latestEpisode}
              >
                <button onClick={handleOpenDrawer} className="flex items-center text-honk text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-large font-medium mr-2">
                  <Podcast className='mr-2 h-4 w-4'/> Listen
                </button>
              </ListenDrawer>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to="/episodes" className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Episodes</Link>
              <Link to="/characters" className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Characters</Link>
              <Link to="/login" className="text-honk text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar2;