"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const MenuGrid = () => {
  const { t, language } = useLanguage();

  const menuData = [
    {
      category: t.menu.categories.antipasti,
      image: "/images/antipasti.png",
      items: [
        { 
          name: language === "it" ? "Burrata Architettonica" : "Architectural Burrata", 
          desc: language === "it" ? "Pomodori heirloom, olio al basilico, cristalli di sale." : "Heirloom tomatoes, basil oil, salt crystals.",
          price: "18"
        },
        { 
          name: language === "it" ? "Carpaccio di Manzo" : "Beef Carpaccio", 
          desc: language === "it" ? "Truffle mayo, scaglie di parmigiano 36 mesi, rucola selvatica." : "Truffle mayo, 36-month parmesan shavings, wild rocket.",
          price: "22"
        },
        { 
          name: language === "it" ? "Calamari Croccanti" : "Crispy Calamari", 
          desc: language === "it" ? "Farina di riso, salsa tartara fatta in casa, limone candito." : "Rice flour, homemade tartar sauce, candied lemon.",
          price: "20"
        },
      ]
    },
    {
      category: t.menu.categories.primi,
      image: "/images/primi.png",
      items: [
        { 
          name: language === "it" ? "Fettuccine d'Oro" : "Golden Fettuccine", 
          desc: language === "it" ? "Pasta fatta a mano, burro di Normandia, tartufo nero." : "Handmade pasta, Normandy butter, black truffle.",
          price: "28"
        },
        { 
          name: language === "it" ? "Risotto Geometrico" : "Geometric Risotto", 
          desc: language === "it" ? "Zafferano in pistilli, riduzione di midollo, oro edibile." : "Saffron threads, marrow reduction, edible gold.",
          price: "32"
        },
        { 
          name: language === "it" ? "Tortelli di Zucca" : "Pumpkin Tortelli", 
          desc: language === "it" ? "Mostarda mantovana, amaretto, burro e salvia." : "Mantua mustard, amaretto, butter and sage.",
          price: "24"
        },
      ]
    },
    {
      category: t.menu.categories.secondi,
      image: "/images/secondi.png",
      items: [
        { 
          name: language === "it" ? "Tagliata Dry-Aged" : "Dry-Aged Steak", 
          desc: language === "it" ? "Ribeye frollata 60 giorni, verdure bruciate, sale affumicato." : "60-day aged ribeye, charred vegetables, smoked salt.",
          price: "38"
        },
        { 
          name: language === "it" ? "Branzino in Struttura" : "Structured Sea Bass", 
          desc: language === "it" ? "Cottura a bassa temperatura, crema di finocchio, aria di limone." : "Low-temp cooking, fennel cream, lemon air.",
          price: "34"
        },
        { 
          name: language === "it" ? "Costolette d'Agnello" : "Lamb Chops", 
          desc: language === "it" ? "Crostata di erbe, purè di patate affumicato, jus al timo." : "Herb crust, smoked potato puree, thyme jus.",
          price: "36"
        },
      ]
    },
    {
      category: t.menu.categories.contorni,
      image: "/images/detail_1.png",
      items: [
        { 
          name: language === "it" ? "Patate al Tartufo" : "Truffle Potatoes", 
          desc: language === "it" ? "Patate di Avezzano, olio al tartufo bianco, rosmarino." : "Avezzano potatoes, white truffle oil, rosemary.",
          price: "10"
        },
        { 
          name: language === "it" ? "Cicoria Saltata" : "Sautéed Chicory", 
          desc: language === "it" ? "Aglio, peperoncino di Tropea, alici del Cantabrico." : "Garlic, Tropea chili, Cantabrian anchovies.",
          price: "8"
        },
        { 
          name: language === "it" ? "Verdure di Stagione" : "Seasonal Vegetables", 
          desc: language === "it" ? "Grigliate al carbone, vinaigrette al balsamico." : "Coal-grilled, balsamic vinaigrette.",
          price: "9"
        },
      ]
    },
    {
      category: t.menu.categories.dolci,
      image: "/images/dolci.png",
      items: [
        { 
          name: language === "it" ? "Tiramisù De-costruito" : "Deconstructed Tiramisu", 
          desc: language === "it" ? "Mascarpone montato, cialda al caffè, polvere di cacao puro." : "Whipped mascarpone, coffee wafer, pure cocoa dust.",
          price: "14"
        },
        { 
          name: language === "it" ? "Fondente al Cioccolato" : "Chocolate Fondant", 
          desc: language === "it" ? "Cuore caldo, gelato al fior di latte, lamponi." : "Warm heart, fior di latte gelato, raspberries.",
          price: "12"
        },
        { 
          name: language === "it" ? "Panna Cotta Modulare" : "Modular Panna Cotta", 
          desc: language === "it" ? "Vaniglia del Madagascar, coulis di frutti di bosco, menta." : "Madagascar vanilla, forest fruit coulis, mint.",
          price: "12"
        },
      ]
    }
  ];

  return (
    <div className="space-y-32">
      {menuData.map((section, idx) => (
        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-16 items-center`}>
          <motion.div 
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 h-[500px] relative rounded-2xl overflow-hidden group shadow-2xl"
          >
            <Image 
              src={section.image} 
              alt={section.category} 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <h3 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-white opacity-20 group-hover:opacity-0 transition-opacity">
                  {section.category}
               </h3>
            </div>
          </motion.div>

          <div className="w-full md:w-1/2 space-y-12">
            <h4 className="text-accent text-xs font-bold tracking-[0.6em] uppercase">{section.category}</h4>
            <div className="space-y-10">
              {section.items.map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex justify-between items-end mb-2">
                    <h5 className="text-2xl font-bold uppercase tracking-tighter group-hover:text-accent transition-colors">{item.name}</h5>
                    <div className="h-[1px] flex-1 mx-4 mb-2 bg-white/10 group-hover:bg-accent/30 transition-colors" />
                    <span className="text-sm font-light text-white/40">€{item.price}</span>
                  </div>
                  <p className="text-white/40 text-sm italic leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;
