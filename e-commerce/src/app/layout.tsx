import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/context/CartContext";
import FloatingCart from "@/components/FloatingCart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxury E-Commerce | Premium Shopping Experience",
  description: "Discover a world of premium products, from high-end electronics to luxury fashion and accessories. Your destination for an exceptional shopping experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">About Us</h3>
                  <p className="text-gray-400">Delivering luxury and quality to our valued customers.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Cart</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Contact</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Email: info@luxury.com</li>
                    <li>Phone: (555) 123-4567</li>
                    <li>Address: Luxury Street 123</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none"
                    />
                    <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; 2024 Luxury E-Commerce. All rights reserved.</p>
              </div>
            </div>
          </footer>
          <FloatingCart />
          <Toaster position="bottom-right" />
        </CartProvider>
      </body>
    </html>
  );
}
