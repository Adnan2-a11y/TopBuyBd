import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-4 sm:p-8 z-20 animate-fadeIn" style={{ animationDelay: '1s' }}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wider">hoco.</h1>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Features</a>
          <a href="#specs" className="text-gray-400 hover:text-white transition-colors duration-300">Specs</a>
          <a href="#gallery" className="text-gray-400 hover:text-white transition-colors duration-300">Gallery</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;