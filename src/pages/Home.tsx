import React from 'react';
import { motion } from 'motion/react';
import { useLang } from '../context/LangContext';
import { AnimatedReveal } from '../components/AnimatedReveal';
import { Link } from 'react-router-dom';
import { agencyConfig } from '../config/data';
import { Share2 } from 'lucide-react';

export function Home() {
  const { lang, t } = useLang();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t('Premium Web Development Agency', 'პრემიუმ ვებ სააგენტო'),
          text: t('Check out our digital services and AI integration.', 'ნახეთ ჩვენი ციფრული სერვისები და AI ინტეგრაცია.'),
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t('Link copied to clipboard!', 'ბმული დაკოპირებულია!'));
    }
  };

  return (
    <div className="pt-20 lg:h-screen lg:min-h-[800px] flex flex-col">
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5 border-b border-white/10">
        
        {/* Left Side: Hero Section */}
        <section className="lg:col-span-7 bg-[#050505] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden h-full min-h-[500px]">
          <div className="absolute -left-10 top-20 opacity-[0.03] text-[120px] lg:text-[180px] font-black pointer-events-none whitespace-nowrap">
            EUROPE
          </div>
          
          <div className="relative z-10 pt-4 lg:pt-10">
            <AnimatedReveal>
              <div className="inline-block px-3 py-1 bg-green-400 text-black text-[10px] font-black uppercase tracking-tighter mb-6">
                  {t("European-standard web development", "ევროპული სტანდარტის ვებ დეველოპმენტი")}
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <h1 className="text-[54px] sm:text-[64px] lg:text-[84px] leading-[0.85] font-black tracking-tighter uppercase mb-6 font-display">
                Web<br/>Development<br/>
                <span className="text-transparent border-t-4 border-green-400 pt-4 block w-max mt-4" style={{ WebkitTextStroke: '1px white' }}>
                  {t("For Georgia", "საქართველოსთვის")}
                </span>
              </h1>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <p className="text-lg opacity-60 max-w-md leading-relaxed italic font-serif text-white">
                {t(
                  "European-standard websites, web applications, SEO, and AI integrations tailored for Georgian businesses that want more leads, sales, and trust online.",
                  "ვქმნით სწრაფ საიტებს, ვებ აპლიკაციებს, SEO სტრატეგიას და AI ინტეგრაციებს საქართველოში ბიზნესებისთვის, რომლებსაც სჭირდებათ მეტი კლიენტი, გაყიდვები და ნდობა ონლაინ."
                )}
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="flex gap-4">
                  <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 bg-green-400 text-black font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-colors">
                    {t("Build My Website", "საიტის დამზადება")}
                  </Link>
                  <button onClick={handleShare} className="inline-flex items-center justify-center px-4 py-4 bg-[#111] border border-white/10 text-white font-black hover:border-green-400/50 hover:text-green-400 transition-colors" title={t("Share", "გაზიარება")}>
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-[10px] font-mono opacity-80 uppercase leading-relaxed text-white">
                  {agencyConfig.internal.phone}<br/>
                  {agencyConfig.internal.adminEmail}
                </div>
              </div>
            </AnimatedReveal>
          </div>

          <AnimatedReveal delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 pb-4 lg:pb-10 relative z-10">
              <div className="border-l-[2px] border-green-400 pl-4">
                <div className="text-2xl font-bold font-mono text-white">AI</div>
                <div className="text-[10px] uppercase opacity-50 text-white tracking-widest font-bold">Neural Networks</div>
              </div>
              <div className="border-l-[2px] border-green-400 pl-4">
                <div className="text-2xl font-bold font-mono text-white">NEXT.JS</div>
                <div className="text-[10px] uppercase opacity-50 text-white tracking-widest font-bold">Tech Stack</div>
              </div>
              <div className="border-l-[2px] border-green-400 pl-4">
                <div className="text-2xl font-bold font-mono text-white">SEO</div>
                <div className="text-[10px] uppercase opacity-50 text-white tracking-widest font-bold">Search Boost</div>
              </div>
            </div>
          </AnimatedReveal>
        </section>

        {/* Right Side: Offers & Portfolio */}
        <section className="lg:col-span-5 bg-[#0a0a0a] flex flex-col lg:border-l border-white/10 h-full">
          
          <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
            <AnimatedReveal delay={0.2}>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-green-400">
                    ექსკლუზიური შეთავაზება
                  </h2>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.25em] font-bold text-white/40">
                    მხოლოდ ქართველებისთვის
                  </p>
                </div>
                <Link to="/offers" className="text-[10px] uppercase font-bold text-white/50 border border-white/10 px-2 py-1 hover:text-white hover:border-white/40 transition-colors">
                  {t("View All", "ყველა")}
                </Link>
              </div>
              
              <div className="space-y-4">
                {agencyConfig.offers.slice(0, 3).map((offer, idx) => (
                  <Link to={`/offers/${offer.id}`} key={offer.id} className="group bg-[#111] border border-white/5 p-4 flex justify-between gap-4 items-center hover:border-green-400/50 transition-colors cursor-pointer w-full">
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm uppercase text-white group-hover:text-green-400 transition-colors">{offer[lang].title}</h3>
                      <p className="text-[10px] opacity-40 uppercase line-clamp-1 max-w-[150px] sm:max-w-[200px] mt-1">{offer[lang].desc}</p>
                    </div>
                    <div className="shrink-0 flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs line-through opacity-30 font-mono">
                          {offer.oldPriceLabel[lang]}
                        </div>
                        <div className="text-xl font-mono text-green-400 font-bold">
                          {offer.priceLabel[lang]}
                        </div>
                      </div>
                      <div className="text-xl font-mono text-green-400 font-bold shrink-0">
                        -{offer.discount}%
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedReveal>
          </div>

          <Link to="/portfolio" className="lg:h-[35%] min-h-[250px] bg-green-400 p-6 sm:p-8 text-black flex flex-col justify-between group hover:bg-white transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="text-[32px] sm:text-[48px] font-black leading-[0.9] uppercase font-display tracking-tighter">
                {t("Portfolio", "პორტფოლიო")}<br/>{t("Selected", "რჩეული")}
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                <span className="font-bold text-xl block leading-none relative -top-[1px]">+</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-4 gap-2">
              <div className="h-12 sm:h-16 bg-black/10 overflow-hidden border border-black/5">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&fit=crop" className="w-full h-full object-cover opacity-50 mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div className="h-12 sm:h-16 bg-black/20 overflow-hidden border border-black/5">
                <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=400&fit=crop" className="w-full h-full object-cover opacity-50 mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 delay-75" />
              </div>
              <div className="h-12 sm:h-16 bg-black/10 overflow-hidden border border-black/5">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&fit=crop" className="w-full h-full object-cover opacity-50 mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 delay-150" />
              </div>
              <div className="h-12 sm:h-16 bg-black/30 flex items-center justify-center font-bold text-xs uppercase border border-black/5 group-hover:bg-black group-hover:text-white transition-colors">
                {t("View All", "ყველა")}
              </div>
            </div>
          </Link>
          
        </section>
      </main>
    </div>
  );
}
