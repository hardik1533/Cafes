import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Rooftop Cafe" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-coffee-400 font-poppins tracking-[0.2em] uppercase text-sm font-semibold mb-4 block">
            Welcome to Venus
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Sky-High <span className="text-gradient">Dining.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-sans max-w-2xl mx-auto mb-10">
            Experience open-air ambiance, multi-cuisine delights, and unforgettable moments at Venus Rooftop Restro & Cafe.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#menu" className="bg-coffee-600 hover:bg-coffee-500 text-white font-poppins font-medium px-6 sm:px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,155,109,0.4)] group w-full sm:w-auto">
            View Menu
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="glass hover:bg-white/10 text-white font-poppins font-medium px-6 sm:px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto">
            Reserve Table
          </a>
          <a href="#contact" className="border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-poppins font-medium px-6 sm:px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto flex items-center justify-center">
            WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest font-poppins">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-coffee-500"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
