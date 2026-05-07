import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="text-3xl font-black font-heading tracking-tight flex items-center gap-2 text-white">
              <span className="text-accent underline decoration-accent/30 underline-offset-4">a</span>
              <span>.market</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              الوجهة الأولى للمنتجات والحلول الرقمية الفاخرة في العالم العربي. نركز على الجودة، الثقة، والابتكار المستمر.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-accent"></span>
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/products" className="hover:text-accent transition-colors flex items-center gap-2 hover:gap-3"> <ArrowLeft className="w-3 h-3 rotate-180" /> جميع المنتجات</Link></li>
              <li><Link to="/categories" className="hover:text-accent transition-colors flex items-center gap-2 hover:gap-3"> <ArrowLeft className="w-3 h-3 rotate-180" /> التصنيفات</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors flex items-center gap-2 hover:gap-3"> <ArrowLeft className="w-3 h-3 rotate-180" /> من نحن</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors flex items-center gap-2 hover:gap-3"> <ArrowLeft className="w-3 h-3 rotate-180" /> تواصل معنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 relative inline-block">
              سياساتنا
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-accent"></span>
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/shipping" className="hover:text-accent transition-colors flex items-center gap-2 hover:gap-3"> <ArrowLeft className="w-3 h-3 rotate-180" /> سياسة الشحن</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors flex items-center gap-2 hover:gap-3"> <ArrowLeft className="w-3 h-3 rotate-180" /> الشروط والأحكام</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors flex items-center gap-2 hover:gap-3"> <ArrowLeft className="w-3 h-3 rotate-180" /> سياسة الخصوصية</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors flex items-center gap-2 hover:gap-3"> <ArrowLeft className="w-3 h-3 rotate-180" /> الأسئلة الشائعة</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black mb-8 relative inline-block">
              ابقَ على اطلاع
              <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-accent"></span>
            </h4>
            <p className="text-sm text-gray-400 mb-6">اشترك في قائمتنا البريدية للحصول على أحدث العروض والمنتجات المجانية.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:bg-white/10 focus:border-accent transition-all text-sm"
              />
              <button className="absolute left-2 top-2 bottom-2 bg-accent text-primary p-3 rounded-xl hover:scale-105 active:scale-95 transition-all">
                <Send className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-medium">
            جميع الحقوق محفوظة © {new Date().getFullYear()} <span className="text-accent">a.market</span>
          </p>
          <div className="flex gap-6">
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" alt="Paypal" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" alt="Visa" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" alt="Mastercard" />
          </div>
        </div>
      </div>
    </footer>
  );
}
