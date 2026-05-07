import React from 'react';
import { ShieldCheck, Truck, CreditCard, ShoppingBag, ArrowRight, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left: Info Sections */}
        <div className="lg:col-span-7 space-y-12">
          <div className="flex items-center gap-4 border-b border-gray-100 pb-8">
             <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center font-black">1</div>
             <h2 className="text-3xl font-black">المعلومات الشخصية</h2>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
                <label className="text-sm font-black text-gray-500 uppercase tracking-widest pl-4">الاسم الكامل</label>
                <input type="text" placeholder="مثال: أحمد محمد" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-accent/20 transition-all font-bold" />
             </div>
             <div className="space-y-2">
                <label className="text-sm font-black text-gray-500 uppercase tracking-widest pl-4">البريد الإلكتروني</label>
                <input type="email" placeholder="example@domain.com" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-accent/20 transition-all font-bold text-left" dir="ltr" />
             </div>
             <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-black text-gray-500 uppercase tracking-widest pl-4">رقم الهاتف</label>
                <input type="tel" placeholder="+966 5x xxx xxxx" className="w-full bg-gray-50 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-accent/20 transition-all font-bold text-left" dir="ltr" />
             </div>
          </form>

          <div className="flex items-center gap-4 border-b border-gray-100 pb-8 pt-6">
             <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center font-black">2</div>
             <h2 className="text-3xl font-black">طريقة الدفع</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { id: 'card', name: 'بطاقة ائتمانية', desc: 'مدى، فيزا، ماستركارد', icon: <CreditCard className="w-6 h-6" /> },
               { id: 'paypal', name: 'PayPal', desc: 'دفع سريع وآمن', icon: <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5" alt="paypal" /> },
               { id: 'stc', name: 'STC Pay', desc: 'دفع رقمي سهل', icon: <span className="font-black text-xs">STC PAY</span> },
             ].map((method) => (
               <button 
                key={method.id}
                className="group bg-white p-6 rounded-3xl border-2 border-gray-100 hover:border-accent transition-all text-right focus:border-accent shadow-sm"
               >
                 <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    {method.icon}
                 </div>
                 <h4 className="font-black text-primary mb-1">{method.name}</h4>
                 <p className="text-xs text-gray-400 font-bold">{method.desc}</p>
               </button>
             ))}
          </div>

          <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 flex items-start gap-6">
             <div className="bg-white p-3 rounded-2xl text-emerald-500 shadow-sm"><ShieldCheck className="w-6 h-6" /></div>
             <div>
                <h4 className="font-black text-emerald-800 text-lg mb-1">دفع آمن ومشفر</h4>
                <p className="text-emerald-700 text-sm opacity-80 leading-relaxed">تتم جميع معاملاتنا من خلال بوابات دفع مشفّرة وعالمية لضمان أمان بياناتك البنكية 100%.</p>
             </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-5">
           <div className="bg-primary text-white rounded-[3rem] p-10 sticky top-32 shadow-2xl shadow-primary/30">
              <h3 className="text-2xl font-black mb-10 border-b border-white/10 pb-6 flex items-center justify-between">
                ملخص طلبك
                <ShoppingBag className="w-6 h-6 text-accent" />
              </h3>

              <div className="space-y-6 mb-10">
                 <div className="flex justify-between items-center group">
                    <div className="flex items-center gap-4">
                       <div className="w-14 h-14 bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&q=80" className="w-full h-full object-cover" alt="item" />
                       </div>
                       <div>
                          <h4 className="font-bold text-sm leading-tight">حزمة قوالب برمجية...</h4>
                          <p className="text-[10px] text-accent font-black uppercase mt-1">الكمية: 1</p>
                       </div>
                    </div>
                    <span className="font-black text-lg">450 ر.س</span>
                 </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/10">
                 <div className="flex justify-between text-gray-400 font-bold">
                    <span>المجموع الفرعي</span>
                    <span>450 ر.س</span>
                 </div>
                 <div className="flex justify-between text-gray-400 font-bold">
                    <span>الضريبة (15%)</span>
                    <span>67.5 ر.س</span>
                 </div>
                 <div className="pt-6 mt-6 border-t border-accent/20 flex justify-between items-center transition-all group">
                    <span className="text-xl font-black group-hover:text-accent">الإجمالي النهائي</span>
                    <span className="text-4xl font-black text-accent shadow-accent/20">517.5 ر.س</span>
                 </div>
              </div>

              <button className="w-full bg-accent text-primary py-5 rounded-[2rem] font-black text-2xl mt-10 hover:bg-white hover:scale-105 transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-4 group/btn">
                 <Lock className="w-6 h-6" />
                 تأكيد الطلب والدفع
              </button>

              <div className="mt-8 flex items-center justify-center gap-3 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                 <ShieldCheck className="w-4 h-4" />
                 Safe & Secure Transactions
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
