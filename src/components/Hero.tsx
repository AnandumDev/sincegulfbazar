import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="p-8 md:p-16">
              <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold mb-6">
                NEW ARRIVAL
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The Royal Essence of the Gulf
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Discover our exclusive collection of premium Ouds, Attars, and luxury fragrances crafted for elegance.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg flex items-center gap-2">
                Shop Collection <span>→</span>
              </button>
            </div>

            {/* Right Image */}
            <div className="h-full min-h-[400px] bg-cover bg-center" 
                 style={{backgroundImage: "url('https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&h=600&fit=crop')"}}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
