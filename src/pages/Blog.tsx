import React from 'react';
import { useLang } from '../context/LangContext';
import { AnimatedReveal } from '../components/AnimatedReveal';

export function Blog() {
  const { t } = useLang();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedReveal>
           <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-green-400 mb-6">
             {t("Blog & News", "ბლოგი და სიახლეები")}
           </h2>
           <h1 className="text-[64px] md:text-[84px] font-black tracking-tighter uppercase leading-[0.85] mb-6">
             {t("Insights", "ბლოგი")} <br/> & Tech
           </h1>
           <p className="text-lg opacity-60 font-serif italic text-white mb-12">
             {t("Thoughts on Next.js, AI integrations, performance, and UI/UX engineering.", "სტატიები ვებ-დეველოპმენტსა და თანამედროვე ტექნოლოგიურ ტენდენციებზე.")}
           </p>

           <div className="p-8 border border-white/10 bg-[#111] text-center">
             <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest text-white">No articles published yet. Check back soon.</p>
           </div>
        </AnimatedReveal>
      </div>
    </div>
  );
}
