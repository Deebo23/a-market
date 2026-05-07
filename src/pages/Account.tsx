import React from 'react';
import { User, Package, Heart, LogOut, ChevronLeft, MapPin, Bell, ShieldCheck, Mail, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { auth } from '../lib/firebase';
import { signOut, User as FirebaseUser } from 'firebase/auth';

export default function Account({ user }: { user: FirebaseUser | null }) {
  if (!user) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
         <h2 className="text-3xl font-black mb-8">يجب عليك تسجيل الدخول أولاً</h2>
         <button className="bg-primary text-white px-10 py-4 rounded-2xl font-black">تسجيل الدخول</button>
      </div>
    );
  }

  const handleSignOut = () => signOut(auth);

  const menuItems = [
    { icon: <Package className="w-5 h-5" />, title: 'طلباتي', desc: 'تتبع وإدارة مشترياتك الرقمية' },
    { icon: <Heart className="w-5 h-5" />, title: 'المفضلة', desc: 'المنتجات التي ترغب بشرائها لاحقاً' },
    { icon: <Bell className="w-5 h-5" />, title: 'الإشعارات', desc: 'آخر التحديثات والعروض لمنتجاتك' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: 'الأمان', desc: 'تغيير كلمة المرور وإعدادات الخصوصية' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
           <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-black/5 text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-32 gold-gradient opacity-10 group-hover:opacity-20 transition-opacity"></div>
              
              <div className="relative z-10 pt-4">
                 <div className="w-32 h-32 rounded-full border-8 border-white shadow-2xl mx-auto mb-6 bg-gray-100 overflow-hidden">
                    <img src={user.photoURL || 'https://i.pravatar.cc/300'} alt="User" className="w-full h-full object-cover" />
                 </div>
                 <h2 className="text-2xl font-black text-primary">{user.displayName || 'عميل مميز'}</h2>
                 <p className="text-sm font-bold text-gray-400 mt-1">{user.email}</p>
                 <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-black mt-6">
                    <Star className="w-3 h-3 fill-current" />
                    عضوية VIP
                 </div>
              </div>
           </div>

           <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-black/5 overflow-hidden">
             <div className="p-4 space-y-1">
                {menuItems.map((item, i) => (
                   <button key={i} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-all text-right group">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all">
                            {item.icon}
                         </div>
                         <div>
                            <h4 className="font-bold text-sm leading-none mb-1">{item.title}</h4>
                            <p className="text-[10px] text-gray-400 font-bold">{item.desc}</p>
                         </div>
                      </div>
                      <ChevronLeft className="w-4 h-4 text-gray-300 group-hover:text-accent group-hover:-translate-x-1 transition-all" />
                   </button>
                ))}
                <button 
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-red-50 transition-all text-red-500 mt-4 border-t border-gray-50 font-black text-sm"
                >
                  <LogOut className="w-5 h-5" />
                  تسجيل الخروج
                </button>
             </div>
           </div>
        </aside>

        {/* Content Area */}
        <main className="lg:col-span-8 space-y-12">
           <div className="bg-primary text-white p-12 rounded-[3.5rem] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-right">
                 <div>
                    <h3 className="text-3xl font-black mb-2">رصيدك الحالي</h3>
                    <p className="text-gray-400 font-bold text-sm">يمكنك استخدام رصيدك لشراء أي منتج فوراً</p>
                 </div>
                 <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 min-w-[200px]">
                    <span className="text-sm font-bold text-accent block mb-2 uppercase tracking-[0.2em]">Balance</span>
                    <span className="text-5xl font-black">0.00 <span className="text-xl">ر.س</span></span>
                 </div>
              </div>
           </div>

           <div>
              <h3 className="text-2xl font-black mb-8 flex items-center gap-4">
                 أحدث المشتريات
                 <span className="text-xs text-accent font-black bg-accent/10 px-3 py-1 rounded-full">3 طلبات</span>
              </h3>
              
              <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/5 overflow-hidden">
                 <div className="overflow-x-auto">
                    <table className="w-full text-right">
                       <thead className="bg-gray-50 text-gray-400 font-black text-xs uppercase tracking-widest border-b border-gray-100">
                          <tr>
                             <th className="p-6">المنتج</th>
                             <th className="p-6">التاريخ</th>
                             <th className="p-6">المبلغ</th>
                             <th className="p-6">الحالة</th>
                             <th className="p-6"></th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-50">
                          {[1,2].map(i => (
                             <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-6">
                                   <div className="flex items-center gap-4">
                                      <div className="w-12 h-12 bg-gray-100 rounded-xl"></div>
                                      <span className="font-bold text-primary">اسم المنتج الرقمي...</span>
                                   </div>
                                </td>
                                <td className="p-6 text-sm font-bold text-gray-500">24 مايو 2026</td>
                                <td className="p-6 font-black text-primary">120 ر.س</td>
                                <td className="p-6">
                                   <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">مكتمل</span>
                                </td>
                                <td className="p-6">
                                   <button className="bg-primary text-white p-2 rounded-lg hover:bg-accent transition-colors"><Package className="w-4 h-4" /></button>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </main>
      </div>
    </div>
  );
}
