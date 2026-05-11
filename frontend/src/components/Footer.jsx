import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Brand</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Explore our sleek website template for seamless navigation.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:opacity-70 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-white hover:opacity-70 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-white hover:opacity-70 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.032 2.62.016 3.93.016 0 1.13.435 2.214 1.22 3.03.82.854 1.94 1.34 3.1 1.34v3.83c-1.39-.02-2.76-.484-3.87-1.32-.23-.17-.44-.36-.64-.56v6.23c-.02 2.37-1.15 4.6-3.04 6.03-1.89 1.43-4.38 1.91-6.66 1.3-2.28-.61-4.22-2.26-5.2-4.42-.98-2.16-.92-4.7.17-6.8 1.09-2.1 3.2-3.62 5.54-4.04 1-.18 2.03-.13 3.01.16v3.89c-.61-.26-1.28-.4-1.95-.39-1.87-.04-3.55 1.22-4.11 3.03-.56 1.81.04 3.82 1.47 5.03 1.43 1.21 3.51 1.43 5.17.55 1.66-.88 2.58-2.77 2.29-4.63V.02z"/></svg>
              </a>
              <a href="#" className="text-white hover:opacity-70 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
            </div>

          </div>

          {/* Spacer */}
          <div className="hidden md:block"></div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>+92 310 9742400</li>
              <li>info@Meers.pk</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">Newsletter</h4>
            <div className="space-y-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Your Email</p>
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-white rounded-xl py-3.5 px-6 text-black focus:outline-none"
              />
              <button className="w-fit bg-gray-500 text-white px-8 py-2.5 rounded-full text-xs font-bold hover:bg-gray-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2024. All rights reserved.</p>
          <a href="#" className="text-xs text-gray-500 underline underline-offset-4 hover:text-white transition-colors">
            Terms & conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
