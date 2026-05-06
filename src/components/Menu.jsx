import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const Menu = () => {
  const [showAll, setShowAll] = useState(false);

  const menuItems = [
    { name: "Cappuccino", desc: "Espresso with steamed milk and a deep layer of foam.", price: "₹180", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", bestSeller: true },
    { name: "Masala Tea", desc: "Authentic Indian spiced tea brewed to perfection.", price: "₹90", img: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Gourmet Burger", desc: "Juicy patty with fresh veggies and signature sauce.", price: "₹250", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", bestSeller: true },
    { name: "Blue Lagoon", desc: "Refreshing mocktail with a hint of citrus and mint.", price: "₹150", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Cheese Pizza", desc: "Classic mozzarella cheese and tangy tomato sauce.", price: "₹350", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Chocolate Lava Cake", desc: "Warm gooey chocolate center served with vanilla ice cream.", price: "₹220", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", bestSeller: true },
  ];

  const extraItems = [
    { name: "Classic Latte", desc: "Rich espresso combined with milk and a light layer of foam.", price: "₹160", img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Green Tea", desc: "Healthy and refreshing antioxidant-rich tea.", price: "₹80", img: "https://images.unsplash.com/photo-1627492221081-3006a2b8eec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Cheesecake", desc: "Classic New York style creamy cheesecake.", price: "₹200", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  ];

  const displayedItems = showAll ? [...menuItems, ...extraItems] : menuItems;

  return (
    <section id="menu" className="py-24 bg-dark-800 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-coffee-500 font-poppins font-medium tracking-wider mb-2 uppercase text-sm"
          >
            Discover
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            Our Popular <span className="text-gradient">Menu</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-4 group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {item.bestSeller && (
                  <div className="absolute top-4 right-4 bg-coffee-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Best Seller
                  </div>
                )}
                {/* Overlay cart button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-coffee-500 hover:bg-coffee-400 text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Plus size={24} />
                  </button>
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-semibold text-white group-hover:text-coffee-300 transition-colors">{item.name}</h3>
                  <span className="text-coffee-400 font-bold font-poppins text-lg">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm font-sans line-clamp-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button 
            onClick={() => setShowAll(!showAll)}
            className="border border-coffee-500 text-coffee-400 hover:bg-coffee-500 hover:text-white px-8 py-3 rounded-full font-poppins transition-all duration-300"
          >
            {showAll ? "Show Less" : "View Full Menu"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
