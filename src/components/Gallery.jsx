import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram as Instagram } from 'react-icons/fa';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80",
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&q=80",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80",
  ];

  return (
    <section id="gallery" className="py-24 bg-dark-800 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-coffee-500 font-poppins font-medium tracking-wider mb-2 uppercase text-sm"
            >
              Atmosphere
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white"
            >
              Our <span className="text-gradient">Gallery</span>
            </motion.h2>
          </div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#instagram"
            className="flex items-center gap-2 text-coffee-400 hover:text-white transition-colors"
          >
            <Instagram size={20} />
            <span className="font-poppins font-medium">Follow us on Instagram</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl group ${index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className="aspect-square w-full h-full">
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-dark-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Instagram className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
