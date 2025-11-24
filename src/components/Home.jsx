import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';


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

const heroBackground =
  'https://st.perplexity.ai/estatic/0b226c450798410ac541646c86ec31afd840e5beab817a5d84fa821e7db61981ec84c3b4a3f072a7a2e1899c9fb06c6eaf8d82b1e78773119a2e59f941719e1a1616947c69d4792c7e6c8e113026680c983a4b867c9ffe6ea187a855f20ee2a8';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' },
  focus: { scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' },
};

const blogPosts = [
  {
    
    image:
      'https://zprincesssaffron.vercel.app/assets/saffronjasmin-_yodorA3.webp',
    link: '#',
  },
  {
   
    image:
      'https://zprincesssaffron.vercel.app/assets/facecarenew-CDj0c9k4.jpeg',
    link: '#',
  },
  {
    
    image:
      'https://zprincesssaffron.vercel.app/assets/saffronteanew-BBEXbtuG.jpeg',
    link: '#',
  },
];

const Home = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <Link to="/about">
        <motion.div
          className="text-center mb-12 bg-cover bg-center bg-no-repeat rounded-lg py-33 px-17"
          style={{ backgroundImage: `url(${heroBackground})` }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
          Z PRINCESS SAFFRON
        </h1>
        <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
World's Finest Saffron        </p>
        <button
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        
        >
          click here to learn more about Us
        </button>
      </motion.div>
      </Link>

      {/* Cards Grid */}
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
                <h2>{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
        ))}
      </motion.div>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
          <h2 className="text-center font-extrabold text-gray-900 mb-6">Versatile Uses</h2>
          <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            {blogPosts.map(({ title, image, link }, idx) => (
              <article
                key={idx}
                className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                  <h3 className="text-center">
                    <a
                      className="text-white text-2xl font-bold text-center relative z-10"
                      href={link}
                      tabIndex={0}
                    >
                      <span className="absolute inset-0"></span>
                      {title}
                    </a>
                  </h3>
                </div>
              </article>
            ))}
          </section>
        </article>
      </section>
    </div>
  );
};

export default Home;
