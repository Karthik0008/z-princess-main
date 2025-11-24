import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/features' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white/80 backdrop-blur shadow-lg rounded-b-xl sticky top-0 z-50 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-blue-600 hover:text-blue-700 transition">
Z PRINCESS SAFFRON            </Link>
          </div>
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-2 py-1 rounded transition font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                  ${location.pathname === link.path
                    ? 'text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-100/60'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 hover:text-blue-600 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`
          md:hidden bg-white/95 shadow-lg rounded-b-xl overflow-hidden transition-all duration-300
          ${menuOpen ? 'max-h-60 py-2 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'}
        `}
        style={{ transitionProperty: 'max-height, opacity, padding' }}
      >
        <div className="px-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 px-2 rounded font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                ${location.pathname === link.path
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-100/60'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
