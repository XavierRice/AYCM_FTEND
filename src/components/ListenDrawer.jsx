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

const ListenDrawer = ({isOpen, onClose, spotify}) => {

  const latestEpisode = spotify && spotify.length > 0 ? spotify[0] : null;


// console.log(spotify)

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
          <DrawerDescription className="text-white">Check out this week's episode:{latestEpisode.name}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
        {latestEpisode && (
              <>
                <h3 className="text-lg font-semibold text-white mb-2">{latestEpisode.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{latestEpisode.description}</p>
                <div className="mt-3 h-[80px]">
                  <iframe
                    src={`https://open.spotify.com/embed/episode/${latestEpisode.id}`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </>
            )}
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
