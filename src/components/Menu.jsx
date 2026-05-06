import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const Menu = () => {
  const [showAll, setShowAll] = useState(false);

  const menuItems = [
    { name: "Cheese Balls", desc: "Crispy golden fried cheese balls served with dip.", price: "₹220", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", bestSeller: true },
    { name: "Margherita Pizza", desc: "Classic pizza with fresh tomato sauce, mozzarella, and basil.", price: "₹300", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", bestSeller: true },
    { name: "Paneer Tikka", desc: "Soft paneer cubes marinated in spices and grilled in tandoor.", price: "₹280", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", bestSeller: true },
    { name: "Mexican Wrap", desc: "Spicy beans, veggies, and cheese wrapped in a soft tortilla.", price: "₹250", img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Sweet Corn Soup", desc: "Comforting and thick soup made with fresh sweet corn.", price: "₹150", img: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Virgin Mojito", desc: "Refreshing mocktail with mint and lime.", price: "₹180", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", bestSeller: true },
  ];

  const extraItems = [
    { name: "Thai Coconut Soup", desc: "Rich and creamy coconut soup with exotic Thai herbs.", price: "₹180", img: "https://images.unsplash.com/photo-1548943487-a2e4b43b485d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Cold Coffee", desc: "Thick, creamy, and chilled coffee blended to perfection.", price: "₹150", img: "https://images.unsplash.com/photo-1461023058943-07cb12ee4df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Arrabiata Pasta", desc: "Penne pasta tossed in a spicy, garlicky tomato sauce.", price: "₹220", img: "https://images.unsplash.com/photo-1621996316585-f5e9da8ce75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Chocolate Brownie", desc: "Warm gooey chocolate brownie served with vanilla ice cream.", price: "₹190", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Loaded Nachos", desc: "Crispy nachos topped with melted cheese and jalapeños.", price: "₹200", img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
    { name: "Paneer Sizzler", desc: "Hot sizzling platter loaded with paneer, veggies, and rice.", price: "₹450", img: "https://images.unsplash.com/photo-1596450514735-111a2f643033?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", bestSeller: true },
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
