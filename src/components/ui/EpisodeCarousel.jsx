import React, { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ListenDrawer from '../ListenDrawer';

const EpisodeCarousel = ({ spotify }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedEpisode, setSelectedEpisode] = useState(null);


    const openDrawer = (episode) => {
        setSelectedEpisode(episode);
        setDrawerOpen(true);
        console.log(episode)
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
        setSelectedEpisode(null);
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        centerMode: true,
        centerPadding: '100px',
        className: 'center',
        swipeToSlide: true,
        touchThreshold: 10,
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
        <>
            <div
                className="char_carousel_container justify-center items-center w-full h-auto py-10"
                style={{
                    // backgroundImage: `url(${erase})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '20px'
                }}
            >
                <Slider {...settings}>
                    {spotify.slice(0, 6).map((episode, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-2">{episode.name}</h3>
                            <p className="text-gray-600 mb-4">{episode.description.slice(0, 100)}...</p>
                            <button
                                onClick={() => openDrawer(episode)}
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                                Listen Now
                            </button>
                        </div>
                    ))}
                </Slider>
            </div>
            {selectedEpisode && (
                <ListenDrawer
                    isOpen={drawerOpen}
                    onClose={closeDrawer}
                    episode={selectedEpisode}
                />
            )}
        </>
    );
};

export default EpisodeCarousel;