import React from 'react';
import LogoPic from '../assets/logoPic.png'

const AboutContainer = () => {
    return (
        <div className="mb-20 border border-purple-300 rounded-lg p-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm">
            <div className="flex">
                <div className="w-1/4 bg-gray-200 h-64 mr-4">
                    <img src={LogoPic} alt="another logo" className="w-full h-full object-cover" />
                </div>
                {/* dialogue box */}
                <div className="w-2/3 bg-purple-100 bg-opacity-50 p-4 rounded-lg">
                    {/*content here */}
                    <p className="text-purple-800">content...</p>
                </div>
            </div>
        </div>
    );
};

export default AboutContainer;