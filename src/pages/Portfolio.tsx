import React from "react";
import { useLang } from "../context/LangContext";
import { AnimatedReveal } from "../components/AnimatedReveal";
import { ExternalLink, Github } from "lucide-react";
import gamitsvaleImg from "../public/gamitsvale@.png";
import malerImg from "../public/Maler@.png";
import traImg from "../public/TRA@.png";
import turistImg from "../public/TURIST@.png";

const projects = [
  {
    img: gamitsvaleImg,
    name: "Gamitsvale.GE",
    link: "https://gamitsvale.ge",
    meta: "gamitsvale.ge",
    type: "website",
    tags: ["Next.js", "React", "TailwindCSS"],
  },
  {
    img: traImg,
    name: "TRA.DE",
    link: "https://github.com/AKKK1",
    meta: "github.com/AKKK1/trade-platform",
    type: "github",
    tags: ["Node.js", "WebSockets", "Finance"],
  },
  {
    img: turistImg,
    name: "GEORGIA SOUL",
    link: "https://github.com/AKKK1/turistpayload",
    meta: "github.com/AKKK1/turistpayload",
    type: "github",
    tags: ["React Native", "Firebase", "Maps"],
  },
  {
    img: malerImg,
    name: "Maler Arbeit",
    link: "https://github.com/akkk1/maler-arbeit",
    meta: "github.com/akkk1/maler-arbeit",
    type: "github",
    tags: ["Three.js", "Framer Motion", "WebGL"],
  },
];

export function Portfolio() {
  const { t } = useLang();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedReveal>
          <div className="mb-20">
            <h2 className="text-[11px] uppercase tracking-[0.4em] font-bold text-green-400 mb-6">
              {t("Portfolio / Selected Works", "პორტფოლიო / ნამუშევრები")}
            </h2>
            <h1 className="text-[64px] md:text-[84px] font-black tracking-tighter uppercase leading-[0.85] mb-6">
              {t("Selected", "რჩეული")} <br /> {t("Works", "პროექტები")}
            </h1>
            <p className="text-lg opacity-60 max-w-xl font-serif italic text-white">
              {t(
                "A glimpse into our engineering and design capabilities. We build scalable, beautiful applications.",
                "ჩვენი უახლესი ნამუშევრები. სისწრაფის, დიზაინისა და ტექნოლოგიების სინთეზი.",
              )}
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, idx) => (
            <AnimatedReveal key={idx} delay={idx * 0.1}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="p-0 border border-white/10 group cursor-pointer h-[400px] flex flex-col justify-end relative bg-[#111] overflow-hidden hover:border-green-400 transition-colors block"
              >
                {/* Background Image Layer */}
                <div className="absolute inset-0">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                </div>

                {/* Content Layer */}
                <div className="relative z-10 p-8 flex justify-between items-end">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black font-sans uppercase mb-4 text-white group-hover:text-green-400 transition-colors">
                      {p.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 border border-white/20 bg-black/50 text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                      {p.type === "github" ? (
                        <Github className="w-4 h-4" />
                      ) : (
                        <ExternalLink className="w-4 h-4" />
                      )}
                      <span className="text-[10px] font-mono tracking-widest break-all">
                        {p.meta}
                      </span>
                    </div>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center border border-white/20 text-white font-black bg-black/50 backdrop-blur-sm shrink-0">
                    +
                  </div>
                </div>
              </a>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
