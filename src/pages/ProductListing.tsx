import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Filter, ChevronDown, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'حزمة قوالب برمجية متكاملة',
    description: 'مجموعة من أفضل قوالب React و Tailwind لتسريع عملك',
    price: 450,
    oldPrice: 800,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    category: 'برمجة',
    rating: 4.8,
    reviewsCount: 124,
    badge: 'الأكثر مبيعاً'
  },
  {
    id: '2',
    name: 'دورة التسويق الرقمي الشاملة',
    description: 'تعلم أسرار البيع والنمو في العالم الرقمي من الصفر',
    price: 299,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'دورات',
    rating: 4.9,
    reviewsCount: 89,
    isFree: false
  },
  {
    id: '3',
    name: 'كتاب أسرار العمل الحر',
    description: 'نسخة رقمية حصرية تشرح كيف تبدأ رحلتك وتحقق دخل مستقر',
    price: 25,
    oldPrice: 50,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80',
    category: 'كتب إلكترونية',
    rating: 4.7,
    reviewsCount: 256,
    badge: 'عرض حصري'
  },
  {
    id: '4',
    name: 'حزمة أيقونات ثلاثية الأبعاد',
    description: 'أكثر من 500 أيقونة عالية الجودة لجميع أنواع المشاريع',
    price: 0,
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80',
    category: 'تصميم',
    rating: 4.5,
    reviewsCount: 42,
    isFree: true
  },
  {
    id: '5',
    name: 'قالب سيرة ذاتية احترافي',
    description: 'تصميم عصري يجذب الانتباه لمسارك المهني',
    price: 15,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    category: 'تصميم',
    rating: 4.6,
    reviewsCount: 31,
  }
];

export default function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', 'تصميم', 'برمجة', 'دورات', 'كتب إلكترونية'];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-72 space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-black/5">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-accent" />
              <h3 className="font-black text-lg text-primary">تصفية المنتجات</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-sm mb-4 text-gray-500 uppercase tracking-widest">التصنيف</h4>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-right py-2 px-4 rounded-xl text-sm transition-all ${selectedCategory === cat ? 'bg-primary text-white font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-bold text-sm mb-4 text-gray-500 uppercase tracking-widest">نطاق السعر</h4>
                <input type="range" className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent" />
                <div className="flex justify-between mt-2 text-xs font-bold text-gray-400">
                  <span>0 ر.س</span>
                  <span>1000 ر.س</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary p-8 rounded-3xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
            <h4 className="text-xl font-black mb-2 relative z-10">تحتاج مساعدة؟</h4>
            <p className="text-sm text-gray-400 mb-6 relative z-10">فريقنا متواجد دائماً للإجابة على استفساراتك</p>
            <button className="w-full bg-white text-primary py-3 rounded-xl font-bold hover:bg-accent hover:text-white transition-all">تواصل معنا</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-black text-primary">جميع المنتجات</h2>
            <div className="flex items-center gap-4">
               <div className="relative hidden md:block">
                  <input type="text" placeholder="بحث سريع..." className="bg-gray-100 border-none rounded-xl py-2 px-6 pr-10 text-sm focus:ring-2 focus:ring-accent/20 w-48 transition-all focus:w-64" />
                  <Search className="w-4 h-4 absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
               </div>
               <button className="flex items-center gap-2 bg-white border border-gray-100 py-2 px-4 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">
                  الأحدث
                  <ChevronDown className="w-4 h-4" />
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products
              .filter(p => selectedCategory === 'الكل' || p.category === selectedCategory)
              .map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-black mb-2">لم يتم العثور على منتجات</h3>
              <p className="text-gray-500">حاول تغيير خيارات التصفية أو البحث عن شيء آخر</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
