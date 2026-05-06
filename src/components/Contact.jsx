import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: <MapPin size={24} />, title: "Location", detail: "The One World, A-8/9, 150 Feet Ring Road, near Ayodhya Chowk, Rajkot, Gujarat 360006" },
    { icon: <Phone size={24} />, title: "Phone", detail: "+91 99787 12340" },
    { icon: <Mail size={24} />, title: "Email", detail: "hello@talkhouse.in" },
    { icon: <Clock size={24} />, title: "Opening Hours", detail: "Mon-Sun: 9:15 AM - 1:00 AM" },
  ];

  return (
    <section id="contact" className="py-24 bg-dark-800 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <h4 className="text-coffee-500 font-poppins font-medium tracking-wider mb-2 uppercase text-sm">Visit Us</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-gray-400 font-sans mb-10">
              We'd love to hear from you. Whether you have a question about our menu, want to book a table, or just want to say hi, feel free to reach out.
            </p>

            <div className="flex flex-col gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-coffee-400 group-hover:bg-coffee-500 group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-poppins font-semibold mb-1">{info.title}</h5>
                    <p className="text-gray-400 font-sans">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-4 rounded-full font-poppins font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] w-full sm:w-auto">
              Message on WhatsApp
            </button>
          </motion.div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 h-80 sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden glass p-2"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.077651034262!2d70.76100917529322!3d22.312933079676766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c90b62e49c71%3A0xc3af7d5494d1f2a3!2sTalkhouse%20Caffe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '1.5rem', filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
