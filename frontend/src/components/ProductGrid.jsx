import React from 'react';
import { useNavigate } from 'react-router-dom';


const products = [
  { id: 1, name: 'Genuine Leather Wallet', oldPrice: 'Rs 5,500.00', price: 'Rs 2,450.00', image: '/wallet.png', isNew: true },
  { id: 2, name: 'Sleek Tan Wallet', price: 'Rs 3,200.00', image: '/tan_wallet.png' },
  { id: 3, name: 'Minimal Sunglasses', price: 'Rs 4,500.00', image: '/sunglasses.png', isNew: true },
  { id: 4, name: 'Premium Classic Watch', price: 'Rs 12,500.00', image: '/watch.png' },
  { id: 5, name: 'Urban Leather Belt', price: 'Rs 1,800.00', image: '/belt.png' },
  { id: 6, name: 'Minimalist Card Holder', price: 'Rs 1,200.00', image: '/card_holder.png' },
  { id: 7, name: 'Essential Black Wallet', price: 'Rs 2,800.00', image: '/wallet.png' },
  { id: 8, name: 'Sleek Fashion Watch', price: 'Rs 9,500.00', image: '/watch.png' },
];

const ProductGrid = () => {
  const handleBuyNow = (productName) => {
    const message = encodeURIComponent(`Hello, I'm interested in buying the ${productName}.`);
    window.location.href = `https://wa.me/923339123345?text=${message}`;
  };

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
            <div key={product.id} className="group flex flex-col h-full">
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
                
                {/* Overlay with Quick Buy Button */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => handleBuyNow(product.name)}
                    className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-black hover:text-white"
                  >
                    Quick View
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
                
                <button 
                  onClick={() => handleBuyNow(product.name)}
                  className="mt-auto w-full border border-black py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.12.555 4.191 1.608 6.033L0 24l6.117-1.605a11.803 11.803 0 005.925 1.585h.005c6.635 0 12.032-5.396 12.035-12.032a11.761 11.761 0 00-3.48-8.504z"/></svg>
                  Buy Now
                </button>
              </div>
            </div>
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
