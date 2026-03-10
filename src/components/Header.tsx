import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🕌</span>
            <h1 className="text-xl md:text-2xl font-semibold tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Since Gulf Bazar</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-amber-400 transition">Home</a>
            <a href="#products" className="hover:text-amber-400 transition">Products</a>
            <a href="#about" className="hover:text-amber-400 transition">About</a>
            <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#home" className="block hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#products" className="block hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="#about" className="block hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="block hover:text-amber-400 transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
