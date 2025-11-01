

import React from 'react';
import ProductImage from './ProductImage';
import FeatureTag from './FeatureTag';
import type { Feature } from '../types';

const features: Feature[] = [
  // Left Side
  { text: '45h battery life', position: 'lg:top-[20%] lg:left-0' },
  { text: '40mm speaker', position: 'lg:top-[45%] lg:-left-12' },
  { text: 'HiFi HD sound', position: 'lg:top-[70%] lg:-left-4' },
  // Right Side
  { text: 'New BT 5.4 chip', position: 'lg:top-[20%] lg:right-0' },
  { text: 'Standby time 200h', position: 'lg:top-[45%] lg:-right-12' },
  { text: 'Comfortable to wear', position: 'lg:top-[70%] lg:right-0' },
];

const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-12">
      <div className="opacity-0 animate-fadeInUp">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase">
          Hoco W65
        </h2>
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-cyan tracking-tight uppercase" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards', opacity: 0 }}>
          Immerse Yourself
        </h3>
      </div>

      <div className="relative w-full max-w-lg lg:max-w-xl my-8 lg:my-0 lg:h-[60vh] flex items-center justify-center">
        <ProductImage />
        {features.map((feature, index) => (
          <FeatureTag 
            key={feature.text} 
            text={feature.text}
            position={feature.position}
            delay={600 + index * 100}
            />
        ))}
      </div>
      
      <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
        <p className="max-w-2xl mx-auto text-gray-400 mb-8 md:text-lg">
          Experience unparalleled audio quality and all-day comfort with the new Hoco W65 headphones. Featuring a powerful 40mm speaker, HiFi HD sound, and the latest Bluetooth 5.4 chip for a seamless connection.
        </p>
        <button className="bg-brand-cyan text-black font-bold py-4 px-10 rounded-full text-lg uppercase tracking-wider transform hover:scale-105 hover:shadow-glow-cyan transition-all duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;