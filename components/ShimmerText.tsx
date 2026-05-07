"use client";

/**
 * @author: @dorianbaffier
 * @description: Shimmer Text
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShimmerTextProps {
  text: string;
  className?: string;
}

export default function ShimmerText({
  text = "Text Shimmer",
  className,
}: ShimmerTextProps) {
  return (
    <div className="flex items-center p-0">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          animate={{
            backgroundPosition: ["200% center", "-200% center"],
          }}
          className={cn(
            "bg-[length:200%_100%] bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-clip-text font-bold text-3xl text-transparent",
            className
          )}
          transition={{
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {text}
        </motion.h1>
      </motion.div>
    </div>
  );
}
