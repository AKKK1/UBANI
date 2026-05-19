import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { cn } from '../lib/utils';
import { Hexagon, Menu, X } from 'lucide-react';

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('Home', 'მთავარი') },
    { path: '/services', label: t('Services & Pricing', 'სერვისები და ფასები') },
    { path: '/process', label: t('How We Build', 'პროცესი') },
    { path: '/portfolio', label: t('Portfolio', 'პორტფოლიო') },
    { path: '/offers', label: t('Special Offers', 'აქციები') },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-4 group">
          <div className="text-3xl font-black tracking-tighter leading-none text-white">
            UBANI<span className="text-green-400">.</span>
          </div>
          <div className="h-4 w-[1px] bg-white/20 mx-2 hidden sm:block"></div>
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60 hidden sm:block">
            Munich &bull; Tbilisi
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-[11px] uppercase tracking-widest font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "transition-colors",
                  location.pathname === link.path ? "text-green-400 border-b border-green-400 pb-1" : "text-white/60 hover:text-green-400"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="px-6 border-l border-white/10 flex items-center gap-3">
            <button
              onClick={() => setLang('ge')}
              className={cn("text-[10px] uppercase font-bold transition-all px-3 py-1 border", lang === 'ge' ? "bg-green-400 text-black border-green-400" : "border-white/10 text-white hover:bg-white hover:text-black")}
            >
              GE
            </button>
            <button
              onClick={() => setLang('en')}
              className={cn("text-[10px] uppercase font-bold transition-all px-3 py-1 border", lang === 'en' ? "bg-green-400 text-black border-green-400" : "border-white/10 text-white hover:bg-white hover:text-black")}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-400 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#050505] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-[11px] font-bold uppercase tracking-widest py-2 transition-colors",
                location.pathname === link.path ? "text-green-400" : "text-white/60 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center py-4 gap-4 border-t border-white/10 mt-2">
            <button onClick={() => { setLang('ge'); setIsOpen(false); }} className={cn("px-4 py-2 border text-[10px] font-bold uppercase", lang === 'ge' ? "bg-green-400 text-black border-green-400" : "text-white border-white/10 hover:bg-white hover:text-black")}>GE</button>
            <button onClick={() => { setLang('en'); setIsOpen(false); }} className={cn("px-4 py-2 border text-[10px] font-bold uppercase", lang === 'en' ? "bg-green-400 text-black border-green-400" : "text-white border-white/10 hover:bg-white hover:text-black")}>EN</button>
          </div>
        </div>
      )}
    </nav>
  );
}
