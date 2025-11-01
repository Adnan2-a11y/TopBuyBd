// FIX: The original file had invalid content causing multiple errors. This new content implements a functional GallerySection component.
import React from 'react';

const GallerySection: React.FC = () => {
  const images = [
    'https://i.ibb.co/3kXpYv2/hoco-w65-headphones-clean.png',
    'https://images.unsplash.com/photo-1546435770-a3e426bf4022?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1585298723682-711556143f77?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1590658268037-6bf12165a84c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
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
