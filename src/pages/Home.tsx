import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { Star, ShieldCheck, Headphones, Repeat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
  }
];

const categories = [
  { name: 'تصميم', count: 124, icon: '🎨', color: 'bg-blue-50' },
  { name: 'برمجة', count: 86, icon: '💻', color: 'bg-indigo-50' },
  { name: 'دورات', count: 42, icon: '🎓', color: 'bg-amber-50' },
  { name: 'كتب', count: 156, icon: '📚', color: 'bg-emerald-50' },
];

export default function Home() {
  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      <Hero />

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <ShieldCheck className="w-8 h-8 text-accent" />, title: 'دفع آمن 100%', desc: 'جميع معاملاتك مشفرة ومؤمنة' },
            { icon: <Headphones className="w-8 h-8 text-accent" />, title: 'دعم فني متميز', desc: 'متواجدون لمساعدتك على مدار الساعة' },
            { icon: <Repeat className="w-8 h-8 text-accent" />, title: 'استرجاع فوري', desc: 'ضمان الرضا أو استعادة أموالك' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl flex items-center gap-6 group hover:bg-primary hover:text-white transition-all duration-500"
            >
              <div className="bg-accent/10 p-4 rounded-2xl group-hover:bg-accent/20">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                <p className="text-sm opacity-60">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black mb-2">تصفح حسب الفئة</h2>
            <p className="text-gray-500">اختر المجال الذي ترغب في استكشافه اليوم</p>
          </div>
          <Link to="/categories" className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
            عرض الكل <ArrowRight className="w-4 h-4 rotate-180" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`${cat.color} p-8 rounded-3xl text-center cursor-pointer group transition-all border border-transparent hover:border-accent/20`}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">{cat.icon}</div>
              <h3 className="text-xl font-bold mb-1">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.count} منتج</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black mb-2">الأكثر مبيعاً</h2>
            <p className="text-gray-500">المنتجات التي غيرت حياة الكثيرين من عملائنا</p>
          </div>
          <Link to="/products" className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
            استكشف المزيد <ArrowRight className="w-4 h-4 rotate-180" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary rounded-[3rem] p-12 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[120px] -mr-32 -mt-32 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[120px] -ml-32 -mb-32"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-black mb-4">انضم إلى مجتمعنا المميز</h2>
            <p className="text-gray-400 mb-8">احصل على آخر التحديثات، العروض الحصرية، والمنتجات المجانية مباشرة في بريدك الإلكتروني</p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="flex-grow bg-white/10 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:bg-white/20 transition-all text-center"
              />
              <button className="bg-accent text-primary px-10 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1 transition-all whitespace-nowrap">
                اشترك الآن
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
