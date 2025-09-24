import React from 'react';
import logoImage from '../assets/logo.jpeg';

const Logo = ({ className = "w-12 h-12", showText = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Image */}
      <div className="relative">
        <img 
          src={logoImage}
          alt="Elevate Industries Logo"
          className="w-full h-full object-contain border-0 outline-none"
        />
      </div>
      
      {/* Company name */}
      {showText && (
        <div className="ml-3 text-left">
          <div className="text-warm-yellow-200 font-serif text-xl font-bold leading-tight">
            ELEVATE
          </div>
          <div className="text-warm-yellow-200 font-serif text-sm font-semibold tracking-wide">
            INDUSTRIES
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo; 