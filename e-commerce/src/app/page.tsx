import Image from "next/image";
import Link from 'next/link';
import { FiArrowRight, FiShoppingBag, FiPackage, FiStar } from 'react-icons/fi';
import { AiFillStar, AiOutlineThunderbolt } from 'react-icons/ai';
import { featuredProducts, categories } from '@/data/products';

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section with Split Design */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Left Content */}
        <div className="absolute inset-0 w-full lg:w-1/2 bg-gradient-to-r from-blue-900 to-blue-800 transform skew-x-6 origin-top-right"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-white relative">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-6">
                <AiOutlineThunderbolt className="text-yellow-400 mr-2" />
                <span className="text-sm">ሃሙስ ገብያ | Hamus Gebiya</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
                የ<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">ሃሙስ ገብያ</span><br />
                Market
              </h1>
              <p className="text-xl mb-8 text-gray-100 animate-fade-in-up-delayed">
                Quality products at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delayed-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  Shop Now
                  <FiArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/categories"
                  className="inline-flex items-center bg-blue-800/50 backdrop-blur-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800/70 transition-all"
                >
                  Categories
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up-delayed-3">
                <div className="text-center">
                  <div className="text-3xl font-bold">10k+</div>
                  <div className="text-sm text-gray-300">Local Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50k+</div>
                  <div className="text-sm text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-gray-300">Authentic</div>
                </div>
              </div>
            </div>

            {/* Hero Images */}
            <div className="relative h-[600px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Main Hero Image */}
                  <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80"
                      alt="Premium Shopping Experience"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Floating Image 1 */}
                  <div className="absolute bottom-20 -left-10 w-2/5 h-2/5 rounded-xl overflow-hidden shadow-xl animate-float">
                    <Image
                      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80"
                      alt="Premium Products"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Floating Image 2 */}
                  <div className="absolute top-20 -left-5 w-2/5 h-2/5 rounded-xl overflow-hidden shadow-xl animate-float-delayed">
                    <Image
                      src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80"
                      alt="Luxury Products"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Banner */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative h-40 rounded-xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80"
                alt="Electronics"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">Electronics</h3>
              </div>
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80"
                alt="Fashion"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">Fashion</h3>
              </div>
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80"
                alt="Accessories"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">Accessories</h3>
              </div>
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
                alt="Gadgets"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">Gadgets</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link href="/shop" className="text-blue-600 hover:text-blue-700 flex items-center">
              View All <FiArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-72">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="w-full bg-white text-blue-600 py-2 rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Quick View
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-1 flex items-center">
                    <span className="bg-blue-50 px-2 py-1 rounded-full">{product.category}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                      <AiFillStar className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <FiShoppingBag className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Authentic Selection</h3>
              <p className="text-gray-600">Curated collection of authentic Ethiopian products.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <FiPackage className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Nationwide Delivery</h3>
              <p className="text-gray-600">Fast and secure delivery across Ethiopia.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-pink-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <FiStar className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">100% authentic products with quality assurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 animate-float"></div>
          <div className="absolute w-72 h-72 bg-white/10 rounded-full bottom-20 right-20 animate-float-delayed"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Offers
            </h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter and get exclusive deals on traditional and modern products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors transform hover:scale-105 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
