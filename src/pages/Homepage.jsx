import React, { useState, useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import CarouselCards from '../components/CarouselCards'
import today from '../assets/today.png'


const Homepage = ({charDb, usersDb}) => {
  const [isResponsive, setIsResponsive] = useState(false);
  const parallaxRef = useRef(null);
  // console.log(charDb)

  useEffect(() => {
    // Hide scrollbar on mount
    document.body.style.overflow = 'hidden';

    return () => {
      // Re-enable scrollbar on unmount
      document.body.style.overflow = 'auto';
    };
  }, []);


  return (
    <div className="relative w-full h-screen overflow-hidden">
          <div class="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${today})` }}>
</div>
      <Parallax className="absolute inset-0" ref={parallaxRef} pages={4.3}>
  
        <ParallaxLayer offset={0} speed={0.5} className="flex justify-center items-center h-full w-screen">
        <CarouselCards charDb={charDb}/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} className="flex justify-center items-center h-full w-screen">
          
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} className="flex justify-center items-center h-full w-screen">
          {/* Content for page 3 */}
          <div className="text-black text-4xl">Page 3</div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.5} className="flex justify-center items-center h-full w-screen">
          {/* Content for page 4 */}
          <div className="text-black text-4xl">Page 4</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );

};

export default Homepage;

{/* <Parallax className='parallax_container' ref={parallaxRef} pages={4.3}
style={{
  width: '100%',
  height: '100%',
  display: "flex",
  alignItems: 'center',
  flexDirection: "column",
  // backgroundImage: `url(${erase})`,
  opacity: 0.7,
  // backgroundSize: "100vw 90vh",
  backgroundRepeat: "no-repeat",
  backgroundPosition: 'center',  // Adds a white semi-transparent overlay
  mixBlendMode: 'multiply'
}}>
{/* Navigation - conditionally rendered based on screen size */}

{/* Content Layers */ }
{/* <ParallaxLayer offset={0} speed={0.5}>
</ParallaxLayer>
<ParallaxLayer offset={1} speed={0.5}>
  <Cardflip/>
</ParallaxLayer>
<ParallaxLayer offset={2} speed={0.5}>
  <div>Your content for page 3</div>
</ParallaxLayer>
<ParallaxLayer offset={3} speed={0.5}>
  <div>Your content for page 4</div>
</ParallaxLayer>
// </Parallax> */}