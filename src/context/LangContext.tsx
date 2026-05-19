import React, { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'en' | 'ge';

interface LangContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (enText: string, geText: string) => string;
}

const LangContext = createContext<LangContextProps | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ge');

  useEffect(() => {
    // Optionally persist in localStorage
    const saved = localStorage.getItem('ubani_lang') as Lang;
    if (saved) setLang(saved);
  }, []);

  const handleSetLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem('ubani_lang', l);
  };

  const t = (enText: string, geText: string) => {
    return lang === 'en' ? enText : geText;
  };

  return (
    <LangContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLang must be used within LangProvider');
  return context;
}
