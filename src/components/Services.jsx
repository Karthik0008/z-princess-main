import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Transparency',
    description: 'We provide detailed information about the origin and processing of our saffron, so you know exactly what you',
  },
  {
    title: 'Innovation',
    description: 'We continuously explore new ways to enhance the quality and usability of our saffron, ensuring we stay ahead of the market.',
  },
  {
    title: 'Passion',
    description: 'Our passion for saffron drives us to maintain the highest standards and share this incredible spice with the world.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' },
};

const Features = () => (
  <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
    <div className="max-w-5xl mx-auto text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-4">
        WHAT SET US APART
      </h2>
     
    </div>
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {features.map((feature, idx) => (
        <motion.div
          key={idx}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col items-center text-center"
          variants={cardVariants}
          whileHover="hover"
        >

          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
    <h1 className="text-center">SUBSCRIBE TO OUR NEWSLETTER</h1>
    <div className="mt-6 max-w-md mx-auto flex">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Subscribe
      </button>
    </div>
  </section>
);

export default Features;
