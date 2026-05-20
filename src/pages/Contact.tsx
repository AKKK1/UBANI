import React from 'react';
import { useLang } from '../context/LangContext';
import { AnimatedReveal } from '../components/AnimatedReveal';
import { agencyConfig } from '../config/data';
import { Phone, Mail, Instagram, Github, MessageCircle, MapPin, Linkedin, Facebook } from 'lucide-react';

export function Contact() {
  const { t } = useLang();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedReveal>
           <h1 className="text-4xl sm:text-6xl font-black font-sans uppercase mb-6 text-white leading-[0.9]">
             {t("Contact Us", "კონტაქტი")}
           </h1>
           <p className="text-lg opacity-60 font-serif italic mb-12 max-w-2xl text-white">
             {t("Ready to start your next premium digital project? Reach out to us.", "მზად ხართ ახალი პრემიუმ პროექტის დასაწყებად? დაგვიკავშირდით.")}
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Contact Info Card */}
             <div className="bg-[#111] border border-white/10 p-8 hover:border-green-400/50 transition-colors">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-green-400 mb-8 border-b border-white/10 pb-4">
                  {t("Get in touch", "საკონტაქტო ინფორმაცია")}
                </h3>
                
                <div className="space-y-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center bg-white/5 border border-white/10 text-green-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase opacity-50 tracking-widest">{t("Phone", "ტელეფონი")}</div>
                      <a href={`tel:${agencyConfig.internal.phone.replace(/\s+/g, '')}`} className="font-mono mt-1 hover:text-green-400 block transition-colors">
                        {agencyConfig.internal.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center bg-white/5 border border-white/10 text-green-400">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase opacity-50 tracking-widest">WhatsApp</div>
                      <a href={agencyConfig.internal.socials.whatsapp} target="_blank" rel="noreferrer" className="font-mono mt-1 hover:text-green-400 block transition-colors">
                        Say Hello!
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center bg-white/5 border border-white/10 text-green-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase opacity-50 tracking-widest">{t("Email", "ელ. ფოსტა")}</div>
                      <a href={`mailto:${agencyConfig.internal.adminEmail}`} className="font-mono mt-1 hover:text-green-400 block transition-colors">
                        {agencyConfig.internal.adminEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center bg-white/5 border border-white/10 text-green-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase opacity-50 tracking-widest">{t("Locations", "ლოკაციები")}</div>
                      <div className="font-mono mt-1 opacity-90">
                        {agencyConfig.internal.location} <span className="opacity-50">/</span> {agencyConfig.internal.origin}
                      </div>
                    </div>
                  </div>

                </div>
             </div>

             {/* Socials Card */}
             <div className="bg-[#111] border border-white/10 p-8 hover:border-green-400/50 transition-colors">
               <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-green-400 mb-8 border-b border-white/10 pb-4">
                  {t("Social", "სოციალური ქსელები")}
               </h3>

               <div className="flex flex-col gap-4">
                  <a href={agencyConfig.internal.socials.linkedin} target="_blank" rel="noreferrer" className="group flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-green-400/50 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 text-white group-hover:text-green-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm font-bold uppercase tracking-widest">LinkedIn</span>
                    </div>
                  </a>

                  <a href={agencyConfig.internal.socials.facebook} target="_blank" rel="noreferrer" className="group flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-green-400/50 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 text-white group-hover:text-green-400 transition-colors">
                      <Facebook className="w-5 h-5" />
                      <span className="text-sm font-bold uppercase tracking-widest">Facebook</span>
                    </div>
                  </a>

                  <a href={agencyConfig.internal.socials.instagram} target="_blank" rel="noreferrer" className="group flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-green-400/50 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 text-white group-hover:text-green-400 transition-colors">
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm font-bold uppercase tracking-widest">Instagram</span>
                    </div>
                  </a>
                  
                  <a href={agencyConfig.internal.socials.github} target="_blank" rel="noreferrer" className="group flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-green-400/50 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 text-white group-hover:text-green-400 transition-colors">
                      <Github className="w-5 h-5" />
                      <span className="text-sm font-bold uppercase tracking-widest">GitHub</span>
                    </div>
                  </a>
               </div>
             </div>
           </div>
        </AnimatedReveal>
      </div>
    </div>
  );
}
