"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuCarousel from "@/components/MenuCarousel";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t, language } = useLanguage();

  const reviews = [
    { 
      name: "Marco V.", 
      text: language === "it" 
        ? "Un'esperienza sensoriale unica. L'architettura del piatto si fonde perfettamente con il gusto." 
        : "A unique sensory experience. The architecture of the dish merges perfectly with the taste.", 
      rating: 5 
    },
    { 
      name: "Elena G.", 
      text: language === "it" 
        ? "Lo Chef Roberto Falavigna ha creato qualcosa di magico. Il miglior Wagyu mai provato." 
        : "Chef Roberto Falavigna has created something magical. The best Wagyu I've ever tasted.", 
      rating: 5 
    },
    { 
      name: "Luca S.", 
      text: language === "it" 
        ? "Ambiente sofisticato e cucina d'eccellenza. Un punto di riferimento a Milano." 
        : "Sophisticated environment and excellent cuisine. A landmark in Milan.", 
      rating: 5 
    },
  ];

  return (
    <main className="relative min-h-screen bg-transparent text-white selection:bg-accent selection:text-black">
      <Navbar />
      
      {/* Home-only Architectural Background */}
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none">
        <Image 
          src="/images/global_bg.png" 
          alt="Architectural Background" 
          fill 
          className="object-cover grayscale brightness-110 contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      <Hero />
      
      <div className="relative z-10">
        
        {/* The Restaurant Experience */}
        <section className="py-24 px-6 border-b border-white/5 bg-black/20 backdrop-blur-[2px]">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-5">
                   <h2 className="text-accent text-xs font-bold tracking-[0.5em] uppercase mb-8">{t.home.experience.tag}</h2>
                   <h3 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-8 leading-tight">
                      {t.home.experience.title}
                   </h3>
                   <p className="text-white/60 text-lg leading-relaxed mb-8">
                      {t.home.experience.desc}
                   </p>
                   <Link href="/story" className="nav-link border-b border-white/20 pb-1">{t.home.experience.cta}</Link>
                </div>
                <div className="md:col-span-7">
                   <MenuCarousel />
                </div>
             </div>
          </div>
        </section>

        {/* Menu Teaser */}
        <section className="py-24 px-6 bg-black/40 border-b border-white/5 text-center">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-accent text-xs font-bold tracking-[0.5em] uppercase mb-8">{t.home.selection.tag}</h2>
             <h3 className="text-4xl md:text-5xl font-light tracking-tight mb-12 max-w-2xl mx-auto leading-tight">
                {t.home.selection.title}
             </h3>
             <Link href="/menu" className="bg-white text-black px-12 py-5 rounded-full font-bold tracking-widest uppercase hover:bg-accent transition-colors duration-500 inline-block">
                {t.home.selection.cta}
             </Link>
          </div>
        </section>

        {/* Chef Presentation - BEIGE BACKGROUND WITH OPACITY TO SHOW WALL */}
        <section className="py-24 px-6 bg-accent/80 backdrop-blur-md text-black">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image src="/images/chef_roberto.png" alt="Chef Roberto" fill className="object-cover" />
                 </div>
                 <div>
                    <h2 className="text-black/40 text-xs font-bold tracking-[0.5em] uppercase mb-6">{t.home.chef.tag}</h2>
                    <h3 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-8 leading-none">{t.home.chef.title}</h3>
                    <p className="text-black/80 text-xl leading-relaxed mb-8">
                       "{t.home.chef.desc}"
                    </p>
                    <Link href="/chef" className="inline-block border-b-2 border-black/20 pb-1 font-bold uppercase tracking-widest text-sm hover:border-black transition-colors">
                       {t.home.chef.cta}
                    </Link>
                 </div>
              </div>

              {/* Social Proof / Reviews */}
              <div className="mt-24 pt-24 border-t border-black/10">
                 <div className="flex items-center gap-4 mb-12">
                    <div className="flex gap-1">
                       {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="black" className="text-black" />)}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest">{t.home.chef.proof}</span>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {reviews.map((review, i) => (
                       <div key={i} className="bg-black/5 p-8 rounded-xl">
                          <Quote className="text-black/20 mb-4" size={24} />
                          <p className="text-sm italic mb-6 leading-relaxed">"{review.text}"</p>
                          <span className="text-xs font-bold uppercase tracking-widest">— {review.name}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 text-center bg-black/40 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="text-left">
                <h2 className="text-[10vw] font-bold tracking-tighter uppercase mb-0 opacity-10 leading-none">Reserve</h2>
                <div className="relative z-10 mt-[-2rem]">
                   <h3 className="text-4xl md:text-6xl font-light mb-12 tracking-tight leading-tight">{t.home.cta.title}</h3>
                   <Link href="/reserve" className="bg-white text-black px-12 py-5 rounded-full font-bold tracking-widest uppercase hover:bg-accent transition-colors duration-500 inline-block">
                     {t.home.cta.btn}
                   </Link>
                </div>
             </div>
             <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                <Image src="/images/candlelit_table.png" alt="Candlelit Table" fill className="object-cover" />
             </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
