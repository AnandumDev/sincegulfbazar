import React from 'react';
import athar from '../../public/Attar_Kashmiri_Oud_Kannauj.webp';

interface AttarCollectionProps {
  onExplore: () => void;
}

const AttarCollection: React.FC<AttarCollectionProps> = ({ onExplore }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl opacity-0 animate-[fadeInLeft_0.8s_ease-out_forwards] max-w-md mx-auto">
            <img 
              src={athar} 
              alt="Attar Collection"
              className="w-full h-80 object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="text-center md:text-left opacity-0 animate-[fadeInRight_0.8s_ease-out_0.2s_forwards]">
            <span className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              EXCLUSIVE COLLECTION
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              60+ Attar Collection
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Discover our extensive range of premium attars from across the Arabian Gulf. 
              Each fragrance tells a unique story of tradition and elegance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600">60+</div>
                <div className="text-gray-600">Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600">100%</div>
                <div className="text-gray-600">Authentic</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600">Premium</div>
                <div className="text-gray-600">Quality</div>
              </div>
            </div>
            <button 
              onClick={onExplore}
              className="mt-8 bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition shadow-lg"
            >
              Explore Attar Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttarCollection;
