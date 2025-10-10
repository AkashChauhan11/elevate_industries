import React from 'react';
import Logo from '../components/Logo';

const About = () => {
  return (
    <div className="bg-cream-white-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-yellow-200 to-warm-yellow-300 text-gray-800 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">About Elevate Industries</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Leading manufacturer of brass and aluminum components with innovation, quality, and excellence for over 7 years
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding" style={{ backgroundColor: '#fff8e8' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2018, Elevate Industries began with a vision to deliver precision brass and 
                aluminum components for diverse industrial applications. What started as a specialized 
                manufacturing unit has grown into a trusted partner for multiple industries.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our journey has been marked by continuous innovation, unwavering commitment to quality, 
                and a deep understanding of our customers' needs. Today, we operate modern manufacturing 
                facilities equipped with advanced machinery and skilled professionals dedicated to excellence.
              </p>
              <p className="text-lg text-gray-700">
                We remain true to our founding principles: exceptional craftsmanship, sustainable practices, 
                and customer-centric solutions that elevate industries through superior brass and aluminum components.
              </p>
            </div>
            <div className="relative">
              <div className="p-8 shadow-xl flex items-center justify-center min-h-96">
                <Logo className="w-48 h-48 sm:w-64 sm:h-64 rounded-full" showText={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-light-grey-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-cream-white-50 p-6 rounded-2xl shadow-lg border border-warm-yellow-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-warm-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quality</h3>
              <p className="text-gray-600">
                Uncompromising commitment to excellence in every product we manufacture
              </p>
            </div>
            
            <div className="text-center bg-cream-white-50 p-6 rounded-2xl shadow-lg border border-warm-yellow-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-warm-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                Continuously pushing boundaries to develop cutting-edge  solutions
              </p>
            </div>
            
            <div className="text-center bg-cream-white-50 p-6 rounded-2xl shadow-lg border border-warm-yellow-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-warm-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Integrity</h3>
              <p className="text-gray-600">
                Building trust through honest, transparent, and ethical business practices
              </p>
            </div>
            
            <div className="text-center bg-cream-white-50 p-6 rounded-2xl shadow-lg border border-warm-yellow-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-warm-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Sustainability</h3>
              <p className="text-gray-700">
                Committed to environmental responsibility and sustainable manufacturing practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding" style={{ backgroundColor: '#fff8e8' }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Meet the experienced professionals driving our success
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-warm-yellow-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm">
              <div className="bg-warm-yellow-200 h-48 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Hiren Gohil</h3>
                <p className="text-warm-yellow-200 font-semibold mb-3">Owner & Founder</p>
                <p className="text-gray-700">
                  Hiren founded Elevate Industries with a vision to deliver exceptional brass and aluminum components. 
                  His leadership and expertise drive our commitment to quality and innovation in manufacturing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-warm-yellow-200 text-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-cream-white-50 p-6 rounded-2xl shadow-lg border border-warm-yellow-300">
              <div className="text-4xl font-bold mb-2 text-gray-800">8+</div>
              <div className="text-gray-700 font-semibold">Years of Experience</div>
            </div>
            <div className="bg-cream-white-50 p-6 rounded-2xl shadow-lg border border-warm-yellow-300">
              <div className="text-4xl font-bold mb-2 text-gray-800">25+</div>
              <div className="text-gray-700 font-semibold">Employees</div>
            </div>
            <div className="bg-cream-white-50 p-6 rounded-2xl shadow-lg border border-warm-yellow-300">
              <div className="text-4xl font-bold mb-2 text-gray-800">50+</div>
              <div className="text-gray-700 font-semibold">Countries Served</div>
            </div>
            <div className="bg-cream-white-50 p-6 rounded-2xl shadow-lg border border-warm-yellow-300">
              <div className="text-4xl font-bold mb-2 text-gray-800">50+</div>
              <div className="text-gray-700 font-semibold">Products Manufactured</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 