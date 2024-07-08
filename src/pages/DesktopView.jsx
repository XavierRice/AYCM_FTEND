import React from 'react';
import { Link } from 'react-router-dom';
import CarouselCards from '../components/CarouselCards';
import ACYMBG from '../assets/ACYMBG.png';
import EpisodeCarousel from '@/components/ui/EpisodeCarousel';

const DesktopView = ({ charDb, usersDB, spotify, episodeDB }) => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${ACYMBG})` }}>
    <div className="container mx-auto px-4 py-8">
      
      <header className="mb-12">
        <h1 className="text-purple-600 text-4xl font-bold text-center mb-4">Welcome to Caldron</h1>
        <p className=" text-purple-600 text-xl text-center"> </p>
      </header>

      <section className="mb-12">
        <h2 className=" text-purple-600 text-3xl font-bold mb-4">Featured Characters</h2>
        <CarouselCards charDb={charDb} />
      </section>

      <section className="mb-12">
        <h2 className=" text-purple-600 text-3xl font-bold mb-4">Latest Episodes</h2>
        <div className="">
          <EpisodeCarousel spotify={spotify}/>

        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg">
          We're passionate about bringing you the best podcast content. Our app features a wide range of topics and amazing characters that will keep you entertained and informed.
        </p>
      </section>
    </div>
    </div>
  );
};

export default DesktopView;