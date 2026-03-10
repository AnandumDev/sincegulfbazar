import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Herbal Dark Brown Hair Dye',
    category: 'HAIR DYE',
    description: 'Smooth coverage with salon-like finish and soft shine effect.',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Premium Almond Care Oil',
    category: 'ALMOND OIL',
    description: 'For skin and hair hydration with gentle natural nourishment.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Desert Musk Body Spray',
    category: 'BODY SPRAY',
    description: 'Refreshing and long-lasting for daily wear and special occasions.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Pure Dehn Al Oudh Oil',
    category: 'OUDE OIL',
    description: 'Rich concentrated oil with strong lasting projection and depth.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop'
  }
];

const BeautyCare = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Beauty & care page section</h2>
            <p className="text-gray-400">Added products requested: hair dye, almond oil and more beauty items with richer product imagery.</p>
          </div>
          <a href="#products" className="text-amber-400 hover:text-amber-300 transition flex items-center gap-2">
            See beauty page <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div key={item.id} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="h-64 bg-gray-700 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyCare;
