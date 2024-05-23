import React, { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import CarouselCards from '../components/CarouselCards'
import ACYMBG from '../assets/ACYMBG.png'
import hero1 from '../assets/hero1.png'

const Homepage = ({ charDb, usersDb }) => {
  const [isResponsive, setIsResponsive] = useState(false);
  const parallaxRef = useRef(null);
  // console.log(charDb)

  useEffect(() => {
    
    document.body.style.overflow = 'hidden';

    return () => {
    
      document.body.style.overflow = 'auto';
    };
  }, []);


  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${ACYMBG})` }}></div>
      <Parallax className="absolute inset-0" ref={parallaxRef} pages={4.3}>
        <ParallaxLayer offset={0} speed={0.5} className="flex justify-center items-center h-full w-screen">
        <div className="absolute inset-0 flex justify-center items-center h-full w-screen">
          <img className="border border-black" src={hero1} alt="Hero Image" />
        </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} className="flex justify-center items-center h-full w-screen">
          <CarouselCards charDb={charDb} />

        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} className="flex justify-center items-center h-full w-screen">
          {/* Content for page 3 */}
          <div className="text-white text-4xl">Page 3</div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5} className="flex justify-center items-center h-full w-screen">
          {/* Content for page 4 */}
          <div className="text-white text-4xl">Page 4</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );

};

export default Homepage;

