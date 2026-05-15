import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

import { useProducts } from '../context/ProductContext';

const ProductGrid = () => {
  const navigate = useNavigate();
  const { products } = useProducts();

  return (
    <section className="mt-10 py-24 bg-white border-t border-gray-50 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Best Sellers</h2>
          <p className="text-gray-500 text-[10px] md:text-sm max-w-lg mx-auto uppercase tracking-widest font-medium">
            Explore our most-loved pieces from the meers collection
          </p>
        </div>


        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase text-gray-500">Sort by</span>
            <select className="border-b border-gray-300 py-1 text-xs font-bold focus:outline-none">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button 
            onClick={() => navigate('/shop')}
            className="px-10 py-3 border-2 border-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
          >
            View All Products
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
