import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    const message = encodeURIComponent(`Hello, I'm interested in buying ${quantity} unit(s) of ${product.name}.`);
    window.location.href = `https://wa.me/923339123345?text=${message}`;
  };

  return (
    <div className="group flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gray-50 mb-6 rounded-3xl group-hover:shadow-2xl transition-all duration-500 border border-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">
            NEW
          </span>
        )}
        
        {/* Overlay with Quick View Button */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={handleBuyNow}
            className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-black hover:text-white"
          >
            Quick Shop
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-sm font-bold mb-2 tracking-tight">{product.name}</h3>
        <div className="flex gap-2 items-center mb-6">
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through font-medium">{product.oldPrice}</span>
          )}
          <span className="text-xs font-bold text-black">{product.price}</span>
        </div>
        
        {/* Quantity Selector & Buy Button */}
        <div className="mt-auto flex items-center gap-2">
          <div className="flex items-center border border-gray-100 rounded-full px-3 py-2 bg-gray-50/50">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-gray-400 hover:text-black transition-colors font-bold text-sm px-1"
            >
              −
            </button>
            <span className="text-[11px] font-bold w-5 text-center">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="text-gray-400 hover:text-black transition-colors font-bold text-sm px-1"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={handleBuyNow}
            className="flex-grow bg-black text-white py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
