import React from 'react';

const Watermark = () => {
  return (
    <div className="fixed bottom-8 left-8 z-[100] group">
      <div className="relative flex items-center justify-center">
        {/* The Badge */}
        <div className="w-12 h-12 rounded-full bg-black/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:w-40 group-hover:rounded-full group-hover:bg-black group-hover:border-black shadow-lg overflow-hidden cursor-default">
          <span className="text-sm font-bold tracking-tighter text-black group-hover:text-white transition-colors duration-300">
            AB
          </span>
          <span className="absolute left-12 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            Designed by AB
          </span>
        </div>
        
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-black/5 animate-pulse -z-10 group-hover:hidden"></div>
      </div>
    </div>
  );
};

export default Watermark;
