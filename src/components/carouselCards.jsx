import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cardflip from "./CardFlip";
import erase from '../assets/erase.jpg'

const CarouselCards = ({charDb}) => {
     console.log(charDb)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
    };
    return (
        <div 
         className="char_carousel_container justify-center items-center w-full h-[]"
         style={{ 
            backgroundImage: `url(${erase})`,
             backgroundSize: 'cover', 
             backgroundPosition: 'center', 
             padding: '20px' }}
        >
        <Slider {...settings}>
        {charDb.map((charObj, index) => (
            <Cardflip key={index} charObj={charObj} />
        ))}
    </Slider>
        </div>

    );
};

export default CarouselCards;