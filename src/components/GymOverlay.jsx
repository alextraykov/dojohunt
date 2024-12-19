import { useState, useEffect } from 'react';

const GymOverlay = ({ gym, isOpen, onClose }) => {
  if (!isOpen || !gym) return null;

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className="text-yellow-400 text-2xl">
        {index < Math.floor(rating) ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <div className="absolute top-0 right-0 h-full w-[400px] bg-[#1a1a1a] text-white shadow-lg z-10">
      <div className="relative h-[300px] w-full">
        <img 
          src={gym.image} 
          alt={gym.name}
          className="w-full h-full object-cover"
        />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-6">
        <h2 className="text-4xl font-bold mb-4">{gym.name}</h2>
        
        <div className="flex gap-2 mb-4">
          <span className="bg-[#2a2a2a] px-4 py-2 rounded-full text-sm">
            🤼 Grappling
          </span>
          <span className="bg-[#2a2a2a] px-4 py-2 rounded-full text-sm">
            ✨ Popular
          </span>
          <span className="bg-[#2a2a2a] px-4 py-2 rounded-full text-sm">
            💲 Budget
          </span>
        </div>

        <div className="flex items-center gap-2 mb-6">
          {renderStars(gym.rating)}
          <span className="text-2xl font-bold">{gym.rating}/5</span>
        </div>

        <p className="text-gray-400 mb-8">{gym.description}</p>

        <button 
          className="w-full bg-red-500 text-white py-4 rounded-lg font-bold text-xl hover:bg-red-600 transition-colors"
          onClick={() => window.open(gym.contact.website, '_blank')}
        >
          Contact Gym
        </button>
      </div>
    </div>
  );
};

export default GymOverlay; 