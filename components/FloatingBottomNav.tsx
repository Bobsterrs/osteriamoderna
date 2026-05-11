"use client";

import { motion } from "framer-motion";
import { ArrowUp, Menu, BookOpen, Calendar, MapPin } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const FloatingBottomNav = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: t.nav.story, href: "#story", icon: <BookOpen size={14} /> },
    { label: t.nav.menu, href: "#menu", icon: <Menu size={14} /> },
    { label: t.nav.book, href: "#reserve", icon: <Calendar size={14} /> },
    { label: t.nav.location, href: "#location", icon: <MapPin size={14} /> },
  ];

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="pill-bottom left-0 right-0 mx-auto w-max"
    >
      <div className="flex items-center">
        {navItems.map((item) => (
          <a 
            key={item.label}
            href={item.href} 
            className="flex items-center gap-2 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            {item.icon}
            <span className="hidden sm:inline uppercase whitespace-nowrap">{item.label}</span>
          </a>
        ))}
      </div>
      <div className="w-[1px] h-4 bg-white/10 mx-2" />
      <button 
        onClick={scrollToTop}
        className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-all"
      >
        <ArrowUp size={16} />
      </button>
    </motion.div>
  );
};

export default FloatingBottomNav;
