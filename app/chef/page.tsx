"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ChefPage = () => {
  const experiences = [
    { restaurant: "Maido", location: "Lima, Peru", role: "Sous Chef", year: "2020 - 2023" },
    { restaurant: "Asador Etxebarri", location: "Atxondo, Spain", role: "Chef de Partie", year: "2018 - 2020" },
    { restaurant: "Alchemist", location: "Copenhagen, Denmark", role: "Experimental Research", year: "2016 - 2018" },
    { restaurant: "Osteria Francescana", location: "Modena, Italy", role: "Senior Chef", year: "2014 - 2016" },
  ];

  return (
    <main className="bg-transparent text-white selection:bg-accent selection:text-black min-h-screen pt-40 relative overflow-x-hidden">
      <Navbar />
      
      <div className="fixed inset-0 z-0 h-screen w-full opacity-20 pointer-events-none">
        <Image src="/images/restaurant_detail_2_wine_cellar_1778162928592.png" alt="Kitchen" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Chef Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:col-span-5 relative h-[600px] grayscale rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/chef_roberto.png" 
              alt="Chef Roberto Falavigna" 
              fill 
              className="object-cover"
            />
          </motion.div>

          {/* Chef Bio */}
          <div className="md:col-span-7">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent text-xs font-bold tracking-[0.5em] uppercase block mb-4"
            >
              Executive Chef
            </motion.span>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-8 leading-none">Roberto <br /> Falavigna</h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-6 max-w-2xl text-white/70"
            >
              <p className="text-lg leading-relaxed">
                Il viaggio di Roberto Falavigna nel mondo dell'alta cucina è iniziato tra le vigne della sua terra d'origine, plasmato dalle metropoli più dinamiche del globo.
              </p>
              <p className="leading-relaxed">
                Dopo aver appreso le basi a Modena, Roberto ha intrapreso un pellegrinaggio gastronomico che lo ha visto prima a Copenhagen, partecipando ai progetti di ricerca dell'Alchemist.
              </p>
              <p className="text-lg text-accent/60 italic py-4 border-y border-white/5">
                "La mia cucina non nutre il corpo, ma costruisce ponti tra memoria e futuro."
              </p>
            </motion.div>

            {/* Experience List */}
            <div className="mt-16">
              <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-white/40 mb-10">Percorso Professionale</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={exp.restaurant}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                    className="flex justify-between items-end border-b border-white/10 pb-4"
                  >
                    <div>
                      <h4 className="text-xl font-bold uppercase">{exp.restaurant}</h4>
                      <p className="text-white/40 text-[10px] mt-1 uppercase tracking-widest">{exp.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-accent text-xs font-bold tracking-widest uppercase">{exp.role}</p>
                      <p className="text-white/20 text-[10px] mt-1">{exp.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ChefPage;
