'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiSearch, FiMenu, FiX, FiUser } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="text-blue-900">ሃሙስ</span>
                <span className="text-yellow-500">ገብያ</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-blue-900 transition-colors">
              Shop
            </Link>
            <Link href="/traditional" className="text-gray-700 hover:text-blue-900 transition-colors">
              Traditional
            </Link>
            <Link href="/modern" className="text-gray-700 hover:text-blue-900 transition-colors">
              Modern
            </Link>
          </div>

          {/* Search, Cart, and User Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-700 hover:text-blue-900 transition-colors">
              <FiSearch className="h-6 w-6" />
            </button>
            <Link href="/cart" className="text-gray-700 hover:text-blue-900 transition-colors relative">
              <FiShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-blue-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/profile" className="text-gray-700 hover:text-blue-900 transition-colors">
              <FiUser className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
            >
              Shop
            </Link>
            <Link
              href="/traditional"
              className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
            >
              Traditional
            </Link>
            <Link
              href="/modern"
              className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
            >
              Modern
            </Link>
            <div className="flex items-center space-x-4 px-3 py-2">
              <button className="text-gray-700 hover:text-blue-900">
                <FiSearch className="h-6 w-6" />
              </button>
              <Link href="/cart" className="text-gray-700 hover:text-blue-900 relative">
                <FiShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-blue-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link href="/profile" className="text-gray-700 hover:text-blue-900">
                <FiUser className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 