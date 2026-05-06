import React from 'react';
import { Coffee, ArrowRight } from 'lucide-react';
import { FaFacebookF as Facebook, FaTwitter as Twitter, FaInstagram as Instagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-900 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 text-2xl font-serif font-bold text-white mb-6">
              <Coffee className="text-coffee-500" />
              <span>Ristretto</span>
            </a>
            <p className="text-gray-400 font-sans mb-6">
              Ristretto – Behind The Rods is Ahmedabad's unique jailhouse-themed cafe offering inventive global vegetarian cuisine and an immersive dining experience.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-coffee-500 hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-coffee-500 hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-coffee-500 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-poppins font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About Us', 'Our Menu', 'Gallery', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.split(' ')[0].toLowerCase()}`} className="text-gray-400 hover:text-coffee-400 transition-colors font-sans flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-coffee-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-poppins font-semibold mb-6">Opening Hours</h4>
            <ul className="flex flex-col gap-4 text-gray-400 font-sans">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Monday - Sunday</span>
                <span className="text-white">9:15 AM - 1:00 AM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-poppins font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 font-sans mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-dark-800 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-coffee-500 font-sans"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-coffee-600 hover:bg-coffee-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

        <div className="text-center pt-8 border-t border-white/10 text-gray-500 font-sans text-sm">
          <p>&copy; {new Date().getFullYear()} Ristretto - Behind The Rods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
