import React from 'react';
import ProductCard from '../components/ProductCard';

import { useProducts } from '../context/ProductContext';

const Shop = () => {
  const { products } = useProducts();
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
