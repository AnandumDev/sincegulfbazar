const FeaturedBanner = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-950 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="p-8 md:p-12">
              <span className="inline-block bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Special collection
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Fresh home, rich fragrance, complete Gulf lifestyle.
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                From bakhoor burners and room freshener to hookah sets and premium oudh oils, this section gives your store a fuller marketplace feel with more visual variety and more product discovery.
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
                Explore featured collection
              </button>
            </div>

            {/* Right Image */}
            <div className="h-full min-h-[400px] bg-cover bg-center" 
                 style={{backgroundImage: "url('/hukka.webp')"}}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
