import React from 'react';
import { useLang } from '../context/LangContext';
import { AnimatedReveal } from '../components/AnimatedReveal';
import { agencyConfig } from '../config/data';

export function Process() {
  const { lang, t } = useLang();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedReveal>
          <div className="mb-20">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-green-400 mb-6">
              {t("How We Build", "მუშაობის პროცესი")}
            </h2>
            <h1 className="text-[64px] md:text-[84px] font-black tracking-tighter uppercase leading-[0.85] mb-6">
              {t("Our", "ჩვენი")} <br/> {t("Process", "პროცესი")}
            </h1>
            <p className="text-lg opacity-60 max-w-xl font-serif italic text-white">
              {t(
                "A transparent, milestone-driven approach to delivering your digital product.",
                "გამჭვირვალე პროცესი, სადაც კლიენტი ჩართულია განვითარების ყველა ეტაპზე."
              )}
            </p>
          </div>
        </AnimatedReveal>

        <div className="space-y-12 relative border-l-2 border-white/10 ml-4 md:ml-8 pl-8 md:pl-12">
          {agencyConfig.process.map((step, idx) => (
             <AnimatedReveal key={idx} delay={idx * 0.15}>
                <div className="relative group">
                  <div className="absolute -left-[42px] md:-left-[58px] top-0 w-8 h-8 rounded-none bg-[#050505] border-[3px] border-white/20 group-hover:border-green-400 flex items-center justify-center transition-colors">
                     <div className="w-2 h-2 bg-white group-hover:bg-green-400 transition-colors" />
                  </div>
                  <div className="bg-[#111] border border-white/5 p-6 hover:border-green-400/30 transition-colors">
                    <span className="font-mono text-green-400 text-[10px] mb-2 block tracking-[0.3em] uppercase">Step {step[lang].step}</span>
                    <h3 className="text-2xl font-black font-sans uppercase text-white mb-3">{step[lang].title}</h3>
                    <p className="text-xs opacity-50 uppercase max-w-2xl">{step[lang].body}</p>
                  </div>
                </div>
             </AnimatedReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
