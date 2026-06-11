import React from 'react';
import logoImage from '../assets/logo.jpeg';

const Logo = ({ className = "w-12 h-12", showText = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Image */}
      <div className="relative shrink-0 h-full aspect-square">
        <img
          src={logoImage}
          alt="Elevate Industries Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Company name */}
      {showText && (
        <div className="ml-3 text-left leading-none">
          <div className="font-serif text-xl font-bold tracking-wide text-brass-light leading-tight">
            ELEVATE
          </div>
          <div className="font-serif text-[0.7rem] font-semibold tracking-[0.3em] text-cream-200/80">
            INDUSTRIES
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
