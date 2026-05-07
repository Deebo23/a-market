import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, CheckCircle2, ShieldCheck, Download, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'حزمة قوالب برمجية متكاملة',
    description: 'مجموعة من أفضل قوالب React و Tailwind لتسريع عملك. تتضمن 10 قوالب احترافية لمواقع الهبوط، لوحات التحكم، والمواقع الشخصية. جميع القوالب متجاوبة وتتبع أفضل ممارسات البرمجة.',
    price: 450,
    oldPrice: 800,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
    category: 'برمجة',
    rating: 4.8,
    reviewsCount: 124,
    badge: 'الأكثر مبيعاً',
    features: [
      'تحديثات مجانية مدى الحياة',
      'دعم فني متخصص لمدة 6 أشهر',
      'ملفات المصدر بالكامل (Next.js & TypeScript)',
      'توثيق شامل لكل قالب',
      'تصميم متجاوب بالكامل'
    ]
  }
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');
  
  // Find product (mock)
  const product = products.find(p => p.id === id) || products[0];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-accent font-bold transition-colors">
          <ArrowRight className="w-5 h-5 rotate-180" />
          العودة للتسوق
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Image Gallery */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32"
          >
            <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-gray-100">
               <img src={product.image} alt={product.name} className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute top-6 right-6 flex flex-col gap-3">
                  <button className="p-3 bg-white shadow-xl rounded-2xl hover:bg-accent hover:text-white transition-all transform hover:scale-110">
                    <Heart className="w-6 h-6" />
                  </button>
                  <button className="p-3 bg-white shadow-xl rounded-2xl hover:bg-accent hover:text-white transition-all transform hover:scale-110">
                    <Share2 className="w-6 h-6" />
                  </button>
               </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mt-6">
              {[1,2,3,4].map(i => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden border-2 border-transparent hover:border-accent cursor-pointer transition-all">
                  <img src={product.image} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="product thumbnail" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Product Info */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-accent/10 text-accent font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">{product.category}</span>
              <div className="flex items-center gap-1 border-r border-gray-200 pr-3 mr-3">
                 <Star className="w-4 h-4 text-amber-400 fill-current" />
                 <span className="font-bold text-sm">{product.rating}</span>
                 <span className="text-gray-400 text-sm">({product.reviewsCount} تقييم)</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black text-primary mb-6 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
               <span className="text-5xl font-black text-primary">{product.price} ر.س</span>
               {product.oldPrice && (
                 <div className="flex flex-col">
                    <span className="text-lg text-gray-400 line-through font-bold">{product.oldPrice} ر.س</span>
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-black mt-1">خصم 45%</span>
                 </div>
               )}
            </div>

            <p className="text-gray-500 leading-relaxed text-lg mb-10">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-grow bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-accent transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 group">
                <ShoppingCart className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                أضف للسلة
              </button>
              <button className="flex-grow bg-accent text-primary py-5 rounded-2xl font-black text-xl hover:bg-opacity-80 transition-all shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 active:scale-95">
                اشتر الآن
              </button>
            </div>
            
            <button className="w-full mt-4 border-2 border-emerald-500 text-emerald-600 py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-emerald-50 transition-all group">
              <MessageCircle className="w-6 h-6" />
              طلب مباشر عبر واتساب
            </button>
          </div>

          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-6">
             <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl text-accent shadow-sm"><ShieldCheck className="w-6 h-6" /></div>
                <div>
                   <h4 className="font-black text-lg">تحميل آمن وفوري</h4>
                   <p className="text-sm text-gray-500">تحصل على رابط التحميل فور اكتمال عملية الدفع</p>
                </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-2xl text-accent shadow-sm"><Download className="w-6 h-6" /></div>
                <div>
                   <h4 className="font-black text-lg">تحديثات مدى الحياة</h4>
                   <p className="text-sm text-gray-500">نقوم بتحديث منتجاتنا باستمرار لضمان أفضل توافقية</p>
                </div>
             </div>
          </div>

          {/* Details Tabs */}
          <div>
             <div className="flex border-b border-gray-200 mb-8">
                {['description', 'features', 'reviews'].map(tab => (
                   <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-6 text-sm font-black transition-all relative capitalize ${activeTab === tab ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}
                   >
                     {tab === 'description' ? 'الوصف' : tab === 'features' ? 'المزايا' : 'المراجعات'}
                     {activeTab === tab && <motion.div layoutId="tab-line" className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />}
                   </button>
                ))}
             </div>
             
             <div className="min-h-[200px]">
                {activeTab === 'description' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <p className="text-gray-600">هذا المنتج الرقمي صمم خصيصاً للمحترفين. يركز على الجودة العالية، سهولة الاستخدام، والقابلية للتطوير.</p>
                    <p className="text-gray-600">لا حاجة للقلق بشأن التعقيدات البرمجية، لقد قمنا بكل العمل الشاق من أجلك.</p>
                  </motion.div>
                )}
                {activeTab === 'features' && (
                  <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                    {product.features?.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </motion.ul>
                )}
                {activeTab === 'reviews' && (
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="text-5xl font-black text-primary">{product.rating}</div>
                        <div>
                           <div className="flex gap-1 text-amber-400"><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /></div>
                           <p className="text-gray-500 text-xs font-bold mt-1">بناءً على {product.reviewsCount} تقييم حقيقي</p>
                        </div>
                      </div>
                      <button className="text-accent font-black underline">أضف تقييمك الآن</button>
                   </motion.div>
                )}
             </div>
          </div>
        </div>
      </div>
      
      {/* Recommended Products */}
      <section className="mt-32">
         <h2 className="text-3xl font-black mb-12">منتجات قد تعجبك</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(p => (
              <div key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
