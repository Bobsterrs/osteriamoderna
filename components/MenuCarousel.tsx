"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  "/images/dish_1_truffle_pasta_1778158662641.png",
  "/images/detail_1.png",
  "/images/dish_2_wagyu_steak_1778158702755.png",
  "/images/detail_2.png",
  "/images/dish_4_seafood_1778158779768.png",
];

const MenuCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-2xl border border-white/5">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={IMAGES[index]}
            alt="Restaurant Experience"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
      </AnimatePresence>

      {/* Progress Bars */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {IMAGES.map((_, i) => (
          <div 
            key={i} 
            className={`h-[2px] transition-all duration-500 ${i === index ? "w-12 bg-white" : "w-4 bg-white/20"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCarousel;
