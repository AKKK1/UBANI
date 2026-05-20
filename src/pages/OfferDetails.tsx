import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { agencyConfig } from '../config/data';
import { AnimatedReveal } from '../components/AnimatedReveal';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export function OfferDetails() {
  const { id } = useParams();
  const { lang, t } = useLang();
  
  const offer = agencyConfig.offers.find(o => o.id === id);
  if (!offer) return <Navigate to="/offers" />;

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedReveal>
          <Link to="/offers" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-green-400 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> {t("Back to Offers", "აქციებში დაბრუნება")}
          </Link>
          
          <div className="bg-[#111] border border-white/10 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <div className="text-[64px] sm:text-[100px] font-black font-mono text-white/5 leading-none pointer-events-none select-none">
                -{offer.discount}%
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-green-400 text-black text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                {offer.tag}
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black font-sans uppercase mb-6 text-white leading-[0.9]">
                {offer[lang].title}
              </h1>
              
              <p className="text-lg opacity-60 font-serif italic text-white mb-10 max-w-2xl">
                {offer[lang].desc}
              </p>
              
              <div className="border-t border-white/10 pt-10 mt-10">
                <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-green-400 mb-8">
                  {t("What's Included", "რას მოიცავს შეთავაზება:")}
                </h3>
                
                <ul className="space-y-6">
                  {(offer[lang] as any).details.map((detail: string, idx: number) => (
                    <li key={idx} className="flex gap-4">
                      <div className="mt-1 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <span className="text-sm sm:text-base font-bold opacity-80 text-white">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-16 flex flex-col justify-start gap-4">
                <a href={agencyConfig.internal.socials.whatsapp} target="_blank" rel="noreferrer" className="w-max px-8 py-4 bg-green-400 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-colors flex items-center justify-center text-center">
                  {t("Claim via WhatsApp", "აქციის მიღება WhatsApp-ით")}
                </a>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </div>
  );
}
