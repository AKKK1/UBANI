import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { agencyConfig } from '../config/data';
import { AnimatedReveal } from '../components/AnimatedReveal';
import { ArrowLeft } from 'lucide-react';

export function BlogPost() {
  const { id } = useParams();
  const { lang, t } = useLang();
  
  const post = agencyConfig.blog.find(b => b.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) return <Navigate to="/blog" />;

  // Quick type cast as data.ts schema has content now
  const paragraphs = ((post[lang] as any).content || "").split('\n\n');

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedReveal>
          <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-green-400 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" /> {t("Back to Blog", "ბლოგზე დაბრუნება")}
          </Link>

          <header className="mb-12 border-b border-white/10 pb-12">
            <div className="text-[10px] font-mono opacity-50 uppercase tracking-[0.2em] mb-4 text-green-400">
              {post.date}
            </div>
            <h1 className="text-[32px] sm:text-[48px] md:text-[60px] font-black font-sans uppercase leading-[0.9] text-white">
              {post[lang].title}
            </h1>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            {paragraphs.map((p: string, idx: number) => (
              <p key={idx} className="text-base md:text-lg opacity-80 leading-relaxed font-serif text-white mb-8">
                {p}
              </p>
            ))}
          </div>
          
          <div className="mt-16 border-t border-white/10 pt-10">
             <a href={agencyConfig.internal.socials.whatsapp} target="_blank" rel="noreferrer" className="w-max px-8 py-4 bg-green-400 text-black font-black uppercase tracking-widest text-[10px] hover:bg-white transition-colors flex items-center justify-center text-center">
               {t("Consult with our developers", "გაიარეთ კონსულტაცია პროგრამისტთან")}
             </a>
          </div>
        </AnimatedReveal>
      </div>
    </div>
  );
}
