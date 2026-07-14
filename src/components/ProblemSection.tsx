import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { revealVariants } from "../utils/animations";

gsap.registerPlugin(ScrollTrigger);

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!imageContainerRef.current || !imageRef.current) return;
      gsap.to(imageRef.current, {
        scale: 1.08,
        y: "4%",
        ease: "none",
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 md:py-36 bg-bg-dark border-t border-black/5" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
            className="flex flex-col lg:max-w-xl"
          >
            <div className="text-accent text-[10px] tracking-[0.2em] uppercase font-semibold mb-6">
              Sie sind nicht allein
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-8 text-text-light text-left">
              Sie drehen sich im Kreis und wissen nicht, ob es noch eine Chance gibt.
            </h2>
            
            <div className="space-y-6 text-text-light-muted text-[17px] md:text-[18px] font-light leading-relaxed">
              <p>
                Sie liegen nachts wach und das Gedankenkarussell hört nicht auf. Ein Tag Hoffnung, am nächsten wieder Funkstille. Vielleicht können Sie einfach nicht loslassen, und dabei niemandem davon erzählen, ohne sich ein Stück weit zu schämen.
              </p>
              <p>
                Ich kenne diesen Zustand. Menschen kommen zu mir, wenn sie alle vernünftigen Wege ausprobiert haben und trotzdem keine Ruhe finden. Sie suchen kein Wunder. Sie wollen wissen, ob es noch eine Chance gibt, und endlich wieder klar denken können.
              </p>
              <p className="font-medium text-text-light italic mt-8 border-l-2 border-accent pl-4 py-1">
                Sie müssen das nicht länger allein tragen.
              </p>
            </div>
          </motion.div>

          {/* Image Content with beautiful floating effects */}
          <div className="relative h-[480px] md:h-[600px] w-full lg:sticky lg:top-36" ref={imageContainerRef}>
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-bg-deep border border-black/5 shadow-[0_24px_64px_rgba(19,17,13,0.08)]">
              <img 
                ref={imageRef}
                src="https://s1.directupload.eu/images/260714/nr4xlqrg.webp" 
                alt="Energetische Begleitung & Klarheit" 
                className="w-full h-full object-cover transition-opacity duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
