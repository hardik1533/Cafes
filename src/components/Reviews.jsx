import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    { name: "Rahul Patel", role: "Coffee Enthusiast", text: "One of the best cafes in Rajkot with amazing ambiance and coffee.", rating: 5 },
    { name: "Sneha Desai", role: "Local Guide", text: "Perfect place for chilling with friends at night.", rating: 5 },
    { name: "Karan Mehta", role: "Food Blogger", text: "Food quality and interior both are top-class.", rating: 5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coffee-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-coffee-500 font-poppins font-medium tracking-wider mb-2 uppercase text-sm"
          >
            Testimonials
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            What Our <span className="text-gradient">Guests Say</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass rounded-3xl p-8 md:p-12 text-center relative">
            <Quote className="absolute top-6 left-6 text-coffee-500/20 w-16 h-16" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-coffee-400 fill-coffee-400" size={20} />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-serif text-white mb-8 leading-relaxed italic">
                  "{reviews[currentIndex].text}"
                </p>
                <div>
                  <h4 className="text-lg font-poppins font-semibold text-coffee-300">{reviews[currentIndex].name}</h4>
                  <span className="text-gray-500 text-sm font-sans">{reviews[currentIndex].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevReview}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-coffee-600 transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextReview}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-coffee-600 transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
