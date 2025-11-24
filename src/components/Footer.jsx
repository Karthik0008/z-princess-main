import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className=" w-full z-40 bg-gray-900/95 backdrop-blur text-gray-200 py-4 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      {/* Branding */}
      <div className="mb-2 md:mb-0 flex items-center">
        <span className="font-bold text-xl text-blue-400">Z PRINCESS SAFFRON</span>
        <span className="ml-2 text-sm text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
      {/* Footer Links */}
      <div className="flex space-x-6">
          <Link to={"/"}>
          <a
         
          className="hover:text-blue-400 hover:underline underline-offset-4 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          Home
        </a>
        </Link>
        <Link to={"/features"}>
          <a
            className="hover:text-blue-400 hover:underline underline-offset-4 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          >
            Our Services
        </a>
        </Link>
        <Link to={"/about"}>
        <a
          
          className="hover:text-blue-400 hover:underline underline-offset-4 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          About
        </a>
        </Link>
        <Link to={"/contact"}>
        <a
         
          className="hover:text-blue-400 hover:underline underline-offset-4 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          Contact
        </a>
        </Link>
      </div>
    </div>
    <div className="text-center mt-4 text-sm text-gray-400">
      <p>
        Built with <span className="text-red-500">♥</span> by <a href="https://yourwebsite.com" className="hover:text-blue-400">Our Team</a>
      </p>
    </div>


  </footer>
);

export default Footer;
