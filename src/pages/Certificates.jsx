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
      details: [
        'Environmental impact reduction',
        'Sustainable manufacturing practices',
        'Compliance with environmental regulations',
        'Resource efficiency optimization'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-elevate-gold to-yellow-500 text-gray-900 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Certificates</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our commitment to quality, safety, and environmental responsibility is validated by international 
            certifications and industry recognition
          </p>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Certifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards through internationally recognized certifications
            </p>
          </div> */}
          
          <div className="space-y-16">
            {certificates.map((cert, index) => (
              <div key={cert.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Certificate Image Box */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-500 font-medium">Certificate Image</p>
                      <p className="text-gray-400 text-sm">Will be added later</p>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-bold text-gray-900">{cert.name}</h3>
                      <span className="bg-elevate-gold text-gray-900 text-sm px-3 py-1 rounded-full font-semibold">
                        {cert.type}
                      </span>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">{cert.description}</p>
                    
                    <div className="flex justify-between text-sm text-gray-500 mb-6">
                      <span className="bg-gray-100 px-3 py-1 rounded">Issued: {cert.issued}</span>
                      <span className="bg-gray-100 px-3 py-1 rounded">Valid: {cert.validUntil}</span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">Key Features:</h4>
                      <ul className="space-y-2">
                        {cert.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <svg className="w-5 h-5 mr-3 text-elevate-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="bg-elevate-gold text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300 shadow-lg">
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      {/* <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
                  <div className="text-3xl font-bold text-elevate-gold mb-2">100%</div>
                  <div className="text-gray-600">Quality Tested</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-elevate-gold mb-2">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-elevate-gold mb-2">6</div>
                  <div className="text-gray-600">Major Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-elevate-gold mb-2">3</div>
                  <div className="text-gray-600">Industry Awards</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-elevate-gold rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-gray-900 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Raw Material Inspection</h4>
                    <p className="text-gray-600">Thorough testing of incoming brass materials</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-elevate-gold rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-gray-900 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">In-Process Quality Control</h4>
                    <p className="text-gray-600">Continuous monitoring during manufacturing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-elevate-gold rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-gray-900 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Final Product Testing</h4>
                    <p className="text-gray-600">Comprehensive testing before shipment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-elevate-gold rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-gray-900 font-bold text-sm">4</span>
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
      </section> */}
    </div>
  );
};

export default Certificates; 