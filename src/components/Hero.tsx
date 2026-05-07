import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 pb-40 overflow-hidden bg-primary">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[180px] -ml-80 -mb-80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-right space-y-8">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 text-accent text-sm font-bold mb-4"
            >
              <Sparkles className="w-4 h-4" />
              <span>الجيل القادم من المتجار الرقمية</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-8xl font-black text-white leading-tight lg:leading-tight"
            >
              ارتق بتطلعاتك <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent via-accent-light to-accent">الرقمية للفخامة</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto lg:mr-0 leading-relaxed"
            >
              اكتشف مئات المنتجات والحلول الرقمية المختارة بعناية فائقة لتناسب طموحاتك. من القوالب البرمجية إلى الدورات التعليمية المتخصصة.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <button className="group relative bg-accent text-primary px-10 py-5 rounded-3xl font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20">
                <span className="relative z-10 flex items-center gap-3">
                  ابدأ التسوق الآن
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                </span>
              </button>
              
              <button className="flex items-center gap-4 text-white hover:text-accent transition-colors group">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="font-bold">شاهد كيف نعمل</span>
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-12 flex items-center gap-6 justify-center lg:justify-start"
            >
               <div className="flex -space-x-4 space-x-reverse">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-4 border-primary" alt="Client" />
                  ))}
               </div>
               <div className="text-right">
                  <div className="flex gap-1 text-accent">
                    {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="text-xs text-gray-500 font-bold mt-1">أكثر من 10k عميل يثقون بنا</p>
               </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative hidden lg:block"
          >
            <div className="relative z-10 glass-effect p-8 rounded-[3rem] border border-white/10 shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" 
                className="w-full h-[500px] object-cover rounded-[2rem] shadow-black/50 shadow-2xl" 
                alt="Tech Luxury" 
               />
               
               {/* Floating elements */}
               <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-12 -right-12 bg-white p-6 rounded-3xl shadow-2xl text-primary"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center font-black">
                      +15%
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">المبيعات اليومية</p>
                      <h4 className="text-xl font-black">$4,290</h4>
                    </div>
                  </div>
               </motion.div>

               <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-6 -left-12 bg-accent text-primary p-6 rounded-3xl shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <Sparkles className="w-8 h-8" />
                    <div>
                      <h4 className="text-lg font-black leading-none">جودة عالية</h4>
                      <p className="text-[10px] uppercase font-bold opacity-70">منتجات مضمونة 100%</p>
                    </div>
                  </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
