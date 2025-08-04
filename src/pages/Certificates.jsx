import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: 'ISO 9001:2015',
      type: 'Quality Management',
      description: 'International standard for quality management systems',
      issued: '2023',
      validUntil: '2026',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      details: [
        'Quality management system certification',
        'Process improvement and customer satisfaction',
        'Continuous improvement framework',
        'Risk-based thinking approach'
      ]
    },
    {
      id: 2,
      name: 'ISO 14001:2015',
      type: 'Environmental Management',
      description: 'Environmental management system certification',
      issued: '2023',
      validUntil: '2026',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      details: [
        'Environmental impact reduction',
        'Sustainable manufacturing practices',
        'Compliance with environmental regulations',
        'Resource efficiency optimization'
      ]
    },
    {
      id: 3,
      name: 'OHSAS 18001:2007',
      type: 'Occupational Health & Safety',
      description: 'Occupational health and safety management system',
      issued: '2023',
      validUntil: '2026',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      details: [
        'Workplace safety standards',
        'Employee health protection',
        'Hazard identification and control',
        'Safety training and awareness'
      ]
    },
    {
      id: 4,
      name: 'ASME BPVC',
      type: 'Boiler & Pressure Vessel Code',
      description: 'American Society of Mechanical Engineers certification',
      issued: '2022',
      validUntil: '2025',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      details: [
        'Pressure vessel manufacturing',
        'Safety standards compliance',
        'Quality assurance protocols',
        'Design and fabrication standards'
      ]
    },
    {
      id: 5,
      name: 'API 6A',
      type: 'Wellhead & Christmas Tree Equipment',
      description: 'American Petroleum Institute certification',
      issued: '2022',
      validUntil: '2025',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      details: [
        'Oil and gas equipment standards',
        'Wellhead equipment manufacturing',
        'High-pressure applications',
        'Industry-specific requirements'
      ]
    },
    {
      id: 6,
      name: 'CE Marking',
      type: 'European Conformity',
      description: 'European Union conformity assessment',
      issued: '2023',
      validUntil: '2028',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      details: [
        'European market compliance',
        'Product safety standards',
        'Free movement within EU',
        'Consumer protection requirements'
      ]
    }
  ];

  const awards = [
    {
      id: 1,
      name: 'Excellence in Manufacturing',
      organization: 'Manufacturing Excellence Awards',
      year: '2023',
      description: 'Recognition for outstanding quality and innovation in brass manufacturing'
    },
    {
      id: 2,
      name: 'Supplier of the Year',
      organization: 'Industrial Supply Association',
      year: '2022',
      description: 'Awarded for exceptional service and product quality to major industrial clients'
    },
    {
      id: 3,
      name: 'Environmental Stewardship',
      organization: 'Green Manufacturing Initiative',
      year: '2023',
      description: 'Recognition for sustainable practices and environmental responsibility'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brass-600 to-brass-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Certificates & Awards</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our commitment to quality, safety, and environmental responsibility is validated by international 
            certifications and industry recognition
          </p>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Certifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards through internationally recognized certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-brass-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div className="text-sm text-gray-500">Certificate</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{cert.name}</h3>
                    <span className="bg-brass-100 text-brass-800 text-xs px-2 py-1 rounded-full">
                      {cert.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Issued: {cert.issued}</span>
                    <span>Valid: {cert.validUntil}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {cert.details.map((detail, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-3 h-3 mr-2 text-brass-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full btn-secondary">
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Awards</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition for our excellence in manufacturing and commitment to quality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div key={award.id} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-brass-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brass-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{award.name}</h3>
                <p className="text-brass-600 font-semibold mb-2">{award.organization}</p>
                <p className="text-gray-600 mb-3">{award.description}</p>
                <span className="bg-brass-100 text-brass-800 text-sm px-3 py-1 rounded-full">
                  {award.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Quality Commitment</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Elevate Industries, quality is not just a certification—it's a fundamental part of our 
                culture. Every product we manufacture undergoes rigorous testing and quality control processes 
                to ensure it meets the highest standards.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our certifications demonstrate our commitment to continuous improvement, environmental 
                responsibility, and workplace safety. We invest in the latest technology and training to 
                maintain these high standards across all our operations.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brass-600 mb-2">100%</div>
                  <div className="text-gray-600">Quality Tested</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brass-600 mb-2">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brass-600 mb-2">6</div>
                  <div className="text-gray-600">Major Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brass-600 mb-2">3</div>
                  <div className="text-gray-600">Industry Awards</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brass-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Raw Material Inspection</h4>
                    <p className="text-gray-600">Thorough testing of incoming brass materials</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brass-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">In-Process Quality Control</h4>
                    <p className="text-gray-600">Continuous monitoring during manufacturing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brass-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Final Product Testing</h4>
                    <p className="text-gray-600">Comprehensive testing before shipment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-brass-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Documentation & Traceability</h4>
                    <p className="text-gray-600">Complete records for quality assurance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates; 