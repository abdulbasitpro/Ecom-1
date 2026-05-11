import React from 'react';

const products = [
  { id: 1, name: 'Minimalist Wallet', price: '$45.00', image: '/wallet.png' },
  { id: 2, name: 'Sleek Sunglasses', price: '$120.00', image: '/accessories.png' },
  { id: 3, name: 'Premium Watch', price: '$250.00', image: '/accessories.png' },
  { id: 4, name: 'Urban Jacket', price: '$180.00', image: '/new_arrivals.png' },
  { id: 5, name: 'Leather Belt', price: '$35.00', image: '/wallet.png' },
  { id: 6, name: 'Fashion Cap', price: '$25.00', image: '/new_arrivals.png' },
];

const Shop = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-light uppercase tracking-[0.3em] mb-4">Shop All</h1>
            <p className="text-gray-500 uppercase tracking-widest text-xs">Home / Shop</p>
          </div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <button className="text-xs uppercase tracking-widest font-bold border-b border-black pb-1">Filter</button>
            <button className="text-xs uppercase tracking-widest font-bold border-b border-black pb-1">Sort By</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-meers-100 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <button className="absolute bottom-0 left-0 w-full bg-black text-white py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 uppercase tracking-widest text-xs font-bold">
                  Add to Cart
                </button>
              </div>
              <h3 className="text-sm uppercase tracking-widest font-medium mb-1">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
