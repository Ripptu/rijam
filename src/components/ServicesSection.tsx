import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: "Partnerrückführung",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80",
    },
    {
      title: "Kartenlegen",
      image: "https://images.unsplash.com/photo-1601633534579-3dc1ba511d7e?auto=format&fit=crop&q=80",
    },
    {
      title: "Lebensberatung",
      image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80",
    },
    {
      title: "Handlesung",
      image: "https://images.unsplash.com/photo-1628156170624-9b2ee006f8c7?auto=format&fit=crop&q=80",
    },
    {
      title: "Blockadenauflösung",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80",
    }
  ];

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const container = containerRef.current;
      if (!container) return;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${container.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
        }
      });

      tl.to(container, {
        x: () => -(container.scrollWidth - window.innerWidth + 100), // +100 for padding
        ease: "none"
      });
      
      return () => {
        // Cleanup if necessary
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="leistungen" className="lg:h-screen flex flex-col justify-center bg-bg-dark border-t border-black/5 overflow-hidden py-24 lg:py-0">
      <div className="max-w-7xl px-6 md:px-12 w-full mx-auto mb-12 shrink-0">
        <div className="text-accent text-[10px] tracking-[0.2em] uppercase font-semibold mb-4">
          Expertise
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-text-light max-w-xl">
          Meine Leistungen
        </h2>
      </div>

      <div className="flex w-full overflow-x-auto lg:overflow-visible pl-6 md:pl-12 shrink-0 snap-x snap-mandatory hide-scrollbar">
        <div ref={containerRef} className="flex gap-6 pb-8 lg:w-max w-[calc(100vw-3rem)]">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="snap-center group relative h-[450px] w-[85vw] sm:w-[320px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#EBE6DF] to-[#DCD6CD] border border-black/5 shadow-[0_16px_40px_rgba(19,17,13,0.04)] flex flex-col justify-between p-8"
            >
              {/* Elegant Gray Abstract Placeholder Pattern */}
              <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="stroke-[#13110D]/5 stroke-[0.5]">
                  <line x1="0" y1="0" x2="100" y2="100" />
                  <line x1="100" y1="0" x2="0" y2="100" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#13110D]/8" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="15" fill="none" stroke="#DB9C32]/12" strokeWidth="0.5" />
                </svg>
              </div>
              
              {/* Tiny design ornament representing premium placeholder */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="font-mono text-[10px] text-[#13110D]/40">0{i + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#DB9C32]/60" />
              </div>

              <div className="relative z-10 w-full transform transition-transform duration-500 ease-out lg:group-hover:-translate-y-2">
                <h3 className="text-2xl font-display text-[#13110D] font-light">{service.title}</h3>
                <div className="h-[1px] w-0 bg-[#DB9C32] mt-4 transition-all duration-500 ease-out group-hover:w-12" />
              </div>
            </div>
          ))}
          {/* CTA Card inside the grid */}
          <div className="snap-center group relative h-[450px] w-[85vw] sm:w-[320px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden bg-bg-deep border border-black/5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] p-8 flex flex-col justify-between mr-6 lg:mr-24">
            <div>
              <h3 className="text-2xl md:text-3xl font-display text-text-dark font-light mb-4">
                Unsicher, was Ihnen hilft?
              </h3>
              <p className="text-text-dark-muted font-light">
                In einer kostenlosen Erstanalyse finden wir heraus, welcher Weg für Sie der richtige ist.
              </p>
            </div>
            <a href="#kontakt" className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-[10px] hover:brightness-125 transition-colors">
              Jetzt anfragen
              <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
