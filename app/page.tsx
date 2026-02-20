import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">SoleStyle</div>
            <div className="hidden md:flex space-x-8">
              <a href="#collection" className="text-gray-700 hover:text-gray-900 transition">Collection</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition">Contact</a>
            </div>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Step Into Style & Comfort
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover our premium collection of shoes crafted for the modern lifestyle. 
                Quality meets design in every step you take.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition">
                  Shop Collection
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1000&fit=crop"
                alt="Featured Shoe"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section id="collection" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collection</h2>
            <p className="text-xl text-gray-600">Handpicked styles for every occasion</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop"
                  alt="Classic Sneakers"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Classic Sneakers</h3>
                <p className="text-gray-600 mb-4">Timeless design meets everyday comfort</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">$129</span>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=800&fit=crop"
                  alt="Running Shoes"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Running Shoes</h3>
                <p className="text-gray-600 mb-4">Performance engineered for athletes</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">$159</span>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=800&fit=crop"
                  alt="Urban Boots"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Urban Boots</h3>
                <p className="text-gray-600 mb-4">Style and durability for city life</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">$189</span>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600">Crafted with the finest materials for lasting durability and comfort</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fast Shipping</h3>
              <p className="text-gray-600">Free delivery on all orders over $100. Your shoes arrive in 2-3 days</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Easy Returns</h3>
              <p className="text-gray-600">30-day hassle-free returns. Not satisfied? Get your money back</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Stay In Style</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for exclusive offers and new arrivals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SoleStyle</h3>
              <p className="text-gray-400">Premium footwear for the modern lifestyle</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Men</a></li>
                <li><a href="#" className="hover:text-white transition">Women</a></li>
                <li><a href="#" className="hover:text-white transition">Kids</a></li>
                <li><a href="#" className="hover:text-white transition">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition">Returns</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SoleStyle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
