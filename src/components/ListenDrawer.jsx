import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';

import erase from '../assets/erase.jpg'
import { Podcast } from 'lucide-react'

const ListenDrawer = ({isOpen, onClose}) => {

// const [ backgroundImage, setBackgroundImage] = useState(null);

// useEffect(()=>{

// useClient.fetchImage().then(image =>{
//   setBackgroundImage(image)
// })
// }, [])


  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
    <DrawerTrigger>
      <Button variant="outline" className="w-32 h-10 listen-button">
        <Podcast className='mr-2 h-4 w-4'/> Listen
     
      </Button>
    </DrawerTrigger>
    <DrawerContent style={{ backgroundImage: `url(${erase})`, backgroundSize: 'cover' }}>
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle className=" text-custom-red">Listen Now</DrawerTitle>
          <DrawerDescription className="text-white">Check out this week's episode</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          {/* Your Spotify player component here */}
          <div className="mt-3 h-[120px]">
            {/* Replace this with your Spotify player */}
            <iframe
              src="https://open.spotify.com/show/2X5iStxyfiMpMRPOauW6EU"
              width="100%"
              height="100%"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
  );
};

export default ListenDrawer;
