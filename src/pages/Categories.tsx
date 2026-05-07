import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: '1', name: 'قوالب برمجية', count: 124, icon: '💻', desc: 'قوالب جاهزة، أكواد مصدرية، وحلول تقنية متكاملة.', gradient: 'from-blue-500/10 to-indigo-500/10 text-blue-600' },
  { id: '2', name: 'دورات تدريبية', count: 86, icon: '🎓', desc: 'تعلم مهارات جديدة من الخبراء في مجالات التكنولوجيا والإدارة.', gradient: 'from-amber-500/10 to-orange-500/10 text-amber-600' },
  { id: '3', name: 'كتب إلكترونية', count: 156, icon: '📚', desc: 'إصدارات حصرية تغطي مختلف مجالات المعرفة والتطوير الذاتي.', gradient: 'from-emerald-500/10 to-teal-500/10 text-emerald-600' },
  { id: '4', name: 'أدوات تصميم', count: 92, icon: '🎨', desc: 'أيقونات، خطوط، صور، وموارد إبداعية لمشاريعك.', gradient: 'from-purple-500/10 to-pink-500/10 text-purple-600' },
  { id: '5', name: 'خدمات سحابية', count: 34, icon: '☁️', desc: 'اشتراكات، سيرفرات، وحلول استضافة متقدمة.', gradient: 'from-sky-500/10 to-cyan-500/10 text-sky-600' },
  { id: '6', name: 'ألعاب وترفيه', count: 47, icon: '🎮', desc: 'محتوى حصري، اشتراكات، وأدوات لعشاق الألعاب.', gradient: 'from-red-500/10 to-rose-500/10 text-red-600' },
];

export default function Categories() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-primary"
        >
          استكشف عالمنا الرقمي
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 text-lg leading-relaxed"
        >
          نحن نوفر لك أفضل المنتجات الرقمية المصنفة بعناية لتسهيل وصولك لما تحتاجه بدقة واحترافية.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl shadow-black/5 flex flex-col items-center text-center overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
               <div className="text-7xl mb-8 transform group-hover:scale-125 transition-transform duration-700">{cat.icon}</div>
               <h3 className="text-3xl font-black text-primary mb-4 group-hover:text-accent transition-colors">{cat.name}</h3>
               <p className="text-gray-500 font-medium leading-relaxed mb-8">{cat.desc}</p>
               
               <div className="flex flex-col items-center gap-6">
                 <div className="flex items-center gap-2 bg-gray-50 px-6 py-2 rounded-full border border-gray-100">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-xs font-black text-primary uppercase tracking-widest">{cat.count} منتج متاح</span>
                 </div>
                 
                 <Link to={`/products?category=${cat.name}`} className="bg-primary text-white p-4 rounded-2xl hover:bg-accent transition-all transform group-hover:translate-x-2">
                    <ArrowLeft className="w-6 h-6 rotate-180" />
                 </Link>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Offer Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-32 p-12 bg-primary rounded-[4rem] text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden"
      >
         <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
         
         <div className="flex-1 lg:text-right text-center space-y-6 relative z-10">
            <h2 className="text-5xl font-black leading-tight">احصل على وصول كامل <br /> لكل المنتجات</h2>
            <p className="text-xl text-gray-400">انضم إلى باقة الاشتراك المميزة واحصل على جميع القوالب والدورات مجاناً.</p>
            <button className="bg-accent text-primary px-12 py-5 rounded-[2rem] font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-accent/20">
               اشترك الآن - 99$ شهرياً
            </button>
         </div>
         
         <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="aspect-video bg-white/5 rounded-3xl border border-white/10 p-4 transform even:translate-y-8">
                    <div className="w-full h-full bg-white/5 rounded-2xl animate-pulse"></div>
                 </div>
               ))}
            </div>
         </div>
      </motion.div>
    </div>
  );
}
