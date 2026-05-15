import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Minimalist Wallet', price: 'Rs 2,450.00', image: '/wallet.png' },
  { id: 2, name: 'Sleek Sunglasses', price: 'Rs 4,500.00', image: '/accessories.png' },
  { id: 3, name: 'Premium Watch', price: 'Rs 12,500.00', image: '/accessories.png' },
  { id: 4, name: 'Urban Jacket', price: 'Rs 5,800.00', image: '/new_arrivals.png' },
  { id: 5, name: 'Leather Belt', price: 'Rs 1,800.00', image: '/wallet.png' },
  { id: 6, name: 'Fashion Cap', price: 'Rs 1,200.00', image: '/new_arrivals.png' },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
