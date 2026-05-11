import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 md:py-6 border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight">Meers</Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-8 transition-all">Home</Link>
          <Link to="/shop" className="text-sm font-medium hover:underline underline-offset-8 transition-all">Shop</Link>
          <Link to="/gallery" className="text-sm font-medium hover:underline underline-offset-8 transition-all">Gallery</Link>
          <button className="ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute w-full bg-white border-b transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center gap-6">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest">Home</Link>
          <Link to="/shop" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest">Shop</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest">Gallery</Link>
        </div>
      </div>
    </nav>
};

export default Navbar;



