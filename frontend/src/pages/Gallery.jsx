import React from 'react';

const galleryImages = [
  '/hero.png',
  '/wallet.png',
  '/accessories.png',
  '/new_arrivals.png',
  '/hero.png',
  '/wallet.png',
];

const Gallery = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-light uppercase tracking-[0.3em] mb-12 text-center">Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="overflow-hidden aspect-square">
              <img 
                src={src} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
