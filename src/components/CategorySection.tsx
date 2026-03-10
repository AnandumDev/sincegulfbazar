const categories = [
  {
    id: 1,
    name: 'Perfumes',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop',
    link: '#perfumes'
  },
  {
    id: 2,
    name: 'Oud & Attar',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=300&fit=crop',
    link: '#oud'
  },
  {
    id: 3,
    name: 'Body Sprays',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&fit=crop',
    link: '#bodyspray'
  },
  {
    id: 4,
    name: 'Hookah',
    image: '/hukka.webp',
    link: '#hookah'
  },
  {
    id: 5,
    name: 'Mobile Accessories',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop',
    link: '#mobile'
  },
  {
    id: 6,
    name: 'Gulf Items',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=300&h=300&fit=crop',
    link: '#gulf'
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          Shop by Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <a 
              key={category.id} 
              href={category.link}
              className="flex flex-col items-center group opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-4 border-4 border-gray-100 group-hover:border-blue-600 transition-all duration-300">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {category.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
