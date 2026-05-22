import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('Home', 'მთავარი') },
    { path: '/services', label: t('Services & Pricing', 'სერვისები და ფასები') },
    { path: '/process', label: t('How We Build', 'პროცესი') },
    { path: '/portfolio', label: t('Portfolio', 'პორტფოლიო') },
    { path: '/blog', label: t('Blog', 'ბლოგი') },
    { path: '/contact', label: t('Contact', 'კონტაქტი') },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="hidden md:flex shrink-0 items-center gap-4 group">
          <div className="text-2xl lg:text-3xl font-black tracking-tighter leading-none text-white">
            UBANI<span className="text-green-400">.</span>
          </div>
          <div className="h-4 w-[1px] bg-white/20 mx-1 hidden lg:block"></div>
          <div className="text-[9px] xl:text-[10px] uppercase tracking-[0.28em] font-bold opacity-60 hidden lg:block">
            Europe &bull; Georgia
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex min-w-0 flex-1 items-center justify-end gap-4 lg:gap-6">
          <div className="flex min-w-0 items-center justify-end gap-3 lg:gap-5 xl:gap-8 text-[9px] lg:text-[10px] xl:text-[11px] uppercase tracking-widest font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "whitespace-nowrap transition-colors",
                  location.pathname === link.path ? "text-green-400 border-b border-green-400 pb-1" : "text-white/60 hover:text-green-400"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="shrink-0 pl-4 lg:pl-6 border-l border-white/10 flex items-center gap-3">
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
        <div className="md:hidden flex w-full items-center justify-between">
          <Link to="/" className="text-2xl font-black tracking-tighter leading-none text-white">
            UBANI<span className="text-green-400">.</span>
          </Link>
          <div className="flex items-center gap-2">
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
          <button className="text-zinc-400 p-2" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

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
        </div>
      )}
    </nav>
  );
}
