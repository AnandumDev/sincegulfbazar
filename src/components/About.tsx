const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-400 mb-6">About Since Gulf Bazar</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            For over three decades, Since Gulf Bazar has been the premier destination for authentic Arabian fragrances and traditional Gulf treasures. 
            We source the finest oudh, attar, and perfumes directly from master craftsmen across the Arabian Peninsula.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Premium Quality</h3>
              <p className="text-gray-400">Only the finest authentic products</p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Fast Delivery</h3>
              <p className="text-gray-400">Worldwide shipping available</p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Authentic</h3>
              <p className="text-gray-400">100% genuine Arabian products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
