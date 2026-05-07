import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, CreditCard, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const initialCart = [
  {
    id: '1',
    name: 'حزمة قوالب برمجية متكاملة',
    price: 450,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80',
    quantity: 1,
    category: 'برمجة'
  }
];

export default function Cart() {
  const [items, setItems] = useState(initialCart);

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
         <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8 text-6xl">🛒</div>
         <h2 className="text-3xl font-black mb-4">سلة التسوق فارغة</h2>
         <p className="text-gray-500 mb-8">لم تقم بإضافة أي منتجات للسلة بعد. ابدأ باستكشاف منتجاتنا المميزة.</p>
         <Link to="/products" className="bg-primary text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-accent transition-all shadow-xl">
           ابدأ التسوق
         </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-12">سلة التسوق ({items.length})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-8 space-y-6">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-black/5 flex flex-col md:flex-row items-center gap-8 group"
              >
                <div className="w-full md:w-32 h-32 rounded-2xl overflow-hidden bg-gray-50">
                   <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.name} />
                </div>
                
                <div className="flex-grow text-center md:text-right space-y-2">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-xl font-black text-primary">{item.name}</h3>
                  <p className="text-2xl font-black text-primary">{item.price} ر.س</p>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-2xl border border-gray-100">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-2 bg-white rounded-xl shadow-sm hover:text-accent transition-colors"
                  ><Minus className="w-4 h-4" /></button>
                  <span className="w-8 text-center font-black">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-2 bg-white rounded-xl shadow-sm hover:text-accent transition-colors"
                  ><Plus className="w-4 h-4" /></button>
                </div>

                <div className="text-right min-w-[120px]">
                   <p className="text-xs text-gray-400 font-bold mb-1 uppercase">الإجمالي</p>
                   <p className="text-xl font-black text-accent">{item.price * item.quantity} ر.س</p>
                </div>

                <button 
                  onClick={() => removeItem(item.id)}
                  className="p-3 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-6 h-6" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          <Link to="/products" className="flex items-center gap-2 text-gray-500 font-bold hover:text-accent transition-colors pt-4">
             <ArrowRight className="w-5 h-5 rotate-180" />
             مواصلة التسوق
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 sticky top-32">
             <h3 className="text-2xl font-black mb-8 pb-4 border-b border-gray-100">ملخص الطلب</h3>
             
             <div className="space-y-4 mb-8">
                <div className="flex justify-between font-bold text-gray-500">
                   <span>المجموع الفرعي</span>
                   <span>{subtotal} ر.س</span>
                </div>
                <div className="flex justify-between font-bold text-gray-500">
                   <span>الضريبة (15%)</span>
                   <span>{(subtotal * 0.15).toFixed(2)} ر.س</span>
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                   <span className="text-xl font-black">الإجمالي النهائي</span>
                   <span className="text-3xl font-black text-accent">{(subtotal * 1.15).toFixed(2)} ر.س</span>
                </div>
             </div>

             <div className="space-y-4">
                <div className="relative">
                  <input type="text" placeholder="كود الخصم" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-accent/20 transition-all text-sm pr-12" />
                  <CreditCard className="w-5 h-5 absolute top-1/2 right-4 -translate-y-1/2 text-gray-400" />
                  <button className="absolute left-2 top-2 bottom-2 bg-primary text-white px-4 rounded-xl text-xs font-bold hover:bg-accent transition-all">تطبيق</button>
                </div>
                
                <Link to="/checkout" className="w-full bg-primary text-white py-5 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 hover:bg-accent transition-all shadow-xl shadow-primary/10 active:scale-95 group">
                   إتمام الطلب
                   <ShoppingBag className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </Link>
             </div>

             <div className="mt-8 flex items-center justify-center gap-4 text-emerald-600">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">ضمان الدفع الآمن 100%</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
