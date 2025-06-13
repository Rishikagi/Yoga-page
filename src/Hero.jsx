import React from 'react';
import hero from './assets/hero.png';
export default function Hero(){
    return(
         <div className="font-sans bg-white-50 text-gray-800">
              {/* Hero Section */}
              <div className="relative font-sans bg-gray-50 text-white">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={hero}
              alt="Yoga background"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        
          {/* Hero Content */}
          <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Find Inner Peace with Yoga
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8">
              Discover the transformative power of yoga, both in-person and online.
            </p>
            {/* Centered Button */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <button className="bg-#0655A0-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 mb-2 rounded-lg shadow-lg transition duration-300">
                Explore Classes
              </button>
            </div>
          </div>
        </div></div>
    )
}