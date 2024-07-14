
import React, { useState } from "react";
import Cardflip from "./CardFlip";
import erase from '../assets/erase.jpg';
import './CarouselCards.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';



const CastCarousel = ({ charDb }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 2 >= charDb.length ? 0 : prevIndex + 2
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 2 < 0 ? charDb.length - 2 : prevIndex - 2
        );
    };

    return (
        <div className="char_carousel_container w-full py-6 sm:py-10 relative"
            style={{
                backgroundImage: `url(${erase})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '10px'
            }}
        >
            <div className="hidden sm:flex justify-between items-center absolute top-1/2 left-0 right-0 z-10">
                <button onClick={prevSlide} className="bg-white rounded-full p-2 shadow-lg ml-4">
                    <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
                </button>
                <button onClick={nextSlide} className="bg-white rounded-full p-2 shadow-lg mr-2">
                    <ChevronRightIcon className="h-6 w-6 text-gray-600" />
                </button>
            </div>
            <div className="card-container flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-6 sm:gap-8 overflow-hidden">
                {charDb.map((charObj, index) => (
                    <div key={index}
                        className={`w-full sm:w-[calc(50%-2rem)] max-w-[300px] transition-all duration-300 ease-in-out
                                     ${index >= currentIndex && index < currentIndex + 2 ? 'sm:block' : 'sm:hidden'}`}>
                        <Cardflip charObj={charObj} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CastCarousel;

// <div className="char_carousel_container w-full py-6 sm:py-10"
//     style={{
//         backgroundImage: `url(${erase})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         padding: '20px'
//     }}
// >
//     <div className="card-container flex flex-wrap justify-center gap-4 sm:gap-6">
//         {charDb.map((charObj, index) => (
//             <Cardflip key={index} charObj={charObj} />
//         ))}
//     </div>
// </div>