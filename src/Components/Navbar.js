import React from 'react';
import logo from '../assets/logo.png'; 

export default function Navbar({ onNavClick, isDark, setIsDark, isMenuOpen, setIsMenuOpen }) {
  
  const navLinks = [
    { name: 'Home', action: () => window.scrollTo({top: 0, behavior: 'smooth'}) },
    { name: 'About', action: () => onNavClick('about') },
    { name: 'Services', action: () => onNavClick('services') },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center h-20">
        
            <div className="flex items-center shrink-0">
                <a href="/" className="bg-white py-1 rounded shadow-sm">
                    <img 
                    src={logo} 
                    alt="GymFit Logo" 
                    className="h-10 w-auto object-contain" 
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/50?text=G'; }}
                    />
                </a>
            
            </div>
        
            <div className="hidden md:flex items-center flex-1 justify-end space-x-8">
            
                <div className="flex space-x-8 text-white font-semibold">
                    {navLinks.map((link) => (
                        <button 
                            key={link.name}
                            onClick={link.action} 
                            className="hover:text-blue-500 transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
          
            <div className="flex items-center space-x-8 border-l border-gray-800 pl-6">
                <button 
                    onClick={() => onNavClick('contact')} 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all"
                >
                    Join Us
                </button>

                <button 
                    onClick={() => setIsDark(!isDark)}
                    className="ml-40 p-2 text-white rounded-full bg-gray-800 hover:bg-gray-800 border border-gray-800 transition-all"
                    title="Toggle Dark Mode"
                >
                    {isDark ? '☀️' : '🌙'}
                </button>
            </div>
        </div>

        
            <div className="md:hidden flex items-center gap-4">
                <button 
                    onClick={() => setIsDark(!isDark)}
                    className="text-white p-2 bg-gray-800 rounded-full"
                >
                    {isDark ? '☀️' : '🌙'}
                </button>
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="text-white p-2 border border-gray-700 rounded-lg"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    )}
                </button>
            </div>
        </div>

        <div className={`md:hidden absolute w-full bg-black/98 border-b border-gray-800 transition-all duration-300 z-50 ${
          isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'
        }`}>
        <div className="flex flex-col p-6 space-y-5">
          {navLinks.map((link) => (
            <button 
              key={link.name}
              onClick={() => { link.action(); setIsMenuOpen(false); }} 
              className="text-white text-xl font-bold text-left border-b border-gray-900 pb-2"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => { onNavClick('contact'); setIsMenuOpen(false); }} 
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-black text-center shadow-lg"
          >
            JOIN US NOW
          </button>
        </div>
      </div>
    </nav>
  );
}