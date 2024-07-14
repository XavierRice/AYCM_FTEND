import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CardFlip.css'

const Cardflip = ({charObj}) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
    return (
        <div className='flip_card w-full sm:w-96 h-128 perspective-1000' onClick={handleFlip}>
            <motion.div
                className='flip_card_inner'
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <div className='flip_card_front absolute w-full h-full bg-white border text-black rounded-lg backface-hidden overflow-hidden'>
                    <div className=' card_content w-full h-full flex'>
                        <div className='card_image absolute inset-0  bg-cover bg-center' style={{ backgroundImage: `url(${charObj.character_img})` }}></div>
                        <div className='card_details w-1/2 h-full p-4 flex flex-col justify-center'>
                            <h1 className='text-2xl font-bold'>{charObj.cast_name}</h1>
                            <p className='text-black mt-2'>{charObj.class}</p>
                            {/* Add more character details here */}
                        </div>
                    </div>
                </div>

                <div className='flip_card_back absolute w-full h-full bg-white border text-black rounded-lg backface-hidden overflow-hidden transform rotate-y-180'>
                    <div className='card_content w-full h-full relative'>
                        <div className='card_image absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${charObj.cast_img})` }}></div>
                        <div className='card_details absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end'>
                            <h1 className='card_title text-2xl font-bold'>{charObj.character_name}</h1>
                            {/* Add more cast details here */}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Cardflip;


// return (
//     <div
//         className='flip_card w-[600px] h-[360px] rounded-md perspective-1000'
//         onClick={handleFlip}>

//         <motion.div
//             className='flip_card_inner w-full h-full relative transition-transform duration-600 transform-style-3d'
//             initial={false}
//             animate={{ rotateY: isFlipped ? 180 : 0 }}
//             transition={{ duration: 0.6, animationDirection: "normal" }}
//             onAnimationComplete={() => setIsAnimating(false)}
//         >
//             <div
//                 className='flip_card_front w-[100%] h-[100%] bg-cover border-[1px] text-black rounded-lg p-4'
//                 style={{ backgroundImage: `url(${charObj.character_img})` }}
//             >
//                 <h1 className='text-2xl font-bold '>{charObj.cast_name}</h1>
//                 <p className='text-black mt-2'>{charObj.class}</p>
//             </div>

//             <div
//                 className='flip_card_back w-[100%] h-[100%] bg-cover border-[1px] text-black rounded-lg p-4'
//                 style={{ backgroundImage: `url(${charObj.cast_img})` }}
//             >
//                 <h1 className='text-2xl font-bold '> {charObj.character_name}</h1>
//             </div>
//         </motion.div>
//     </div>
// );