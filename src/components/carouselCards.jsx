import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cardflip from "./CardFlip";
import erase from '../assets/erase.jpg'
import './CarouselCards.css'

const CarouselCards = ({charDb}) => {
     console.log(charDb)

     const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        centerMode: true,
        centerPadding: '100px',
        className: 'center',
        swipeToSlide: true, // Enable swipe to slide
        touchThreshold: 10, // Make swiping easier on touch devices
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div 
         className="char_carousel_container justify-center items-center w-full h-auto py-10"
         style={{ 
            backgroundImage: `url(${erase})`,
             backgroundSize: 'cover', 
             backgroundPosition: 'center', 
             padding: '20px' }}
        >
        <Slider {...settings}>
        {charDb.map((charObj, index) => (
            <div key={index} className="px-3">
            <Cardflip charObj={charObj} />
        </div>
        ))}
    </Slider>
        </div>

    );
};

export default CarouselCards;