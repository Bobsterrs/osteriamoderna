"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import MenuGrid from "@/components/MenuGrid";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const MenuPage = () => {
  const { t, language } = useLanguage();

  return (
    <main className="bg-transparent text-white min-h-screen relative overflow-x-hidden">
      <Navbar />
      
      {/* Background Section */}
      <div className="fixed inset-0 z-0 h-screen w-full opacity-30 pointer-events-none">
        <Image src="/images/menu_bg.png" alt="Menu Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>

      <div className="relative z-10 pt-40">
        <section className="px-6 mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase mb-4">{t.menu.title}</h1>
              <p className="text-white/40 tracking-[0.5em] uppercase text-xs mt-4">{t.menu.tag}</p>
          </motion.div>

          <div className="max-w-3xl mx-auto text-center mt-12 mb-16">
             <p className="text-white/60 text-lg leading-relaxed mb-10">
                {t.menu.desc}
             </p>
             <a 
              href={`/docs/menu_${language}.pdf`} 
              download 
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
             >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                {t.menu.downloadPDF}
             </a>
          </div>

          <div className="max-w-7xl mx-auto pb-32">
            <MenuGrid />
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 py-12 border-y border-white/10 bg-black/40 backdrop-blur-xl">
             <div className="px-6 text-center">
                <h4 className="font-bold uppercase text-xs tracking-widest mb-3 text-accent">{t.language === "it" ? "Materia Prima" : "Raw Material"}</h4>
                <p className="text-xs text-white/40 leading-relaxed italic">{t.language === "it" ? "Selezioniamo solo piccoli produttori locali d'eccellenza." : "We select only small local producers of excellence."}</p>
             </div>
             <div className="px-6 border-x border-white/10 text-center">
                <h4 className="font-bold uppercase text-xs tracking-widest mb-3 text-accent">{t.language === "it" ? "Tecnica" : "Technique"}</h4>
                <p className="text-xs text-white/40 leading-relaxed italic">{t.language === "it" ? "Fusione di metodi ancestrali e tecnologie moderne." : "Fusion of ancestral methods and modern technologies."}</p>
             </div>
             <div className="px-6 text-center">
                <h4 className="font-bold uppercase text-xs tracking-widest mb-3 text-accent">{t.language === "it" ? "Plating" : "Plating"}</h4>
                <p className="text-xs text-white/40 leading-relaxed italic">{t.language === "it" ? "Ogni piatto è una composizione architettonica pura." : "Each dish is a pure architectural composition."}</p>
             </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default MenuPage;
