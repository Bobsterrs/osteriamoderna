"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const StoryPage = () => {
  const { t, language } = useLanguage();

  return (
    <main className="bg-transparent text-white min-h-screen relative overflow-x-hidden">
      <Navbar />
      
      {/* Fixed Background Context */}
      <div className="fixed inset-0 z-0 h-screen w-full opacity-20 pointer-events-none">
        <Image 
          src="/images/story_bg.png" 
          alt="History" 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>

      <div className="relative z-10 pt-40 pb-20">
        <section className="px-6 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-4">{t.story.title}</h1>
            <p className="text-white/40 tracking-[0.5em] uppercase text-xs">{t.story.tag}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8 text-white/70 leading-relaxed text-lg">
               <p>{t.story.desc1}</p>
               <p>{t.story.desc2}</p>
            </div>
            <div className="space-y-8">
               <div className="border border-white/10 p-8 bg-black/60 backdrop-blur-xl rounded-xl">
                  <h4 className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-10">{t.story.values.tag}</h4>
                  <ul className="space-y-10">
                     <li>
                        <span className="block font-bold uppercase text-base text-white mb-2">{t.story.values.v1.t}</span>
                        <p className="text-sm text-white/50 leading-relaxed">{t.story.values.v1.d}</p>
                        <p className="text-xs text-white/30 mt-4 italic leading-relaxed">
                          {language === "it" ? "Crediamo che la verità dell'ingrediente sia il pilastro su cui si regge ogni nostra creazione." : "We believe the truth of the ingredient is the pillar upon which each of our creations rests."}
                        </p>
                     </li>
                     <li>
                        <span className="block font-bold uppercase text-base text-white mb-2">{t.story.values.v2.t}</span>
                        <p className="text-sm text-white/50 leading-relaxed">{t.story.values.v2.d}</p>
                     </li>
                     <li>
                        <span className="block font-bold uppercase text-base text-white mb-2">{t.story.values.v3.t}</span>
                        <p className="text-sm text-white/50 leading-relaxed">{t.story.values.v3.d}</p>
                     </li>
                  </ul>
               </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default StoryPage;
