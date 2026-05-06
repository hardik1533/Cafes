import React from 'react';
import { motion } from 'framer-motion';
import { Sofa, Music, Utensils, Coffee } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <Sofa size={24} />, title: "Jail Theme", desc: "Unique mock-prison booths & bars." },
    { icon: <Music size={24} />, title: "Live Music", desc: "Friday music nights & sports." },
    { icon: <Utensils size={24} />, title: "Global Menu", desc: "Vegetarian Continental & more." },
    { icon: <Coffee size={24} />, title: "Signature Coffee", desc: "Crafted blends & mocktails." },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Cafe Interior" 
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-coffee-500/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-coffee-600/10 rounded-full blur-3xl z-0"></div>
            
            {/* Floating Badge */}
            <div className="glass-card absolute bottom-0 right-0 sm:-bottom-6 sm:-right-6 p-4 sm:p-6 rounded-xl z-20 flex items-center gap-3 sm:gap-4 scale-90 sm:scale-100 origin-bottom-right">
              <h3 className="text-3xl sm:text-4xl font-serif text-coffee-400">10+</h3>
              <p className="text-xs sm:text-sm text-gray-300 font-poppins leading-tight">Years of <br/> Excellence</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-coffee-500 font-poppins font-medium tracking-wider mb-2 uppercase text-sm">Our Story</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Dining <span className="text-gradient">With a Twist</span>
            </h2>
            <p className="text-gray-400 mb-6 font-sans text-lg leading-relaxed">
              Ristretto – Behind The Rods is Ahmedabad's most creative dining spot, located in Navrangpura. Designed around a playful jailhouse motif, our cafe transforms traditional dining into an immersive experience complete with cell-inspired booths and dim lighting. Whether you're here for our inventive global vegetarian cuisine, live music on Fridays, or simply to hang out in a relaxed social atmosphere, every moment behind the rods is unforgettable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-dark-800 rounded-lg text-coffee-400 border border-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-poppins font-medium mb-1">{item.title}</h5>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
