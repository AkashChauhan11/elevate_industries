import React from 'react';

const ColorShowcase = () => {
  const colors = [
    {
      name: 'Warm Yellow',
      hex: '#FFD775',
      description: 'Primary accent color for buttons, highlights, and primary actions',
      classes: 'bg-warm-yellow-200 text-earth-brown-800',
      variations: ['warm-yellow-50', 'warm-yellow-100', 'warm-yellow-200', 'warm-yellow-300', 'warm-yellow-400']
    },
    {
      name: 'Earth Brown',
      hex: '#A28E65',
      description: 'Secondary color for text, borders, and secondary elements',
      classes: 'bg-earth-brown-500 text-cream-white-100',
      variations: ['earth-brown-50', 'earth-brown-100', 'earth-brown-200', 'earth-brown-500', 'earth-brown-800']
    },
    {
      name: 'Cream White',
      hex: '#FFF8EA',
      description: 'Background color providing warmth and readability',
      classes: 'bg-cream-white-100 text-earth-brown-800 border border-warm-yellow-200',
      variations: ['cream-white-50', 'cream-white-100', 'cream-white-200', 'cream-white-300', 'cream-white-400']
    },
    {
      name: 'Light Grey',
      hex: '#DFE0DF',
      description: 'Surface color for cards, sections, and subtle backgrounds',
      classes: 'bg-light-grey-400 text-earth-brown-800',
      variations: ['light-grey-50', 'light-grey-100', 'light-grey-200', 'light-grey-400', 'light-grey-600']
    }
  ];

  return (
    <div className="bg-cream-white-100 min-h-screen py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-earth-brown-800 mb-4">
            Natural Palette Color System
          </h1>
          <p className="text-lg text-earth-brown-600 max-w-2xl mx-auto">
            A comprehensive color system designed for the Elevate Industries website, 
            featuring warm, earthy tones that reflect our commitment to natural quality and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {colors.map((color, index) => (
            <div key={index} className="bg-cream-white-50 rounded-2xl p-6 shadow-lg border border-warm-yellow-100">
              <div className={`w-full h-24 rounded-xl mb-4 ${color.classes} flex items-center justify-center`}>
                <span className="font-mono text-sm font-bold">{color.hex}</span>
              </div>
              <h3 className="text-xl font-semibold text-earth-brown-800 mb-2">{color.name}</h3>
              <p className="text-sm text-earth-brown-600 mb-4">{color.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-earth-brown-700">Variations:</h4>
                <div className="flex flex-wrap gap-2">
                  {color.variations.map((variation, vIndex) => (
                    <div
                      key={vIndex}
                      className={`w-8 h-8 rounded-lg bg-${variation} border border-warm-yellow-200`}
                      title={variation}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-light-grey-100 rounded-2xl p-8 border border-warm-yellow-200">
          <h2 className="text-2xl font-bold text-earth-brown-800 mb-6 text-center">
            Usage Examples
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-warm-yellow-200 text-earth-brown-800 px-6 py-3 rounded-lg font-semibold mb-2">
                Primary Button
              </div>
              <p className="text-sm text-earth-brown-600">Main call-to-action buttons</p>
            </div>
            
            <div className="text-center">
              <div className="bg-transparent border-2 border-warm-yellow-200 text-warm-yellow-200 px-6 py-3 rounded-lg font-semibold mb-2">
                Secondary Button
              </div>
              <p className="text-sm text-earth-brown-600">Alternative action buttons</p>
            </div>
            
            <div className="text-center">
              <div className="bg-earth-brown-800 text-cream-white-100 px-6 py-3 rounded-lg font-semibold mb-2">
                Dark Button
              </div>
              <p className="text-sm text-earth-brown-600">High contrast actions</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-earth-brown-800 mb-4">
            How to Use These Colors
          </h3>
          <div className="bg-cream-white-50 rounded-xl p-6 border border-warm-yellow-200 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-earth-brown-800 mb-2">Tailwind Classes:</h4>
                <ul className="text-sm text-earth-brown-600 space-y-1">
                  <li>• <code className="bg-warm-yellow-100 px-2 py-1 rounded">bg-warm-yellow-200</code></li>
                  <li>• <code className="bg-warm-yellow-100 px-2 py-1 rounded">text-earth-brown-800</code></li>
                  <li>• <code className="bg-warm-yellow-100 px-2 py-1 rounded">border-warm-yellow-200</code></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-earth-brown-800 mb-2">CSS Variables:</h4>
                <ul className="text-sm text-earth-brown-600 space-y-1">
                  <li>• <code className="bg-warm-yellow-100 px-2 py-1 rounded">var(--color-primary)</code></li>
                  <li>• <code className="bg-warm-yellow-100 px-2 py-1 rounded">var(--color-background)</code></li>
                  <li>• <code className="bg-warm-yellow-100 px-2 py-1 rounded">var(--color-text-primary)</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorShowcase; 