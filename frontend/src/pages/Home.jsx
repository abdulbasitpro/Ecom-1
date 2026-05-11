import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductGrid from '../components/ProductGrid';
import NewsletterSection from '../components/NewsletterSection';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <ProductGrid />
      <NewsletterSection />
    </>
  );
};

export default Home;
