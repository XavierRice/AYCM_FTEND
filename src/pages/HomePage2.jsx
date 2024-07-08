import React, { useState, useEffect } from 'react';
import MobileView from './MobileView';
import DesktopView from './DesktopView';

const HomePage2 = ({ usersDB, charDb, spotify, episodeDB }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileView 
          usersDB={usersDB} 
          charDb={charDb} 
          spotify={spotify} 
          episodeDB={episodeDB}
        />
      ) : (
        <DesktopView 
          usersDB={usersDB} 
          charDb={charDb} 
          spotify={spotify} 
          episodeDB={episodeDB}
        />
      )}
    </>
  );
};

export default HomePage2;