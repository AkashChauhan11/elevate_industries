import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';
import PageHero from '../components/PageHero';

const fadeUp = {
  hidden: { y: 26, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const About = () => {
  const values = [
    {
      title: 'Quality',
      description: 'Uncompromising commitment to excellence in every product we manufacture',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description: 'Continuously pushing boundaries to develop cutting-edge  solutions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description: 'Building trust through honest, transparent, and ethical business practices',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Sustainability',
      description: 'Committed to environmental responsibility and sustainable manufacturing practices',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: '8+', label: 'Years of Experience' },
    { value: '25+', label: 'Employees' },
    { value: '50+', label: 'Countries Served' },
    { value: '50+', label: 'Products Manufactured' },
  ];

  return (
    <div className="bg-cream">
      <PageHero eyebrow="Our Company" title="About Elevate Industries">
        Leading manufacturer of brass and aluminum components with innovation, quality, and excellence for over 7 years
      </PageHero>

      {/* Company Story */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.span variants={fadeUp} className="eyebrow">Our Story</motion.span>
              <motion.h2 variants={fadeUp} className="section-title">
                A vision shaped by <span className="italic text-brass-dark">craftsmanship</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="lead">
                Founded in 2018, Elevate Industries began with a vision to deliver precision brass and
                aluminum components for diverse industrial applications. What started as a specialized
                manufacturing unit has grown into a trusted partner for multiple industries.
              </motion.p>
              <motion.p variants={fadeUp} className="lead">
                Our journey has been marked by continuous innovation, unwavering commitment to quality,
                and a deep understanding of our customers' needs. Today, we operate modern manufacturing
                facilities equipped with advanced machinery and skilled professionals dedicated to excellence.
              </motion.p>
              <motion.p variants={fadeUp} className="lead">
                We remain true to our founding principles: exceptional craftsmanship, sustainable practices,
                and customer-centric solutions that elevate industries through superior brass and aluminum components.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-brass-gradient opacity-20 blur-2xl" />
                <Logo className="relative w-52 h-52 sm:w-72 sm:h-72" showText={false} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow no-rule mb-4">What Drives Us</span>
            <h2 className="section-title mt-4 mb-5">Our Core Values</h2>
            <p className="lead">The principles that guide everything we do</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="card card-hover p-8 text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-cream-200 text-brass-dark flex items-center justify-center mx-auto mb-5 transition-colors duration-300 group-hover:bg-brass-gradient group-hover:text-espresso-900">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-espresso mb-3">{value.title}</h3>
                <p className="text-clay leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow no-rule mb-4">Leadership</span>
            <h2 className="section-title mt-4 mb-5">Leadership Team</h2>
            <p className="lead">Meet the experienced professionals driving our success</p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card card-hover overflow-hidden max-w-sm">
              <div className="bg-brass-gradient h-48 flex items-center justify-center">
                <svg className="w-24 h-24 text-espresso-900/80" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl font-bold text-espresso mb-1">Hiren Gohil</h3>
                <p className="text-brass-dark font-semibold mb-4 text-sm uppercase tracking-wider">Owner &amp; Founder</p>
                <p className="text-clay leading-relaxed">
                  Hiren founded Elevate Industries with a vision to deliver exceptional brass and aluminum components.
                  His leadership and expertise drive our commitment to quality and innovation in manufacturing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative section-padding bg-espresso-900 overflow-hidden">
        <div className="h-px w-full bg-brass-gradient opacity-60 absolute top-0 left-0" />
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div className="container-custom relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="text-center"
              >
                <div className="font-serif text-5xl font-bold text-brass-light mb-2">{stat.value}</div>
                <div className="text-cream/70 font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
