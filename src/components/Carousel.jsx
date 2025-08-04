import React, { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white z-10">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 text-elevate-gold">{item.title}</h2>
                  <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">{item.description}</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {item.products.map((product, idx) => (
                      <div key={idx} className="bg-elevate-gold bg-opacity-90 backdrop-blur-sm rounded-lg p-4 text-black">
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-sm opacity-90">{product.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-elevate-gold bg-opacity-80 hover:bg-opacity-100 text-black p-2 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-elevate-gold bg-opacity-80 hover:bg-opacity-100 text-black p-2 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-elevate-gold' : 'bg-elevate-gold bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 