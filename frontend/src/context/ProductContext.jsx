import React, { createContext, useState, useEffect, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const defaultProducts = [
    { id: 1, name: 'Genuine Leather Wallet', stock: 12, price: 'Rs 2,450', status: 'In Stock', image: '/wallet.png' },
    { id: 2, name: 'Sleek Tan Wallet', stock: 0, price: 'Rs 3,200', status: 'Out of Stock', image: '/tan_wallet.png' },
    { id: 3, name: 'Minimal Sunglasses', stock: 8, price: 'Rs 4,500', status: 'In Stock', image: '/sunglasses.png' },
    { id: 4, name: 'Premium Classic Watch', stock: 5, price: 'Rs 12,500', status: 'In Stock', image: '/watch.png' },
    { id: 5, name: 'Urban Leather Belt', stock: 15, price: 'Rs 1,800', status: 'In Stock', image: '/belt.png' },
  ];

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('meersProducts');
    return saved ? JSON.parse(saved) : defaultProducts;
  });

  useEffect(() => {
    localStorage.setItem('meersProducts', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
