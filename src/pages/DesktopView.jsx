import React from 'react';
import { Link } from 'react-router-dom';
import CarouselCards from '../components/CarouselCards';
import CastCarousel from '@/components/CastCarousel';
import ACYMBG from '../assets/ACYMBG.png';
import EpisodeCarousel from '@/components/ui/EpisodeCarousel';
import Footer from '@/components/Footer';
import AboutContainer from '@/components/AboutContainer';

const DesktopView = ({ charDb, usersDB, spotify, episodeDB }) => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${ACYMBG})` }}>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12">
          <h1 className="text-purple-600 text-4xl font-bold text-center mb-4">Welcome to Caldron</h1>
          <p className=" text-purple-600 text-xl text-center"> </p>
        </header>
         <AboutContainer></AboutContainer>

        <section className="mb-20 py-16">
          <div className='container'>
            <div className=''>
              <div className="py-6 px-4 sm:px-8">
                <h2 className=" text-purple-600 text-3xl font-bold mb-4 text-center">Featured Characters</h2>
                <div className="w-full max-w-7xl bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-5 shadow-inner">
                  <CastCarousel charDb={charDb} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 py-16 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 rounded-3xl shadow-2xl">
          <div className="container mx-auto px-4">
            <h2 className="text-purple-300 text-4xl font-bold mb-8 text-center">Latest Episodes</h2>
            <div className="bg-purple-950 bg-opacity-50 rounded-2xl p-8 shadow-inner">
              <EpisodeCarousel spotify={spotify} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
           SHOW TEXT HERE
          </p>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default DesktopView;