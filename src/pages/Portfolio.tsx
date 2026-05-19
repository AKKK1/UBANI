import React from 'react';
import { useLang } from '../context/LangContext';
import { AnimatedReveal } from '../components/AnimatedReveal';
import { SpotlightCard } from '../components/SpotlightCard';

const projects = [
  { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", name: "Fintech Dashboard", tags: ["React", "D3.js"] },
  { img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2670&auto=format&fit=crop", name: "AI Analytics Platform", tags: ["Next.js", "Python"] },
  { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", name: "E-Commerce System", tags: ["Shopify", "Tailwind"] },
  { img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop", name: "Real Estate Portal", tags: ["GCP", "Maps API"] }
];

export function Portfolio() {
  const { t } = useLang();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedReveal>
          <div className="mb-20">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-green-400 mb-6">
              {t("Portfolio / Selected Works", "პორტფოლიო / ნამუშევრები")}
            </h2>
            <h1 className="text-[64px] md:text-[84px] font-black tracking-tighter uppercase leading-[0.85] mb-6">
              {t("Selected", "რჩეული")} <br/> {t("Works", "პროექტები")}
            </h1>
            <p className="text-lg opacity-60 max-w-xl font-serif italic text-white">
              {t("A glimpse into our engineering and design capabilities. We build scalable, beautiful applications.", "ჩვენი უახლესი ნამუშევრები. სისწრაფის, დიზაინისა და ტექნოლოგიების სინთეზი.")}
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, idx) => (
            <AnimatedReveal key={idx} delay={idx * 0.1}>
              <div className="p-0 border border-white/10 group cursor-pointer h-[400px] flex flex-col justify-end relative bg-[#111] overflow-hidden hover:border-green-400 transition-colors">
                {/* Background Image Layer */}
                <div className="absolute inset-0">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition duration-700 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                </div>
                
                {/* Content Layer */}
                <div className="relative z-10 p-8 flex justify-between items-end">
                   <div>
                     <h3 className="text-2xl font-black font-sans uppercase mb-4 text-white group-hover:text-green-400 transition-colors">{p.name}</h3>
                     <div className="flex gap-2">
                       {p.tags.map(t => (
                         <span key={t} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 border border-white/20 bg-black/50 text-white">
                           {t}
                         </span>
                       ))}
                     </div>
                   </div>
                   <div className="w-12 h-12 flex items-center justify-center border border-white/20 text-white font-black bg-black/50 backdrop-blur-sm shrink-0">
                      +
                   </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
