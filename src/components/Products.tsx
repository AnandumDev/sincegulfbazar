import React from 'react';

const products = [
  {
    id: 1,
    name: 'Royal Oudh',
    category: 'Oudh',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop',
    description: 'Premium aged oudh from the finest sources'
  },
  {
    id: 2,
    name: 'Arabian Attar',
    category: 'Attar',
    price: '$45.99',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop',
    description: 'Traditional attar with long-lasting fragrance'
  },
  {
    id: 3,
    name: 'Luxury Perfume',
    category: 'Perfume',
    price: '$65.99',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop',
    description: 'Exquisite blend of oriental notes'
  },
  {
    id: 4,
    name: 'Fresh Body Spray',
    category: 'Body Spray',
    price: '$29.99',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop',
    description: 'Refreshing all-day body spray'
  },
  {
    id: 5,
    name: 'Premium Bakhoor',
    category: 'Bakhoor',
    price: '$35.99',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
    description: 'Traditional Arabian incense chips'
  },
  {
    id: 6,
    name: 'Luxury Hookah',
    category: 'Hookah',
    price: '$125.99',
    image: '/public/hukka.webp',
    description: 'Handcrafted traditional hookah'
  },
  {
    id: 7,
    name: 'Black Oudh',
    category: 'Oudh',
    price: '$95.99',
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&h=400&fit=crop',
    description: 'Rare black oudh wood chips'
  },
  {
    id: 8,
    name: 'Phone Accessories',
    category: 'Mobile Accessories',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
    description: 'Premium mobile cases & accessories'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-400 mb-4">Our Collection</h2>
          <p className="text-gray-300 text-lg">Handpicked treasures from the Arabian Gulf</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="bg-gray-900 border-2 border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:border-amber-600 transition-all duration-300 hover:-translate-y-2 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="h-64 overflow-hidden bg-gray-800">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">{product.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-400">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
