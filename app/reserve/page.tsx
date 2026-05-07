"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const ReservePage = () => {
  return (
    <main className="bg-transparent text-white min-h-screen relative overflow-x-hidden">
      <Navbar />

      <div className="fixed inset-0 z-0 h-screen w-full opacity-10 pointer-events-none">
        <Image src="/images/restaurant_hero_1778158642569.png" alt="Atmosphere" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>
      
      <div className="relative z-10 pt-40 pb-20">
        <section className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase mb-4">Prenota</h1>
            <p className="text-white/60 text-lg leading-relaxed mt-8 max-w-xl mx-auto">
               Assicurati un posto nel nostro tempio del gusto. Consigliamo la prenotazione con largo anticipo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-black/60 backdrop-blur-2xl p-8 md:p-12 border border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
            <div className="space-y-6">
              <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent">Dettagli Contatto</h3>
              <div className="space-y-4">
                 <div className="group">
                    <label className="text-[10px] uppercase text-white/30 tracking-widest block mb-1">Nome Completo</label>
                    <input type="text" placeholder="Roberto Rossi" className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-accent transition-colors text-white placeholder:text-white/10 text-sm" />
                 </div>
                 <div className="group">
                    <label className="text-[10px] uppercase text-white/30 tracking-widest block mb-1">Email</label>
                    <input type="email" placeholder="roberto@esempio.it" className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-accent transition-colors text-white placeholder:text-white/10 text-sm" />
                 </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-accent">Dettagli Tavolo</h3>
              <div className="space-y-4">
                 <div className="group">
                    <label className="text-[10px] uppercase text-white/30 tracking-widest block mb-1">Data</label>
                    <input type="date" className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-accent transition-colors text-white appearance-none text-sm" />
                 </div>
                 <div className="group">
                    <label className="text-[10px] uppercase text-white/30 tracking-widest block mb-1">Ospiti</label>
                    <select className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-accent transition-colors text-white text-sm">
                       <option className="bg-neutral-900">2 Persone</option>
                       <option className="bg-neutral-900">4 Persone</option>
                       <option className="bg-neutral-900">6 Persone</option>
                    </select>
                 </div>
              </div>
            </div>

            <div className="md:col-span-2 pt-6">
               <button className="w-full bg-white text-black py-4 font-bold tracking-[0.3em] uppercase hover:bg-accent transition-colors duration-500 rounded-full text-sm">
                  Richiedi Tavolo
               </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default ReservePage;
