import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import isoCertificate from '../assets/certificate/iso.jpg';
import zedBronzeCertificate from '../assets/certificate/zed-bronze.jpg';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: 'ISO 9001:2015',
      type: 'Quality Management',
      description: 'International standard for quality management systems',
      issued: '2023',
      validUntil: '2026',
      image: isoCertificate,
      details: [
        'Quality management system certification',
        'Process improvement and customer satisfaction',
        'Continuous improvement framework',
        'Risk-based thinking approach'
      ]
    },
    {
      id: 2,
      name: 'ZED Bronze',
      type: 'Manufacturing Excellence',
      description: 'Zero Defect Zero Effect certification for manufacturing excellence',
      issued: '2023',
      validUntil: '2026',
      image: zedBronzeCertificate,
      details: [
        'Zero defect manufacturing practices',
        'Waste reduction and efficiency',
        'Quality control excellence',
        'Sustainable production methods'
      ]
    }
  ];

  return (
    <div className="bg-cream">
      <PageHero eyebrow="Accreditations" title="Certificates">
        Our commitment to quality, safety, and environmental responsibility is validated by international
        certifications and industry recognition
      </PageHero>

      {/* Certificates Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="space-y-20">
            {certificates.map((cert, index) => {
              const flipped = index % 2 === 1;
              return (
                <motion.div
                  key={cert.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Certificate Image */}
                  <div className={flipped ? 'lg:order-2' : ''}>
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-[1.75rem] bg-brass-gradient opacity-20 blur-lg" />
                      <div className="relative card p-4">
                        <img
                          src={cert.image}
                          alt={`${cert.name} Certificate`}
                          className="w-full h-auto rounded-xl object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className={flipped ? 'lg:order-1' : ''}>
                    <div className="card p-9">
                      <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                        <h3 className="font-serif text-3xl font-bold text-espresso">{cert.name}</h3>
                        <span className="bg-brass-gradient text-espresso-900 text-xs px-4 py-1.5 rounded-full font-semibold uppercase tracking-wider">
                          {cert.type}
                        </span>
                      </div>

                      <p className="text-clay text-lg mb-5">{cert.description}</p>

                      <div className="flex items-center gap-2 text-sm text-clay-light mb-7 pb-7 border-b border-line">
                        <svg className="w-4 h-4 text-brass-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Issued {cert.issued} · Valid until {cert.validUntil}
                      </div>

                      <div>
                        <h4 className="eyebrow no-rule mb-4">Key Features</h4>
                        <ul className="space-y-3 mt-4">
                          {cert.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <span className="w-6 h-6 rounded-full bg-cream-200 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                                <svg className="w-3.5 h-3.5 text-brass-dark" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <span className="text-espresso">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
