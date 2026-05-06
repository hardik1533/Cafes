import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';
import { FaInstagram as InstaIcon } from 'react-icons/fa';

const Instagram = () => {
  const posts = [
    { img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", likes: "1.2k", comments: "45" },
    { img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", likes: "890", comments: "32" },
    { img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", likes: "2.1k", comments: "108" },
    { img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", likes: "1.5k", comments: "67" },
  ];

  return (
    <section id="instagram" className="py-24 bg-dark-900 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-full glass flex items-center justify-center text-white mx-auto mb-6 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 p-1"
          >
            <div className="bg-dark-900 w-full h-full rounded-full flex items-center justify-center">
              <InstaIcon size={24} />
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Follow Our <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-sans text-lg"
          >
            @talkhouseindia
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={post.img}
                alt="Instagram post"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white font-poppins font-medium">
                  <Heart className="fill-white" size={20} />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white font-poppins font-medium">
                  <MessageCircle className="fill-white" size={20} />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a href="https://www.instagram.com/talkhouseindia/" target="_blank" rel="noreferrer" className="inline-block bg-white text-dark-900 hover:bg-gray-200 px-8 py-3 rounded-full font-poppins font-medium transition-colors duration-300">
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;
