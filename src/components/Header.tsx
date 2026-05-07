import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-xl border-b border-white/5">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center h-20">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-3xl font-black font-heading tracking-tight flex items-center gap-2">
            <span className="text-accent underline decoration-accent/30 underline-offset-4">a</span>
            <span className="text-white">.market</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">الرئيسية</Link>
            <Link to="/products" className="text-sm font-medium hover:text-accent transition-colors">المنتجات</Link>
            <Link to="/categories" className="text-sm font-medium hover:text-accent transition-colors">التصنيفات</Link>
            <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">من نحن</Link>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="ابحث عن منتج..." 
              className="bg-white/10 border border-white/10 rounded-full py-2 px-6 pr-10 text-sm focus:outline-none focus:bg-white/20 focus:border-accent/30 transition-all w-64 text-right"
              dir="rtl"
            />
            <Search className="w-4 h-4 absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 group-focus-within:text-accent" />
          </div>
          
          <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-6 h-10">
            <Link to="/wishlist" className="hover:text-accent transition-colors relative">
               <Heart className="w-6 h-6" />
               <span className="absolute -top-1 -right-1 bg-accent text-primary text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">2</span>
            </Link>
            <Link to="/cart" className="hover:text-accent transition-colors relative">
               <ShoppingCart className="w-6 h-6" />
               <span className="absolute -top-1 -right-1 bg-accent text-primary text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">1</span>
            </Link>
            <Link to="/account" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
               <User className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              <Link to="/" className="text-lg" onClick={() => setIsMenuOpen(false)}>الرئيسية</Link>
              <Link to="/products" className="text-lg" onClick={() => setIsMenuOpen(false)}>المنتجات</Link>
              <Link to="/categories" className="text-lg" onClick={() => setIsMenuOpen(false)}>التصنيفات</Link>
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <Link to="/wishlist" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <Heart className="w-6 h-6" /> المفضلة
                </Link>
                <Link to="/cart" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <ShoppingCart className="w-6 h-6" /> السلة
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
