import React, { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fittings', name: 'Brass Fittings' },
    { id: 'valves', name: 'Brass Valves' },
    { id: 'pipes', name: 'Brass Pipes' },
    { id: 'hardware', name: 'Brass Hardware' },
    { id: 'castings', name: 'Brass Castings' },
  ];

  const products = [
    {
      id: 1,
      name: 'Brass Compression Fittings',
      category: 'fittings',
      description: 'High-quality compression fittings for secure connections',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      specifications: ['Size: 1/4" to 2"', 'Material: C36000 Brass', 'Pressure Rating: 300 PSI'],
      applications: ['Plumbing', 'HVAC', 'Industrial']
    },
    {
      id: 2,
      name: 'Brass Ball Valves',
      category: 'valves',
      description: 'Reliable ball valves for precise flow control',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      specifications: ['Size: 1/2" to 4"', 'Material: C37700 Brass', 'Temperature: -20°C to 120°C'],
      applications: ['Water Systems', 'Gas Lines', 'Chemical Processing']
    },
    {
      id: 3,
      name: 'Brass Threaded Pipes',
      category: 'pipes',
      description: 'Corrosion-resistant threaded pipes for various applications',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      specifications: ['Size: 1/8" to 6"', 'Material: C36000 Brass', 'Thread: NPT/BSP'],
      applications: ['Plumbing', 'Oil & Gas', 'Chemical Industry']
    },
    {
      id: 4,
      name: 'Brass Nuts and Bolts',
      category: 'hardware',
      description: 'Precision-engineered brass fasteners for industrial use',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      specifications: ['Size: M3 to M20', 'Material: C36000 Brass', 'Finish: Natural/Chrome'],
      applications: ['Electronics', 'Automotive', 'Marine']
    },
    {
      id: 5,
      name: 'Brass Cast Components',
      category: 'castings',
      description: 'Custom brass castings for specialized applications',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      specifications: ['Custom Sizes', 'Material: C83600 Brass', 'Tolerance: ±0.1mm'],
      applications: ['Automotive', 'Aerospace', 'Defense']
    },
    {
      id: 6,
      name: 'Brass Gate Valves',
      category: 'valves',
      description: 'Heavy-duty gate valves for industrial applications',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      specifications: ['Size: 1" to 8"', 'Material: C37700 Brass', 'Pressure: 600 PSI'],
      applications: ['Industrial', 'Power Plants', 'Water Treatment']
    },
    {
      id: 7,
      name: 'Brass Elbow Fittings',
      category: 'fittings',
      description: '90-degree elbow fittings for pipe direction changes',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      specifications: ['Size: 1/4" to 2"', 'Material: C36000 Brass', 'Angle: 90°'],
      applications: ['Plumbing', 'HVAC', 'Industrial']
    },
    {
      id: 8,
      name: 'Brass Extruded Profiles',
      category: 'pipes',
      description: 'Custom extruded brass profiles for specialized applications',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      specifications: ['Custom Profiles', 'Material: C36000 Brass', 'Length: Up to 6m'],
      applications: ['Architecture', 'Furniture', 'Decorative']
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-elevate-gold to-elevate-gold-dark text-black section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive range of high-quality brass products for industrial and commercial applications
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-elevate-gold text-black'
                    : 'bg-gray-800 text-white hover:bg-elevate-gold hover:text-black border border-elevate-gold'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-elevate-gold">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Specifications:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {product.specifications.map((spec, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-3 h-3 mr-2 text-elevate-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, index) => (
                        <span key={index} className="px-2 py-1 bg-elevate-gold text-black text-xs rounded-full">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full btn-primary">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Manufacturing Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Custom Manufacturing</h2>
              <p className="text-lg text-gray-300 mb-6">
                Can't find exactly what you need? Our expert engineering team can design and manufacture 
                custom brass components tailored to your specific requirements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-elevate-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Custom design and prototyping</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-elevate-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Material selection guidance</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-elevate-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Quality testing and certification</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-elevate-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Rapid prototyping and production</span>
                </li>
              </ul>
              <button className="btn-primary">
                Discuss Custom Requirements
              </button>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 border border-elevate-gold">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Our Products?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-elevate-gold rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Premium Quality</h4>
                    <p className="text-gray-300">All products meet or exceed industry standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-elevate-gold rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Durability</h4>
                    <p className="text-gray-300">Corrosion-resistant and long-lasting performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-elevate-gold rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Precision</h4>
                    <p className="text-gray-300">Tight tolerances and exact specifications</p>
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

export default Products; 