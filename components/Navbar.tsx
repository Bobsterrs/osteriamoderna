"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-0 right-0 mx-auto z-50 bg-black/90 backdrop-blur-xl border border-white/10 px-10 py-5 rounded-full flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-[95%] max-w-[1100px]"
    >
      {/* Left Section: Logo */}
      <div className="flex-1 flex justify-start items-center gap-6">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity whitespace-nowrap">
          {t.hero.title}
        </Link>
        
        {/* Language Toggles */}
        <div className="flex items-center gap-3 border-l border-white/10 pl-6">
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
      <div className="hidden lg:flex items-center gap-8 border-x border-white/10 px-10 mx-6">
        <Link href="/story" className="nav-link text-[11px]">{t.nav.story}</Link>
        <Link href="/chef" className="nav-link text-[11px]">{t.nav.chef}</Link>
        <Link href="/menu" className="nav-link text-[11px]">{t.nav.menu}</Link>
      </div>

      {/* Right Section: Socials + CTA */}
      <div className="flex-1 flex justify-end items-center gap-6">
        <div className="hidden md:flex items-center gap-5 border-r border-white/10 pr-6 mr-2">
           <a href="#" className="text-white/40 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
           </a>
        </div>
        
        <Link 
          href="/reserve" 
          className="bg-white text-black px-6 py-3 rounded-full text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-accent transition-all duration-300 whitespace-nowrap"
        >
          {t.nav.book}
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
