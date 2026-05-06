import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Tv, Coffee, Clock, Users, Zap, Sofa, Music } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <Sofa size={32} />, title: "Jail Theme", desc: "Unique cell-inspired booths & decor." },
    { icon: <Music size={32} />, title: "Live Music", desc: "Lively acoustic nights on Fridays." },
    { icon: <Coffee size={32} />, title: "Global Menu", desc: "Multi-cuisine vegetarian delights." },
    { icon: <Zap size={32} />, title: "Signature Coffee", desc: "Best Ristretto blends & mocktails." },
    { icon: <Tv size={32} />, title: "Live Sports", desc: "Watch the latest matches live." },
    { icon: <Users size={32} />, title: "Social Vibe", desc: "Perfect for friendly hangouts & dates." },
    { icon: <Clock size={32} />, title: "Late Night", desc: "Warm and cozy evening ambiance." },
    { icon: <Wifi size={32} />, title: "Free WiFi", desc: "Stay connected behind the rods." },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-dark-900 relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-coffee-500 font-poppins font-medium tracking-wider mb-2 uppercase text-sm"
          >
            Why Choose Us
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            More Than Just a <span className="text-gradient">Cafe</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-2xl hover:bg-dark-800/80 transition-colors duration-300 group cursor-default"
            >
              <div className="w-16 h-16 rounded-xl bg-dark-800 border border-white/5 flex items-center justify-center text-coffee-400 mb-6 group-hover:scale-110 group-hover:bg-coffee-500/10 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-poppins font-semibold text-white mb-3 group-hover:text-coffee-300 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 font-sans">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
