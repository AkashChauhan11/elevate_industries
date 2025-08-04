import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Home = () => {
  const carouselItems = [
    {
      title: "Premium Brass Solutions",
      description: "Leading manufacturer of high-quality brass products for industrial applications worldwide",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      products: [
        { name: "Brass Fittings", description: "Precision-engineered connectors" },
        { name: "Brass Valves", description: "Reliable flow control solutions" },
        { name: "Brass Components", description: "Custom industrial parts" }
      ]
    },
    {
      title: "Quality Craftsmanship",
      description: "Over 25 years of experience in brass manufacturing with unmatched precision and durability",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      products: [
        { name: "Brass Pipes", description: "Corrosion-resistant tubing" },
        { name: "Brass Hardware", description: "Industrial fasteners" },
        { name: "Brass Alloys", description: "Specialized material solutions" }
      ]
    },
    {
      title: "Global Excellence",
      description: "Serving industries across the globe with innovative brass solutions and exceptional service",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      products: [
        { name: "Brass Castings", description: "Complex molded components" },
        { name: "Brass Extrusions", description: "Custom profile solutions" },
        { name: "Brass Finishing", description: "Surface treatment services" }
      ]
    }
  ];

  const whyChooseUsItems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "25+ Years of Excellence",
      description: "Decades of experience in brass manufacturing with proven track record of delivering quality products."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "ISO Certified Quality",
      description: "International quality standards compliance ensuring consistent excellence in every product."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Global Supply Network",
      description: "Worldwide distribution capabilities ensuring timely delivery to any location across the globe."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Custom Solutions",
      description: "Tailored manufacturing solutions designed to meet your specific requirements and industry standards."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation & Technology",
      description: "State-of-the-art manufacturing facilities and cutting-edge technology for superior product quality."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Support Team",
      description: "Dedicated customer service and technical support to assist you throughout your project journey."
    }
  ];

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel items={carouselItems} />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <Link to="/products" className="btn-primary">
            Explore Our Products
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Elevating Industry Standards
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Elevate Industries has been at the forefront of brass manufacturing for over 25 years. 
                Our commitment to quality, innovation, and customer satisfaction has made us a trusted 
                partner for industries worldwide.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From precision-engineered fittings to custom components, we deliver solutions that 
                meet the highest standards of durability and performance. Our state-of-the-art 
                manufacturing facilities ensure consistent quality across all our products.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="relative">
              <div className="bg-elevate-gold rounded-lg p-8 text-black">
                <h3 className="text-2xl font-bold mb-4">Why Choose Elevate Industries?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    25+ Years of Experience
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    ISO Certified Quality
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Global Supply Network
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom Solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover what sets Elevate Industries apart from the competition. Our commitment to excellence, 
              innovation, and customer satisfaction drives everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg border border-elevate-gold hover:border-elevate-gold-light transition-all duration-300 group">
                <div className="w-16 h-16 bg-elevate-gold rounded-lg flex items-center justify-center mb-6 group-hover:bg-elevate-gold-light transition-colors duration-300">
                  <div className="text-black">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-elevate-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive brass manufacturing solutions tailored to your industry needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg shadow-lg border border-elevate-gold">
              <div className="w-12 h-12 bg-elevate-gold rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Custom Manufacturing</h3>
              <p className="text-gray-300">
                Tailored brass solutions designed to meet your specific requirements and industry standards.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg shadow-lg border border-elevate-gold">
              <div className="w-12 h-12 bg-elevate-gold rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Quality Assurance</h3>
              <p className="text-gray-300">
                Rigorous testing and quality control processes ensure every product meets our high standards.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg shadow-lg border border-elevate-gold">
              <div className="w-12 h-12 bg-elevate-gold rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Global Distribution</h3>
              <p className="text-gray-300">
                Efficient logistics and worldwide distribution network for timely delivery to your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-elevate-gold">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-black mb-4">
            Ready to Elevate Your Project?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your brass manufacturing needs and discover how we can help 
            bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary bg-black text-elevate-gold border-black hover:bg-gray-900">
              Get in Touch
            </Link>
            <Link to="/products" className="btn-secondary border-black text-black hover:bg-black hover:text-elevate-gold">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 