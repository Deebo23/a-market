import React from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.badge && (
            <span className="bg-accent text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
              {product.badge}
            </span>
          )}
          {product.isFree && (
            <span className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
              مجاني
            </span>
          )}
        </div>

        <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-accent hover:text-white transition-all transform hover:scale-110 active:scale-90">
          <Heart className="w-5 h-5" />
        </button>

        {/* Hover Actions Overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
           <Link to={`/product/${product.id}`} className="bg-white text-primary p-3 rounded-full hover:bg-accent hover:text-white transition-all transform translate-y-10 group-hover:translate-y-0 duration-500 delay-75 shadow-xl">
             <Eye className="w-5 h-5" />
           </Link>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{product.category}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-current" />
            <span className="text-xs font-bold">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`} className="block group/title">
          <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1 group-hover/title:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-500 line-clamp-2 mb-6 flex-grow leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through font-medium leading-none mb-1">
                {product.oldPrice} ر.س
              </span>
            )}
            <span className="text-2xl font-black text-primary">
              {product.price > 0 ? `${product.price} ر.س` : 'مجاناً'}
            </span>
          </div>
          
          <button className="p-4 bg-primary text-white rounded-2xl hover:bg-accent transition-all shadow-lg hover:shadow-accent/40 active:scale-95 group/btn relative overflow-hidden">
             <ShoppingCart className="w-5 h-5 relative z-10" />
             <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
