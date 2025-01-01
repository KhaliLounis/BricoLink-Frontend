import React, { useState } from 'react';
import { IoMdPeople } from 'react-icons/io';

const JoinButton = () => {
const [isOpen, setIsOpen] = useState(false);

return (
    <div className="relative">
    <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-b from-[#5544B7] to-[#724FFF] border border-white text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-400/30"
    >
        <span>Join</span>
        <IoMdPeople className="text-white" />
    </button>
    
    {isOpen && (
        <div className="absolute mt-2 w-48 bg-gradient-to-b from-[#5544B7] to-[#724FFF] rounded-lg shadow-lg overflow-hidden backdrop-blur-sm">
        <button className="w-full text-white px-4 py-3 text-left hover:bg-purple-400/30">
            Join as a costumer
        </button>
        <button className="w-full text-white px-4 py-3 text-left hover:bg-purple-400/30">
            Join as an artisan
        </button>
        </div>
    )}
    </div>
);
};

export default JoinButton;