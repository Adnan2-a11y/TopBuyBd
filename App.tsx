import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import SpecsSection from './components/SpecsSection';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-brand-bg"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10, 10, 10, 0.95), rgba(10, 10, 10, 1)),
            radial-gradient(ellipse at center, rgba(10, 10, 10, 0) 0%, #0a0a0a 100%),
            linear-gradient(
              to right, 
              rgba(30, 30, 30, 0.2) 1px, 
              transparent 1px
            ),
            linear-gradient(
              to bottom, 
              rgba(30, 30, 30, 0.2) 1px, 
              transparent 1px
            )
          `,
          backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
        }}
      ></div>
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <GallerySection />
          <SpecsSection />
        </main>
      </div>
    </div>
  );
}

export default App;