import React from 'react';

const Watermark = () => {
  return (
    <div className="fixed bottom-8 left-8 z-[100] group">
      <div className="relative">
        {/* The Badge */}
        <div className="flex items-center bg-black/10 backdrop-blur-md border border-white/20 h-12 rounded-full transition-all duration-500 ease-in-out w-12 group-hover:w-44 group-hover:bg-black group-hover:border-black shadow-lg overflow-hidden cursor-default">
          {/* Initials */}
          <div className="min-w-[48px] h-full flex items-center justify-center">
            <span className="text-sm font-bold tracking-tighter text-black group-hover:text-white transition-colors duration-300">
              AB
            </span>
          </div>
          
          {/* Full Text */}
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 -ml-2">
            <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              Designed by AB
            </span>
          </div>
        </div>
        
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-black/5 animate-pulse -z-10 group-hover:hidden"></div>
      </div>
    </div>
  );
};

export default Watermark;
