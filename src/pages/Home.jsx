import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroCarousel from '../components/HeroCarousel';
import partsImage from '../assets/parts.jpeg';
import logoImage from '../assets/logo.jpeg';
import brassHero from '../assets/hero/brass.jpg';
import aluHero from '../assets/hero/aluminum.jpg';
import ssHero from '../assets/hero/ss.jpg';
import brass13 from '../assets/parts/brass-13.png';
import brass14 from '../assets/parts/brass-14.png';
import alu15 from '../assets/parts/alu-15.png';

// ---- Shared motion variants -------------------------------------------------
const fadeUp = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const Home = () => {
  const stats = [
    { value: '7+', label: 'Years Experience' },
    { value: '25+', label: 'Employees' },
    { value: '50+', label: 'Countries Served' },
    { value: '50+', label: 'Products' },
  ];

  const whyChooseUsItems = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '7+ Years of Excellence',
      description: 'Year of experience in brass and aluminum manufacturing with proven track record of delivering quality products.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'ISO Certified Quality',
      description: 'International quality standards compliance ensuring consistent excellence in every product.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: 'Large Supply Network',
      description: 'Large distribution capabilities ensuring timely delivery to any location.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Custom Solutions',
      description: 'Tailored manufacturing solutions designed to meet your specific requirements and industry standards.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation & Technology',
      description: 'State-of-the-art manufacturing facilities and cutting-edge technology for superior product quality.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Expert Workers',
      description: 'Expert workers and skilled craftsmen dedicated to delivering finest quality and precision in every brass and aluminum component.',
    },
  ];

  const services = [
    {
      title: 'Custom Manufacturing',
      description: 'Tailored brass solutions designed to meet your specific requirements and industry standards.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure every product meets our high standards.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Global Distribution',
      description: 'Efficient logistics and worldwide distribution network for timely delivery to your location.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
  ];

  const heroSlides = [
    { img: partsImage, name: 'Precision Components', short: 'Overview', alt: 'Assorted precision brass and aluminum components' },
    { img: brassHero, name: 'Brass Parts', short: 'Brass', alt: 'Machined golden brass components' },
    { img: aluHero, name: 'Aluminum Parts', short: 'Aluminum', alt: 'Silver machined aluminum components' },
    { img: ssHero, name: 'MS / SS Parts', short: 'MS / SS', alt: 'Stainless and mild steel components' },
  ];

  const topProducts = [brass13, alu15, brass14];

  return (
    <div className="bg-cream">
      {/* ============================= HERO (cinematic carousel) ============================= */}
      <HeroCarousel slides={heroSlides} href="/products">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.span variants={fadeUp} className="eyebrow !text-brass-light mb-6">
            ISO 9001:2015 · ZED Bronze Certified
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-cream leading-[1.04] mt-5 mb-6 text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
          >
            Elevate <span className="italic text-brass-light">Industries</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-cream/90 text-lg sm:text-xl max-w-xl mb-9 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
          >
            Ready to elevate your projects with premium brass components?
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pointer-events-auto">
            <Link to="/products" className="btn-gold">
              Explore Our Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-cream/40 text-cream font-semibold py-3 px-7 rounded-xl transition-all duration-300 hover:bg-cream hover:text-espresso-900 hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </HeroCarousel>

      {/* ============================= TRUST STRIP ============================= */}
      <section className="bg-espresso-900 relative overflow-hidden">
        <div className="h-px w-full bg-brass-gradient opacity-60" />
        <div className="container-custom px-5 sm:px-6 lg:px-8 py-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-bold text-brass-light">{s.value}</div>
                <div className="text-cream/70 text-sm font-medium mt-1 tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="h-px w-full bg-brass-gradient opacity-60" />
      </section>

      {/* ============================= ABOUT ============================= */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Logo */}
            <motion.div className="flex justify-center" variants={fadeUp}>
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-brass-gradient opacity-20 blur-2xl" />
                <img
                  src={logoImage}
                  alt="Elevate Industries Logo"
                  className="relative w-60 h-60 sm:w-80 sm:h-80 object-contain rounded-3xl"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div className="space-y-7" variants={fadeUp}>
              <span className="eyebrow">About Us</span>
              <h2 className="section-title">
                Crafting precision in <span className="italic text-brass-dark">brass &amp; aluminum</span>
              </h2>
              <p className="lead">
                Elevate Industries is a premier manufacturer specializing in precision brass and
                aluminum components for diverse industrial applications. With our advanced
                manufacturing capabilities, we produce high-quality fittings, hardware, and
                custom components that meet the most demanding specifications across various sectors.
              </p>
              <p className="lead">
                Our comprehensive product range includes brass hardware fittings, aluminum
                components, and specialized metal parts for construction, automotive, electrical,
                and industrial applications. We serve clients across India with our commitment
                to delivering superior quality products through advanced manufacturing processes,
                strict quality control, and precision engineering excellence.
              </p>
              <Link to="/about" className="btn-primary">
                Know More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================= WHY CHOOSE US ============================= */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow no-rule mb-4">Why Choose Us</span>
            <h2 className="section-title mt-4 mb-5">Built on precision &amp; trust</h2>
            <p className="lead">
              Discover what sets Elevate Industries apart from the competition. Our commitment to excellence,
              innovation, and customer satisfaction drives everything we do.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUsItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="card card-hover p-8 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cream-200 text-brass-dark flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-brass-gradient group-hover:text-espresso-900">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-espresso mb-3">{item.title}</h3>
                <p className="text-clay leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================= TOP PRODUCTS ============================= */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow no-rule mb-4">Top Products</span>
            <h2 className="section-title mt-4 mb-5">Components trusted worldwide</h2>
            <p className="lead">
              Discover our most popular brass and aluminum components trusted by industries worldwide
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {topProducts.map((img, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="card card-hover overflow-hidden group"
              >
                <div className="h-56 flex items-center justify-center bg-light-grey-400 overflow-hidden">
                  <img
                    src={img}
                    alt="Featured product"
                    className="object-contain h-full w-full p-6 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/products" className="btn-primary">
              See All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================= SERVICES ============================= */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow no-rule mb-4">Our Services</span>
            <h2 className="section-title mt-4 mb-5">Solutions tailored to industry</h2>
            <p className="lead">
              Comprehensive brass manufacturing solutions tailored to your industry needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="card card-hover p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-brass-gradient text-espresso-900 flex items-center justify-center mb-5 shadow-brass">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-espresso mb-3">{service.title}</h3>
                <p className="text-clay leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================= CTA ============================= */}
      <section className="relative section-padding bg-espresso-900 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-brass/10 blur-3xl pointer-events-none" />
        <motion.div
          className="container-custom text-center relative z-10"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow no-rule mb-4 !text-brass-light">Let's Build Together</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mt-4 mb-5">
            Ready to Elevate Your Project?
          </h2>
          <p className="text-cream/75 text-lg max-w-2xl mx-auto mb-10">
            Contact us today to discuss your brass manufacturing needs and discover how we can help
            bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold">Get in Touch</Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-cream/30 text-cream font-semibold py-3 px-7 rounded-xl transition-all duration-300 hover:bg-cream hover:text-espresso-900 hover:-translate-y-0.5"
            >
              View Products
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
