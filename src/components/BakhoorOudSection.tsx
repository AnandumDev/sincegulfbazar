const BakhoorOudSection = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Bakhoor & Oud Collection</h2>
          <p className="text-xl text-gray-300">Experience the authentic Arabian fragrance with our premium bakhoor and oud</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bakhoor Card */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl" data-aos="fade-right" data-aos-delay="100">
            <img 
              src="/images/bakhoor1.jpg" 
              alt="Premium Bakhoor"
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block bg-amber-600 px-4 py-1 rounded-full text-sm font-semibold mb-3">PREMIUM QUALITY</span>
              <h3 className="text-3xl font-bold mb-3">Bakhoor Incense</h3>
              <p className="text-gray-200 mb-4">Traditional Arabian incense for long-lasting fragrance. Use with charcoal for the perfect aromatic experience.</p>
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-500 transition font-semibold">
                Explore Bakhoor
              </button>
            </div>
          </div>

          {/* Oud Card */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl" data-aos="fade-left" data-aos-delay="200">
            <img 
              src="/images/bakhoor2.jpeg" 
              alt="Premium Oud"
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block bg-amber-600 px-4 py-1 rounded-full text-sm font-semibold mb-3">AUTHENTIC</span>
              <h3 className="text-3xl font-bold mb-3">Oud Wood</h3>
              <p className="text-gray-200 mb-4">Rare and precious oud wood chips from the finest sources. Perfect for special occasions and daily use.</p>
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-500 transition font-semibold">
                Explore Oud
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BakhoorOudSection;
