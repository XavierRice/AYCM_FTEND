import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import CarouselCards from '../components/CarouselCards';
import ACYMBG from '../assets/ACYMBG.png';
import hero1 from '../assets/hero1.png';
import heroPhoto from '../assets/Main1.png';

const MobileView = ({ charDb, usersDB, spotify, episodeDB }) => {
  const parallaxRef = useRef(null);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${ACYMBG})` }}></div>
      <Parallax className="absolute inset-0" ref={parallaxRef} pages={5}>
        {/* Your existing ParallaxLayers here */}
        {/* ... */}
      </Parallax>
    </div>
  );
};

export default MobileView;