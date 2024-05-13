import React, { useState } from 'react';
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

import { Podcast } from 'lucide-react'

const ListenDrawer = ({isOpen, onClose}) => {


  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
    <DrawerTrigger>
      <Button variant="outline" className="w-32 h-10 listen-button">
        <Podcast className='mr-2 h-4 w-4'/>Listen
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Listen Now</DrawerTitle>
          <DrawerDescription>Check out this week's episode</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          {/* Your Spotify player component here */}
          <div className="mt-3 h-[120px]">
            {/* Replace this with your Spotify player */}
            <iframe
              src="https://open.spotify.com/embed/track/7c69xKqCnQLXhTlCb9VUmb"
              width="100%"
              height="100%"
              frameBorder="0"
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
