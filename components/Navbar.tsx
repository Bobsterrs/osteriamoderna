"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 md:top-8 left-0 right-0 mx-auto z-50 bg-black/90 backdrop-blur-xl border border-white/10 px-4 py-3 md:px-10 md:py-5 rounded-full flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-[95%] max-w-[1100px]"
    >
      {/* Left Section: Logo */}
      <div className="flex-shrink-0 flex justify-start items-center gap-2 md:gap-6">
        <Link href="/" className="text-sm md:text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity whitespace-nowrap">
          {t.hero.title}
        </Link>
        
        {/* Language Toggles */}
        <div className="flex items-center gap-2 md:gap-3 border-l border-white/10 pl-2 md:pl-6">
           <button 
            onClick={() => setLanguage("it")}
            className={`text-lg transition-all ${language === "it" ? "scale-125 opacity-100" : "opacity-30 hover:opacity-100 scale-100 grayscale"}`}
           >
              🇮🇹
           </button>
           <button 
            onClick={() => setLanguage("en")}
            className={`text-lg transition-all ${language === "en" ? "scale-125 opacity-100" : "opacity-30 hover:opacity-100 scale-100 grayscale"}`}
           >
              🇬🇧
           </button>
        </div>
      </div>

      {/* Middle Section: Links */}
      <div className="hidden lg:flex flex-1 justify-center items-center gap-8 px-10">
        <Link href="/story" className="nav-link text-[11px]">{t.nav.story}</Link>
        <Link href="/chef" className="nav-link text-[11px]">{t.nav.chef}</Link>
        <Link href="/menu" className="nav-link text-[11px]">{t.nav.menu}</Link>
      </div>

      {/* Right Section: Socials + CTA */}
      <div className="flex-shrink-0 flex justify-end items-center gap-2 md:gap-6">
        <div className="hidden md:flex items-center gap-5 border-r border-white/10 pr-6 mr-2">
           <a href="https://www.instagram.com/arcobalenosenzaglutine" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
           </a>
        </div>
        
        <Link 
          href="/reserve" 
          className="bg-white text-black px-3 py-2 md:px-6 md:py-3 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-accent transition-all duration-300 whitespace-nowrap"
        >
          <span className="hidden sm:inline">{t.nav.book}</span>
          <span className="sm:hidden">Prenota</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden text-white hover:text-accent transition-colors ml-1 md:ml-2"
        >
          <Menu size={20} className="md:w-6 md:h-6" />
        </button>
      </div>
    </motion.nav>

    {/* Full Screen Mobile Menu Overlay */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
        >
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 text-white/50 hover:text-white"
          >
            <X size={32} />
          </button>
          
          <div className="flex flex-col items-center gap-10 text-center">
            <Link href="/story" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl md:text-3xl font-light uppercase tracking-[0.2em] hover:text-accent transition-colors">
              {t.nav.story}
            </Link>
            <Link href="/chef" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl md:text-3xl font-light uppercase tracking-[0.2em] hover:text-accent transition-colors">
              {t.nav.chef}
            </Link>
            <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl md:text-3xl font-light uppercase tracking-[0.2em] hover:text-accent transition-colors">
              {t.nav.menu}
            </Link>
            <Link href="/reserve" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl md:text-3xl font-light uppercase tracking-[0.2em] text-accent hover:text-white transition-colors">
              {t.nav.book}
            </Link>
            
            <div className="mt-12 flex gap-6">
               <a href="https://www.instagram.com/arcobalenosenzaglutine" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
