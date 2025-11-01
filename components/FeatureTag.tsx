
import React from 'react';

interface FeatureTagProps {
  text: string;
  position: string;
  delay: number;
}

const FeatureTag: React.FC<FeatureTagProps> = ({ text, position, delay }) => {
  return (
    <div 
      className={`absolute hidden lg:block bg-white/5 backdrop-blur-sm text-white text-sm py-2 px-4 rounded-full border border-white/10 shadow-lg opacity-0 animate-fadeIn ${position}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </div>
  );
};

export default FeatureTag;
