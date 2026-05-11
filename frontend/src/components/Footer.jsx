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
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-tiktok text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-x-twitter text-xl"></i>
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
