"use client";

import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section id="story" className="py-48 px-6 bg-[#0c0c0c]">
      <div className="max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent text-xs font-bold tracking-[0.5em] uppercase block mb-12"
        >
          Nostra Filosofia
        </motion.span>
        
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-light leading-tight tracking-tight mb-16"
        >
          Crediamo che la cucina sia una forma d'arte visiva. <br />
          <span className="text-white/30 italic">L'Osteria Moderna</span> fonde rigore architettonico e passione mediterranea.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-white/60 leading-relaxed text-lg">
              Fondata nel cuore del design distrettuale, la nostra osteria non è solo un ristorante, ma uno spazio dove il tempo si ferma per lasciare spazio ai sensi.
            </p>
            <div className="h-[1px] w-24 bg-white/20" />
            <p className="text-white/60 leading-relaxed text-lg">
              Ogni ingrediente è selezionato con la stessa cura con cui un architetto sceglie i suoi materiali: marmo, legno, e ora... sapore.
            </p>
          </div>
          <div className="flex flex-col justify-end">
             <div className="border border-white/10 p-12 aspect-square flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-bold mb-4">M.F.</span>
                <span className="text-xs tracking-[0.3em] uppercase text-white/40">Executive Chef</span>
                <p className="mt-8 text-sm italic">"La semplicità è l'ultima sofisticazione."</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
