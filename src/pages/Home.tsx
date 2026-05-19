import React from 'react';
import { motion } from 'motion/react';
import { useLang } from '../context/LangContext';
import { AnimatedReveal } from '../components/AnimatedReveal';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { agencyConfig } from '../config/data';

export function Home() {
  const { t } = useLang();

  return (
    <div className="min-h-screen pb-20">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
        
        {/* ReactBits style abstract glow / light effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-400/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <AnimatedReveal>
            <div className="inline-block px-3 py-1 bg-green-400 text-black text-[10px] sm:text-xs font-black uppercase tracking-tighter mb-6">
                 {t(`${agencyConfig.internal.origin} → ${agencyConfig.internal.location}`, `მიუნხენი → თბილისი`)}
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <h1 className="text-[64px] md:text-[100px] lg:text-[120px] font-black tracking-tighter uppercase text-white mb-6 leading-[0.85]">
              <span className="block">DIGITAL</span>
              <span className="text-transparent border-t-[4px] md:border-t-[8px] border-green-400 pt-4 block" style={{ WebkitTextStroke: '1px white' }}>AGENCY</span>
            </h1>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <p className="text-xl md:text-2xl opacity-60 mb-10 max-w-2xl mx-auto font-serif italic text-white">
              {t(
                "We architect, design, and deploy exceptional digital products. Elevating businesses with AI integrations and premium web experiences.",
                "პრემიუმ კლასის აპლიკაციები და ვებ-გვერდები. ბიზნესის ავტომატიზაცია AI-ს დახმარებით."
              )}
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-green-400 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-colors flex items-center justify-center gap-2 group border border-green-400">
                {t("View Portfolio", "პორტფოლიოს ნახვა")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/offers" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-xs hover:border-green-400 transition-colors flex items-center justify-center gap-2 group">
                {t("Special Offers", "აქციები")}
              </Link>
            </div>
          </AnimatedReveal>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-green-400 hidden md:block"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-green-400 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Brief Concept Section */}
      <section className="py-24 px-6 border-t border-white/10 bg-zinc-900 border-l">
        <div className="max-w-7xl mx-auto">
           <AnimatedReveal>
             <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-green-400 mb-6">
               UBANI / {agencyConfig.internal.experience}
             </h2>
             <h3 className="text-3xl md:text-5xl font-black mb-16 max-w-3xl leading-tight uppercase font-sans tracking-tighter">
               {t(
                 "10 Years of intense engineering experience, now accessible locally.",
                 "10 წლიანი უწყვეტი გამოცდილება პირდაპირ თქვენი სტარტაპისა თუ ბიზნესისთვის."
               )}
             </h3>
           </AnimatedReveal>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {["Engineering Quality", "AI Integrations", "Conversion Rates", "Scalability"].map((val, idx) => (
                <div key={val} className="border-l-[2px] border-green-400 pl-4 py-2 bg-zinc-800">
                  <span className="font-bold text-[10px] text-white/50 block mb-1 uppercase tracking-widest">0{idx + 1}</span>
                  <p className="text-xl font-bold font-mono text-white tracking-widest uppercase">{val}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

    </div>
  );
}
