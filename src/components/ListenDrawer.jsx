import React from 'react';
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


const ListenDrawer = ({isOpen, onClose, episode}) => {
console.log(episode)

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
    <DrawerContent style={{ backgroundImage: `url(${erase})`, backgroundSize: 'cover' }}>
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle className=" text-custom-red">Listen Now</DrawerTitle>
          <DrawerDescription className="text-white">Check out this week's episode:{episode?.name}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
        {episode && (
              <>
                <h3 className="text-lg font-semibold text-white mb-2">{episode.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{episode.description}</p>
                <div className="mt-3 h-[80px]">
                  <iframe
                    src={`https://open.spotify.com/embed/episode/${episode.id}`}
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
