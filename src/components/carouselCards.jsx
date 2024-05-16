import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cardflip from "./CardFlip";


const carouselCards = ({data}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <Slider {...settings}>
        {data.map((item, index) => (
            <Cardflip key={index} data={item} />
        ))}
    </Slider>

    );
};

export default carouselCards;