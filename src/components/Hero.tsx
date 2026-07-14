import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Star } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { StaggeredText } from "./StaggeredText";
import { ProgressiveImage } from "./ProgressiveImage";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".hero-fade-in",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, delay: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-24 flex flex-col justify-center bg-bg-deep overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ProgressiveImage 
          src="https://s1.directupload.eu/images/260714/cfvqpsin.webp"
          alt="Spirituelles Ambiente"
          className="w-full h-full object-cover animate-ken-burns"
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-0 md:ml-[8%] md:max-w-[60%] lg:max-w-[50%] flex flex-col items-start mt-12 md:mt-0">
        
        <div className="hero-fade-in flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-accent" />
          <span className="font-sans text-accent text-[11px] font-semibold tracking-[0.25em] uppercase italic">
            Mediale Lebensberatung seit über 15 Jahren
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[96px] leading-[1.05] mb-10 font-medium text-text-dark">
          <StaggeredText text="Klarheit finden, wo Zweifel sind." delay={0.2} />
        </h1>

        <p className="hero-fade-in text-text-dark-muted text-lg md:text-xl max-w-[520px] mb-12 leading-relaxed font-light">
          Spezialisierte Begleitung für Herzensangelegenheiten, Partnerrückführung und die Auflösung tiefsitzender Blockaden.
        </p>

        <div className="hero-fade-in flex flex-col sm:flex-row items-center gap-6 mb-16">
          <MagneticButton 
            as="a" 
            href="#kontakt" 
            className="px-10 py-4 rounded-full bg-gradient-to-br from-accent-soft to-accent text-text-light text-sm font-semibold hover:brightness-110 transition-all duration-300 w-full sm:w-auto text-center shadow-[0_8px_16px_rgba(234,179,8,0.2)]"
          >
            Kostenlose Erstanalyse
          </MagneticButton>
          <MagneticButton 
            as="a" 
            href="#leistungen" 
            className="px-10 py-4 rounded-full border border-white/20 text-text-dark text-sm hover:bg-white/5 transition-colors duration-300 w-full sm:w-auto text-center backdrop-blur-sm"
          >
            Leistungsübersicht
          </MagneticButton>
        </div>

        <div className="hero-fade-in flex items-center gap-3 text-[12px] uppercase tracking-widest text-text-dark-muted opacity-80">
          <div className="flex gap-1 text-[#DB9C32]">
            {[1,2,3,4,5].map(i => (
              <Star 
                key={i} 
                size={14} 
                fill="currentColor" 
                strokeWidth={1} 
                className="animate-pulse"
                style={{ 
                  animationDuration: '2s', 
                  animationDelay: `${i * 0.15}s`,
                  filter: 'drop-shadow(0 0 4px rgba(219,156,50,0.5))'
                }} 
              />
            ))}
          </div>
          <span className="mt-0.5">Exzellent auf Trustpilot</span>
        </div>
      </div>
    </section>
  );
}
