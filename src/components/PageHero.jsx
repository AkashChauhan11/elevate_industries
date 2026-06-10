import React from 'react';
import { motion } from 'framer-motion';

/**
 * Shared hero banner for inner pages (About, Products, Certificates, Contact).
 * Espresso ground with brass accents — premium contrast against the cream body.
 */
const PageHero = ({ eyebrow, title, children }) => {
  return (
    <section className="relative bg-espresso-900 overflow-hidden">
      <div className="h-[3px] w-full bg-brass-gradient" />
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-brass/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 rounded-full bg-brass-light/10 blur-3xl pointer-events-none" />

      <div className="container-custom section-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {eyebrow && (
            <span className="eyebrow no-rule mb-5 !text-brass-light justify-center">{eyebrow}</span>
          )}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream mt-4 mb-6 text-balance">
            {title}
          </h1>
          <div className="text-cream/75 text-lg leading-relaxed max-w-3xl mx-auto">
            {children}
          </div>
        </motion.div>
      </div>
      <div className="h-px w-full bg-brass-gradient opacity-60" />
    </section>
  );
};

export default PageHero;
