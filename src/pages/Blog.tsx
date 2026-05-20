import React from 'react';
import { useLang } from '../context/LangContext';
import { AnimatedReveal } from '../components/AnimatedReveal';
import { agencyConfig } from '../config/data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Blog() {
  const { lang, t } = useLang();

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

           <div className="space-y-6">
             {agencyConfig.blog.map((post, idx) => (
                <AnimatedReveal key={post.id} delay={0.1 * idx}>
                   <Link to={`/blog/${post.id}`} className="block group bg-[#111] border border-white/5 p-8 hover:border-green-400/50 transition-colors cursor-pointer flex flex-col md:flex-row gap-6 md:items-center justify-between">
                     <div className="flex-1">
                        <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest mb-3 block">
                          {post.date}
                        </span>
                        <h3 className="text-2xl font-black font-sans uppercase mb-3 text-white group-hover:text-green-400 transition-colors">
                          {post[lang].title}
                        </h3>
                        <p className="text-sm opacity-60 font-serif italic max-w-2xl text-white">
                          {post[lang].desc}
                        </p>
                     </div>
                     <div className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center text-white group-hover:bg-green-400 group-hover:text-black group-hover:border-green-400 transition-all shrink-0">
                       <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                     </div>
                   </Link>
                </AnimatedReveal>
             ))}
           </div>
        </AnimatedReveal>
      </div>
    </div>
  );
}
