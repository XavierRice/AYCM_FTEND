import React, { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import CarouselCards from '../components/CarouselCards';
import ACYMBG from '../assets/ACYMBG.png';
import hero1 from '../assets/hero1.png';
import heroPhoto from '../assets/Main1.png' 

const Homepage = ({ charDb, usersDb, spotify, episodeDB }) => {
  const [isResponsive, setIsResponsive] = useState(false);
  const parallaxRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleResize = () => {
      setIsResponsive(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${ACYMBG})` }}></div>
      <Parallax className="absolute inset-0" ref={parallaxRef} pages={isResponsive ? 5 : 4}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={0.3}
          style={{
            backgroundImage: `url(${hero1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <ParallaxLayer
          offset={0.3}
          speed={0.5}
          factor={0.7}
          className="flex items-center"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center bg-gray-800 bg-opacity-80 rounded-lg overflow-hidden">
              <div className="w-full md:w-1/2 p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Website Title</h1>
                <p className="text-xl text-white mb-8">A brief description of your website or tagline</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Call to Action
                </button>
              </div>
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img src={heroPhoto} alt="Hero" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={isResponsive ? 1 : 1} 
          speed={0.5} 
          factor={isResponsive ? 1 : 0.5}
          className="flex justify-center items-center"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Characters</h2>
            <CarouselCards charDb={charDb} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={isResponsive ? 2 : 1} 
          speed={0.5} 
          factor={1}
          className="flex justify-center items-center"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Page 2 Content</h2>
            {/* Add your content for page 2 here */}
          </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={isResponsive ? 3 : 2} 
          speed={0.5} 
          factor={1}
          className="flex justify-center items-center"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Page 3 Content</h2>
            {/* Add your content for page 3 here */}
          </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={isResponsive ? 4 : 3} 
          speed={0.5} 
          factor={1}
          className="flex justify-center items-center"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Page 4 Content</h2>
            {/* Add your content for page 4 here */}
          </div>
        </ParallaxLayer>


      </Parallax>
        
     </div>
    </>
  );
};

export default Homepage;