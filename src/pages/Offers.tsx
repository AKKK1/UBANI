import React from 'react';
import { useLang } from '../context/LangContext';
import { AnimatedReveal } from '../components/AnimatedReveal';
import { SpotlightCard } from '../components/SpotlightCard';
import { agencyConfig } from '../config/data';

export function Offers() {
  const { lang, t } = useLang();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedReveal>
          <div className="mb-20">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-green-400 mb-6">
              {t("Exclusive Offers", "შეთავაზებები")}
            </h2>
            <h1 className="text-[64px] md:text-[84px] font-black tracking-tighter uppercase leading-[0.85] mb-6">
              {t("Offers", "აქციები")}
            </h1>
            <p className="text-lg opacity-60 max-w-xl font-serif italic text-white">
              {t("Limited time promotions specially curated for local businesses. High value at discounted rates.", "შეზღუდული დროით მიმდინარე ფასდაკლებები. უმაღლესი ხარისხი საუკეთესო ფასად.")}
            </p>
          </div>
        </AnimatedReveal>

        <div className="space-y-4">
          {agencyConfig.offers.filter(o => o.active).map((offer, idx) => (
             <AnimatedReveal key={offer.id} delay={idx * 0.1}>
                <div className="group bg-[#111] border border-white/5 p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-green-400/50 transition-colors">
                  <div className="mb-4 md:mb-0">
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase py-1 text-green-400 block mb-2">
                       {offer.tag}
                    </span>
                    <h3 className="text-xl font-black font-sans uppercase mb-1">
                      {offer[lang].title}
                    </h3>
                    <p className="text-xs opacity-40 uppercase max-w-md">
                      {offer[lang].desc}
                    </p>
                  </div>
                  <div className="text-right flex md:flex-col items-center md:items-end justify-between w-full md:w-auto mt-4 md:mt-0 gap-4 md:gap-0">
                    <button className="px-4 py-2 border border-white/20 text-[10px] font-black uppercase text-white hover:bg-white hover:text-black transition-colors block md:hidden">
                       {t("Claim Offer", "აქციის გამოყენება")}
                    </button>
                    <div className="flex bg-green-400 text-black px-2 py-1 items-center gap-2 md:mb-2 w-max">
                      <span className="text-sm md:text-2xl font-mono font-black tracking-tighter">
                        -{offer.discount}%
                      </span>
                    </div>
                    <button className="px-4 py-2 border border-white/20 text-[10px] font-black uppercase text-white hover:bg-white hover:text-black transition-colors hidden md:block">
                      {t("Claim Offer", "აქციის გამოყენება")}
                    </button>
                  </div>
                </div>
             </AnimatedReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
