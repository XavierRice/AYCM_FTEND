import React, { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import CritLogo from '../assets/CritLogo.png'


// import './Homepage.css'

const Homepage = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 991);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state based on current window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center parallax-container">
      <Parallax ref={parallaxRef} pages={4}
        style={{
          width: '100vw',
          height: '100vh',
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${CritLogo})`,
          opacity: 0.7,
          backgroundRepeat: "no-repeat",
          backgroundPosition: 'center',  // Adds a white semi-transparent overlay
          mixBlendMode: 'multiply'
        }}>
        {/* Navigation - conditionally rendered based on screen size */}
        <ParallaxLayer factor={1} style={{ zIndex: 50 }}>

        </ParallaxLayer>

        {/* Content Layers */}
        <ParallaxLayer offset={0} speed={0.5}>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <div>Your content for page 2</div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}>
          <div>Your content for page 3</div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5}>
          <div>Your content for page 4</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );

};

export default Homepage;