import React from 'react';
import { agencyConfig } from '../config/data';
import { useLang } from '../context/LangContext';
import { Instagram, Github, MessageCircle } from 'lucide-react';

export function Footer() {
  const { t } = useLang();
  
  return (
    <footer className="grid grid-cols-1 md:grid-cols-12 px-10 py-6 border-t border-white/10 bg-[#050505] gap-4 md:gap-0 mt-auto">
      <div className="col-span-1 md:col-span-3 text-[10px] opacity-40 uppercase tracking-tighter">
        &copy; 2024 UBANI DIGITAL AGENCY<br/>MUNICH -&gt; TBILISI
      </div>
      
      <div className="col-span-1 md:col-span-6 flex flex-col md:flex-row justify-center gap-4 md:gap-12 items-start md:items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-white">Next.js & Reactbits Standard</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full border border-white/20"></div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-white">Full SEO Optimized</span>
        </div>
      </div>
      
      <div className="col-span-1 md:col-span-3 flex justify-start md:justify-end flex-col mt-4 md:mt-0 text-[10px] font-mono uppercase gap-2">
        <div className="flex gap-4 opacity-80 mb-2">
           <a href={agencyConfig.internal.socials.whatsapp} target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors flex items-center gap-1">
             <MessageCircle className="w-3 h-3" /> WA
           </a>
           <a href={agencyConfig.internal.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors flex items-center gap-1">
             <Instagram className="w-3 h-3" /> IG
           </a>
           <a href={agencyConfig.internal.socials.github} target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors flex items-center gap-1">
             <Github className="w-3 h-3" /> GH
           </a>
        </div>
        <div className="opacity-50">
          <span>{agencyConfig.internal.phone}</span><br />
          <span>{agencyConfig.internal.adminEmail}</span>
        </div>
      </div>
    </footer>
  );
}
