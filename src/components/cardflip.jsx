import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import erase from "../assets/erase.jpg"

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
        <div className='flip_card w-[600px] h-[360] rounded-md' onClick={handleFlip}>
            <motion.div
                className='flip_card_inner w-[100%] h-[100%]'
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 350 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <div className='flip_card_front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
                    style={{ backgroundImage: `${erase}` }}
                >
                    <h1 className='text-2xl font-bold'> THING</h1>
                    <p>STuff</p>
                </div>
                <div className='flip_card_back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
                    style={{ backgroundImage: `${erase}` }}
                >
                    <h1 className='text-2xl font-bold'> other THING</h1>
                    <p>other STuff</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Cardflip;