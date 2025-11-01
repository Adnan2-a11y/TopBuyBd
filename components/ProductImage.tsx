

import React from 'react';

const ProductImage: React.FC = () => {
  // Using an external image host for the transparent headphone image
  const headphoneImageUrl = 'https://i.ibb.co/3kXpYv2/hoco-w65-headphones-clean.png';

  return (
    <div className="relative flex justify-center items-center w-full h-full opacity-0 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
      {/* Glow effect element */}
      <div className="absolute w-2/3 h-2/3 bg-brand-cyan/20 rounded-full blur-3xl shadow-glow-cyan"></div>
      
      {/* Headphone Image */}
      <img
        src={headphoneImageUrl}
        alt="Hoco W65 Over-Ear Headphones"
        className="relative z-10 w-full h-auto max-w-sm md:max-w-md lg:max-w-none lg:w-[120%] object-contain animate-float drop-shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>
  );
};

export default ProductImage;