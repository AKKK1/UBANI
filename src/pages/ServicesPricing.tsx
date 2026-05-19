import React from 'react';
import { motion } from 'motion/react';
import { useLang } from '../context/LangContext';
import { AnimatedReveal } from '../components/AnimatedReveal';
import { agencyConfig } from '../config/data';

export function ServicesPricing() {
  const { lang, t } = useLang();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedReveal>
          <div className="mb-20">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-green-400 mb-6">
              {t("Specialized Services", "სერვისები და ფასები")}
            </h2>
            <h1 className="text-[64px] md:text-[84px] font-black tracking-tighter uppercase leading-[0.85] mb-6">
              {t("Services &", "სერვისები")} <br/> {t("Pricing", "და ფასები")}
            </h1>
            <p className="text-lg opacity-60 max-w-xl font-serif italic text-white">
              {t(
                "Premium solutions crafted for scalability. From landing pages to deep logic AI platforms, we build digital infrastructure that generates revenue.",
                "ოპტიმიზირებული გადაწყვეტილებები ბიზნესისთვის. სავიზიტო საიტებიდან ვრცელ AI სისტემებამდე."
              )}
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agencyConfig.services.map((service, idx) => (
            <AnimatedReveal key={service.id} delay={idx * 0.1}>
              <div className="group bg-[#111] border border-white/5 p-8 flex flex-col justify-between h-full hover:border-green-400/50 transition-colors">
                <div className="mb-8 flex justify-between items-start">
                  <div className="w-12 h-12 flex items-center justify-center border border-white/20 text-white font-black">
                    +
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] opacity-40 uppercase mb-1">{t("Starting From", "საწყისი ფასი")}</div>
                    <span className="font-mono text-xl font-bold text-green-400">
                      {service.basePriceLabel}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-black font-sans uppercase mb-3 text-white">
                    {service[lang].title}
                  </h3>
                  <p className="text-xs opacity-40 uppercase max-w-md">
                    {service[lang].desc}
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
