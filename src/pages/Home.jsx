import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const productCardVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ctext x='30' y='30' text-anchor='middle' font-family='Arial' font-size='12'%3EELEVATE%3C/text%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Panel - Product Display */}
            <motion.div 
              className="lg:col-span-5"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-white rounded-3xl p-8 shadow-2xl border border-amber-200"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="grid grid-cols-4 gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {/* Brass Components Grid */}
                  {Array.from({ length: 20 }).map((_, index) => (
                    <motion.div
                      key={index}
                      className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg shadow-md flex items-center justify-center"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.6 + index * 0.05, 
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="w-6 h-6 bg-amber-200 rounded-sm"></div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Center Panel - Company Info */}
            <motion.div 
              className="lg:col-span-4 text-center"
              variants={itemVariants}
            >
              <motion.div variants={textVariants}>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 font-serif">
                  Elevate Industries
                </h1>
              </motion.div>
              
              <motion.div variants={textVariants}>
                <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-md mx-auto">
                  Ready to elevate your projects with premium brass components?
                </p>
              </motion.div>

              <motion.div 
                className="flex justify-center space-x-4"
                variants={textVariants}
              >
                <motion.button
                  className="w-10 h-10 bg-elevate-gold rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                <motion.button
                  className="w-10 h-10 bg-elevate-gold rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Panel - Product Categories */}
            <motion.div 
              className="lg:col-span-3 space-y-6"
              variants={itemVariants}
            >
              {/* Brass Inserts */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-xl border border-amber-200"
                variants={productCardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-xl mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-8 h-8 bg-amber-200 rounded-full"></div>
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Brass Inserts</h3>
                <p className="text-sm text-gray-600">Precision threaded components</p>
              </motion.div>

              {/* Brass Fasteners */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-xl border border-amber-200"
                variants={productCardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Brass Fasteners</h3>
                <p className="text-sm text-gray-600">Industrial strength hardware</p>
              </motion.div>

              {/* Brass Valves */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-xl border border-amber-200"
                variants={productCardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-8 h-8 bg-blue-300 rounded-lg"></div>
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Brass Valves</h3>
                <p className="text-sm text-gray-600">Flow control solutions</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Link to="/products" className="btn-primary">
            Explore Our Products
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left Panel - Logo */}
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
            >
              <motion.div 
                className="relative"
                 
                whileHover="hover"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 0.9, type: "spring" }}
              >
                {/* Main Logo Container */}
                <div className="  rounded-3xl  shadow-2xl border border-amber-200 relative overflow-hidden">
                
                  {/* Logo Image */}
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div 
                    >
                      <img 
                        src="/src/assets/logo.jpeg" 
                        alt="Elevate Industries Logo" 
                        className="  object-contain"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Panel - Content */}
            <motion.div 
              className="space-y-8"
              variants={itemVariants}
            >
              {/* Headings */}
              <motion.div 
                className="space-y-4"
                variants={textVariants}
              >
                <div className="flex items-center space-x-6">
                  <h2 className="text-3xl font-serif font-bold text-gray-900 bg-yellow-300 px-4 py-2 rounded">
                    About Us
                  </h2>
                  
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  </div>
                  <div className="w-16 h-0.5 bg-gray-900"></div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div 
                className="space-y-6"
                variants={textVariants}
              >
                <p className="text-lg text-gray-800 leading-relaxed">
                  We are a leading manufacturer of Builders Brass Hardware fittings since 1988, 
                  producing exclusive quality brass products under our prestigious brands "RAJBADRI," 
                  "RBP," and "STS." Our commitment to excellence and innovation has made us a trusted 
                  name in the industry.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Currently supplying our premium brass hardware across India, we are strategically 
                  expanding our reach to serve customers in the Gulf, Europe, and Africa. Our 
                  state-of-the-art manufacturing facilities ensure consistent quality and timely 
                  delivery of all our products.
                </p>
              </motion.div>

              {/* Know More Button */}
              <motion.div
                variants={textVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about" className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg">
                  Know More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover what sets Elevate Industries apart from the competition. Our commitment to excellence, 
              innovation, and customer satisfaction drives everything we do.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUsItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="w-16 h-16 bg-elevate-gold rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-gray-900">
                    {item.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-elevate-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive brass manufacturing solutions tailored to your industry needs
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="w-12 h-12 bg-elevate-gold rounded-xl flex items-center justify-center mb-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Custom Manufacturing</h3>
              <p className="text-gray-700">
                Tailored brass solutions designed to meet your specific requirements and industry standards.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="w-12 h-12 bg-elevate-gold rounded-xl flex items-center justify-center mb-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Assurance</h3>
              <p className="text-gray-700">
                Rigorous testing and quality control processes ensure every product meets our high standards.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="w-12 h-12 bg-elevate-gold rounded-xl flex items-center justify-center mb-4 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Global Distribution</h3>
              <p className="text-gray-700">
                Efficient logistics and worldwide distribution network for timely delivery to your location.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-elevate-gold">
        <motion.div 
          className="container-custom text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Elevate Your Project?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your brass manufacturing needs and discover how we can help 
            bring your vision to life.
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn-secondary bg-gray-900 text-elevate-gold border-gray-900 hover:bg-gray-800 shadow-lg">
                Get in Touch
              </Link>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/products" className="btn-secondary border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-elevate-gold shadow-lg">
                View Products
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home; 