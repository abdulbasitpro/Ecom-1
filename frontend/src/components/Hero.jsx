import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="relative h-[500px] md:h-[600px] w-full rounded-[2rem] overflow-hidden bg-black flex items-center">
        {/* Background Image - Styled like the screenshot */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Meers Fashion" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content - Left Aligned */}
        <div className="relative z-10 px-8 md:px-24 text-white max-w-2xl animate-slide-up">
          <p className="text-[10px] md:text-sm font-semibold tracking-widest uppercase mb-4 text-gray-300">
            SHOP THE FASHION
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-8">
            Meers: The Style <br className="hidden sm:block" /> You Deserve
          </h1>
          <div className="flex flex-row gap-4 items-center">
            <button 
              onClick={() => navigate('/shop')}
              className="bg-white text-black px-6 md:px-10 py-3 md:py-3.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 hover:bg-gray-200"
            >
              Shop Now
            </button>
            <button 
              onClick={() => navigate('/gallery')}
              className="bg-transparent text-white px-6 md:px-10 py-3 md:py-3.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 hover:bg-white/10 border border-white/50"
            >
              View Gallery
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};


export default Hero;
