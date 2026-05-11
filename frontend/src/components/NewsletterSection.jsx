import React from 'react';

const NewsletterSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for joining Meers!');
  };

  return (
    <section className="py-32 bg-white text-center border-t border-gray-50">

      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Join Meers</h2>
        <p className="text-gray-500 mb-10 text-sm">Get exclusive updates and style tips</p>
        
        <form onSubmit={handleSubmit} className="space-y-6 px-4">
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 text-left ml-1">
              Your Email
            </label>
            <input 
              type="email" 
              placeholder="Enter email" 
              className="w-full border border-gray-200 rounded-xl py-3 md:py-4 px-6 focus:outline-none focus:border-black transition-colors"
            />
          </div>
          <button className="w-full md:w-auto bg-black text-white px-16 py-3.5 md:py-4 rounded-full font-bold text-sm hover:bg-gray-900 transition-colors">
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
};

export default NewsletterSection;
