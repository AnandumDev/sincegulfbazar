const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-gray-950 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2">🏺</span> Since Gulf Bazar
            </h3>
            <p className="text-gray-400">
              Your trusted source for authentic Arabian fragrances and traditional Gulf treasures since 1990.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-amber-400 transition">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-amber-400 transition">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@sincegulfbazar.com</li>
              <li>📞 +91 495 123 4567</li>
              <li>📍 8XGR+5J3, Mukkam, Kerala 673602</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Business Hours</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Monday - Sunday</li>
              <li className="text-amber-400 font-semibold">8:00 AM - 10:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Since Gulf Bazar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
