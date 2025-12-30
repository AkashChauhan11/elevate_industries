import React from 'react';
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
    <div className="bg-cream-white-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-yellow-200 to-warm-yellow-300 text-gray-800 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Certificates</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our commitment to quality, safety, and environmental responsibility is validated by international
            certifications and industry recognition
          </p>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="section-padding" style={{ backgroundColor: '#fff8e8' }}>
        <div className="container-custom">
          <div className="space-y-16">
            {certificates.map((cert, index) => (
              <div key={cert.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Certificate Image Box */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-white rounded-lg p-4 shadow-xl border border-warm-yellow-200">
                    <img
                      src={cert.image}
                      alt={`${cert.name} Certificate`}
                      className="w-full h-auto  rounded-lg object-contain"
                    />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white rounded-lg p-8 shadow-lg border border-warm-yellow-100">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-bold text-gray-800">{cert.name}</h3>
                      <span className="bg-warm-yellow-200 text-gray-800 text-sm px-3 py-1 rounded-full font-semibold">
                        {cert.type}
                      </span>
                    </div>

                    <p className="text-lg text-gray-600 mb-6">{cert.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">Key Features:</h4>
                      <ul className="space-y-2">
                        {cert.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <svg className="w-5 h-5 mr-3 text-warm-yellow-200 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates; 