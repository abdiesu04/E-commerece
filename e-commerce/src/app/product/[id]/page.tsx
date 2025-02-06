'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiShare2, FiStar } from 'react-icons/fi';
import { allProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === parseInt(params.id));
    setProduct(foundProduct);
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-amber-400"></div>
      </div>
    );
  }

  const images = [product.image, ...Array(3).fill(product.image)]; // Simulate multiple product images

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-24 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-amber-400' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold text-white"
              >
                {product.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-amber-400 mt-2"
              >
                {product.brand}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-amber-400 fill-current'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-300">{product.rating} / 5.0</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-300 text-lg"
            >
              {product.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="border-t border-gray-700 py-6"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Features</h2>
              <ul className="grid grid-cols-2 gap-4">
                {product.features.map((feature: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-300"
                  >
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center justify-between"
            >
              <div>
                <p className="text-gray-400 text-sm">Price</p>
                <p className="text-4xl font-bold text-white">
                  ${product.price.toLocaleString()}
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                  <FiHeart className="w-6 h-6" />
                </button>
                <button className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors">
                  <FiShare2 className="w-6 h-6" />
                </button>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={() => addToCart(product)}
              className="w-full py-4 bg-amber-400 text-gray-900 rounded-xl font-bold text-lg hover:bg-amber-500 transition-colors flex items-center justify-center space-x-2"
            >
              <FiShoppingCart className="w-6 h-6" />
              <span>Add to Cart</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 