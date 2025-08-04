import React from 'react';
import Logo from '../components/Logo';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-elevate-gold to-elevate-gold-dark text-black section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">About Elevate Industries</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Leading the brass manufacturing industry with innovation, quality, and excellence for over 25 years
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 1998, Elevate Industries began as a small family-owned workshop with a vision 
                to revolutionize brass manufacturing. What started with just three employees and a single 
                production line has grown into a global enterprise serving industries worldwide.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our journey has been marked by continuous innovation, unwavering commitment to quality, 
                and a deep understanding of our customers' needs. Today, we operate state-of-the-art 
                manufacturing facilities across multiple continents, employing over 500 skilled professionals.
              </p>
              <p className="text-lg text-gray-300">
                We remain true to our founding principles: exceptional craftsmanship, sustainable practices, 
                and customer-centric solutions that elevate industries around the world.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-8 border border-elevate-gold">
                <div className="text-center">
                  <Logo className="w-24 h-24 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-300 mb-6">
                    To provide innovative brass solutions that empower industries to achieve their highest potential 
                    while maintaining the highest standards of quality and sustainability.
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300">
                    To be the global leader in brass manufacturing, setting industry standards for excellence, 
                    innovation, and environmental responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-elevate-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Quality</h3>
              <p className="text-gray-300">
                Uncompromising commitment to excellence in every product we manufacture
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-elevate-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovation</h3>
              <p className="text-gray-300">
                Continuously pushing boundaries to develop cutting-edge brass solutions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-elevate-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Integrity</h3>
              <p className="text-gray-300">
                Building trust through honest, transparent, and ethical business practices
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-elevate-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Sustainability</h3>
              <p className="text-gray-300">
                Committed to environmental responsibility and sustainable manufacturing practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Meet the experienced professionals driving our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-elevate-gold">
              <div className="bg-elevate-gold h-48 flex items-center justify-center">
                <svg className="w-24 h-24 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">John Smith</h3>
                <p className="text-elevate-gold font-semibold mb-3">Chief Executive Officer</p>
                <p className="text-gray-300">
                  With over 20 years of experience in manufacturing, John leads our company with vision and expertise.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-elevate-gold">
              <div className="bg-elevate-gold h-48 flex items-center justify-center">
                <svg className="w-24 h-24 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Sarah Johnson</h3>
                <p className="text-elevate-gold font-semibold mb-3">Chief Operations Officer</p>
                <p className="text-gray-300">
                  Sarah oversees all manufacturing operations, ensuring efficiency and quality across our facilities.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-elevate-gold">
              <div className="bg-elevate-gold h-48 flex items-center justify-center">
                <svg className="w-24 h-24 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Michael Chen</h3>
                <p className="text-elevate-gold font-semibold mb-3">Chief Technology Officer</p>
                <p className="text-gray-300">
                  Michael drives innovation and technology adoption across our manufacturing processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-elevate-gold text-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-800">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-800">Employees Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-800">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-gray-800">Products Manufactured</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 