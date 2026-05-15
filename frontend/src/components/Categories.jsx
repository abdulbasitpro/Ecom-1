import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-20 pb-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Shop</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-xs md:text-sm px-4">
            Find the perfect piece to complement your style with meers’ curated collections.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Wallets - Large Left Card */}
          <div className="relative group rounded-[2rem] overflow-hidden bg-gray-100 aspect-[4/5] lg:aspect-auto lg:h-full min-h-[400px] md:min-h-[600px]">
            <img 
              src="/wallet.png" 
              alt="Wallets" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 md:p-12 text-white">
              <h3 className="text-xl md:text-4xl font-bold mb-1 md:mb-2">Wallets</h3>
              <p className="mb-4 md:mb-6 text-xs md:text-base text-gray-200">Crafted for style and everyday use.</p>
              <button 
                onClick={() => navigate('/shop')}
                className="w-fit px-6 md:px-8 py-2 md:py-2.5 border border-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                View All
              </button>
            </div>
          </div>

          {/* Right Column Bento */}
          <div className="flex flex-col gap-6 lg:h-full">
            {/* Accessories */}
            <div className="relative group rounded-[2rem] overflow-hidden bg-gray-100 flex-1 min-h-[300px] md:min-h-0">
              <img 
                src="/accessories.png" 
                alt="Accessories" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6 md:p-10 text-white">
                <h3 className="text-lg md:text-2xl font-bold mb-1">Accessories</h3>
                <p className="mb-4 text-[10px] md:text-sm text-gray-200">Elevate your look effortlessly.</p>
                <button 
                  onClick={() => navigate('/shop')}
                  className="w-fit px-5 md:px-6 py-2 border border-white rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Shop Now
                </button>
              </div>
            </div>

            {/* New Arrivals */}
            <div className="relative group rounded-[2rem] overflow-hidden bg-gray-100 flex-1 min-h-[300px] md:min-h-0">
              <img 
                src="/new_arrivals.png" 
                alt="New Arrivals" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6 md:p-10 text-white">
                <h3 className="text-lg md:text-2xl font-bold mb-1">New Arrivals</h3>
                <p className="mb-4 text-[10px] md:text-sm text-gray-200">Fresh styles just landed.</p>
                <button 
                  onClick={() => navigate('/shop')}
                  className="w-fit px-5 md:px-6 py-2 border border-white rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Categories;
