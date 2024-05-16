import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import erase from "../assets/erase.jpg";

const Cardflip = () => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }


    return (
        <div className='flex items-center justify-center bg-black h-[800px] w-full cursor-pointer'>
            <div
                className='flip_card w-[600px] h-[360px] rounded-md'
                onClick={handleFlip}>
                <motion.div
                    className='flip_card_inner w-[100%] h-[100%]'
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 360 }}
                    transition={{ duration: 0.6, animationDirection: "normal" }}
                    onAnimationComplete={() => setIsAnimating(false)}
                >
                    <div
                        className='flip_card_front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
                        style={{ backgroundImage: `${erase}` }}
                    >
                        <h1 className='text-2xl font-bold '> THING</h1>
                        <p className='text-white mt-2'>STuff</p>
                    </div>

                    <div
                        className='flip_card_back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
                        style={{ backgroundImage: `${erase}` }}
                    >
                        <h1 className='text-2xl font-bold '> other THING</h1>
                        <p>other STuff</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Cardflip;