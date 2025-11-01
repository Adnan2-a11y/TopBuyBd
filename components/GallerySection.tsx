// FIX: The original file had invalid content causing multiple errors. This new content implements a functional GallerySection component.
import React from 'react';

const GallerySection: React.FC = () => {
  const images = [
    '/assets/images/Hoco W65 gallery image1.jpg',
    '/assets/images/Hoco W65 gallery image2.jpeg',
    '/assets/images/Hoco W65 gallery image3.jpeg',
    '/assets/images/Hoco W65 gallery image4.jpeg',
    '/assets/images/Hoco W65 gallery image5.jpeg',
    '/assets/images/Hoco W65 gallery image6.jpeg',
  ];

  return (
    <section id="gallery" className="container mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase opacity-0 animate-fadeInUp">
          Gallery
        </h2>
        <p className="text-lg text-gray-400 max-w-xl mx-auto mt-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
          Explore the sleek design and premium build of the Hoco W65 from every angle.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${400 + index * 100}ms` }}
          >
            <img
              src={src}
              alt={`Hoco W65 gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
