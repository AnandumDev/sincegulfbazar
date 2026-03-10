import React from 'react';

const attarList = [
  { id: 1, name: 'Musk Al Tahara', price: '$45.99', category: 'Musk' },
  { id: 2, name: 'Rose Attar', price: '$38.99', category: 'Floral' },
  { id: 3, name: 'Amber Attar', price: '$42.99', category: 'Amber' },
  { id: 4, name: 'Sandalwood Attar', price: '$52.99', category: 'Woody' },
  { id: 5, name: 'Jasmine Attar', price: '$48.99', category: 'Floral' },
  { id: 6, name: 'Oud Attar', price: '$89.99', category: 'Oud' },
  { id: 7, name: 'Saffron Attar', price: '$65.99', category: 'Spicy' },
  { id: 8, name: 'Musk Jamid', price: '$55.99', category: 'Musk' },
  { id: 9, name: 'Kesar Attar', price: '$58.99', category: 'Spicy' },
  { id: 10, name: 'Majmua Attar', price: '$46.99', category: 'Blend' },
  { id: 11, name: 'Hina Attar', price: '$39.99', category: 'Floral' },
  { id: 12, name: 'Shamama Attar', price: '$72.99', category: 'Blend' },
  { id: 13, name: 'Ruh Khus', price: '$44.99', category: 'Earthy' },
  { id: 14, name: 'Mogra Attar', price: '$49.99', category: 'Floral' },
  { id: 15, name: 'Bela Attar', price: '$41.99', category: 'Floral' },
  { id: 16, name: 'Mitti Attar', price: '$36.99', category: 'Earthy' },
  { id: 17, name: 'Zafran Attar', price: '$68.99', category: 'Spicy' },
  { id: 18, name: 'Kasturi Attar', price: '$78.99', category: 'Musk' },
  { id: 19, name: 'Loban Attar', price: '$43.99', category: 'Resinous' },
  { id: 20, name: 'Agarwood Attar', price: '$95.99', category: 'Oud' },
  { id: 21, name: 'Chameli Attar', price: '$47.99', category: 'Floral' },
  { id: 22, name: 'Gulab Attar', price: '$40.99', category: 'Floral' },
  { id: 23, name: 'Rajnigandha Attar', price: '$51.99', category: 'Floral' },
  { id: 24, name: 'Kewda Attar', price: '$45.99', category: 'Floral' },
  { id: 25, name: 'Musk Gazal', price: '$62.99', category: 'Musk' },
  { id: 26, name: 'Amber Musk', price: '$54.99', category: 'Blend' },
  { id: 27, name: 'Royal Dehn Al Oud', price: '$125.99', category: 'Oud' },
  { id: 28, name: 'White Musk', price: '$48.99', category: 'Musk' },
  { id: 29, name: 'Black Musk', price: '$52.99', category: 'Musk' },
  { id: 30, name: 'Patchouli Attar', price: '$44.99', category: 'Earthy' },
  { id: 31, name: 'Vetiver Attar', price: '$46.99', category: 'Earthy' },
  { id: 32, name: 'Nagarmotha Attar', price: '$42.99', category: 'Earthy' },
  { id: 33, name: 'Oudh Hindi', price: '$98.99', category: 'Oud' },
  { id: 34, name: 'Oudh Cambodi', price: '$105.99', category: 'Oud' },
  { id: 35, name: 'Musk Al Mahal', price: '$69.99', category: 'Musk' },
  { id: 36, name: 'Amber Kashmiri', price: '$58.99', category: 'Amber' },
  { id: 37, name: 'Rose Damascena', price: '$64.99', category: 'Floral' },
  { id: 38, name: 'Lavender Attar', price: '$38.99', category: 'Floral' },
  { id: 39, name: 'Frangipani Attar', price: '$43.99', category: 'Floral' },
  { id: 40, name: 'Lotus Attar', price: '$49.99', category: 'Floral' },
  { id: 41, name: 'Musk Al Lail', price: '$71.99', category: 'Musk' },
  { id: 42, name: 'Amber Al Sharq', price: '$56.99', category: 'Amber' },
  { id: 43, name: 'Dehn Al Ward', price: '$47.99', category: 'Floral' },
  { id: 44, name: 'Musk Al Emarat', price: '$74.99', category: 'Musk' },
  { id: 45, name: 'Amber Al Khaleeji', price: '$61.99', category: 'Amber' },
  { id: 46, name: 'Oud Malaki', price: '$115.99', category: 'Oud' },
  { id: 47, name: 'Musk Al Sultan', price: '$79.99', category: 'Musk' },
  { id: 48, name: 'Amber Royale', price: '$67.99', category: 'Amber' },
  { id: 49, name: 'Dehn Al Oud Cambodi', price: '$135.99', category: 'Oud' },
  { id: 50, name: 'Musk Al Haramain', price: '$82.99', category: 'Musk' },
  { id: 51, name: 'Amber Al Madinah', price: '$59.99', category: 'Amber' },
  { id: 52, name: 'Rose Al Taif', price: '$72.99', category: 'Floral' },
  { id: 53, name: 'Musk Al Makkah', price: '$85.99', category: 'Musk' },
  { id: 54, name: 'Oud Al Shuyukh', price: '$145.99', category: 'Oud' },
  { id: 55, name: 'Amber Al Oud', price: '$76.99', category: 'Blend' },
  { id: 56, name: 'Musk Al Ghazal', price: '$68.99', category: 'Musk' },
  { id: 57, name: 'Dehn Al Amber', price: '$54.99', category: 'Amber' },
  { id: 58, name: 'Oud Al Khaleeji', price: '$128.99', category: 'Oud' },
  { id: 59, name: 'Musk Al Aroos', price: '$73.99', category: 'Musk' },
  { id: 60, name: 'Amber Al Malaki', price: '$81.99', category: 'Amber' }
];

interface AttarPageProps {
  onBack: () => void;
}

const AttarPage: React.FC<AttarPageProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredAttars = attarList.filter(attar =>
    attar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attar.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition"
          >
            <span>←</span> Back to Home
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">60+ Attar Collection</h1>
          <p className="text-xl text-gray-600 mb-8">Explore our premium selection of authentic Arabian attars</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search attars by name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 border-2 border-amber-300 rounded-lg focus:outline-none focus:border-amber-600 text-lg"
            />
          </div>
        </div>

        {/* Attar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAttars.map((attar) => (
            <div 
              key={attar.id} 
              className="bg-white border-2 border-amber-100 rounded-lg p-6 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-3">
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">{attar.category}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{attar.name}</h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold text-amber-600">{attar.price}</span>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttarPage;
