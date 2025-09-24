import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-earth-brown-800 text-cream-white-100 border-t border-warm-yellow-200">
      <div className="container-custom py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Logo className="w-16 h-16 sm:w-20 sm:h-20 mb-4" />
            <p className="text-cream-white-200 mb-4 max-w-md">
              Elevate Industries is a leading manufacturer of high-quality brass products, 
              serving industries worldwide with precision engineering and superior craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-warm-yellow-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-cream-white-200 hover:text-warm-yellow-200 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-cream-white-200 hover:text-warm-yellow-200 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-cream-white-200 hover:text-warm-yellow-200 transition-colors">Products</Link></li>
              <li><Link to="/certificates" className="text-cream-white-200 hover:text-warm-yellow-200 transition-colors">Certificates</Link></li>
              <li><Link to="/contact" className="text-cream-white-200 hover:text-warm-yellow-200 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-warm-yellow-200">Contact Info</h3>
            <div className="space-y-2 text-cream-white-200">               
              <p>PLOT NO-224, GIDC, PHASE-II</p>
              <p>DARED, JAMNAGAR,</p>
              <p>Gujarat, 361006</p>
              <p className="mt-4">
                <span className="font-semibold text-warm-yellow-200">Phone:</span> 
                <a href="tel:+919824895049" className="text-cream-white-200 hover:text-warm-yellow-200 transition-colors ml-2">
                  +91 98248 95049
                </a>
              </p>
              <p>
                <span className="font-semibold text-warm-yellow-200">Email:</span> 
                <a href="mailto:elevateind123@gmail.com" className="text-cream-white-200 hover:text-warm-yellow-200 transition-colors ml-2">
                  elevateind123@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-yellow-200 mt-8 pt-8 text-center text-cream-white-300">
          <p>&copy; 2025 Elevate Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 