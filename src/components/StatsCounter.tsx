import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Counting animation for the numbers
      const targets = gsap.utils.toArray<HTMLElement>(".stat-num");
      targets.forEach((target) => {
        const valAttr = target.getAttribute("data-value") || "0";
        // Handle decimals if needed (e.g. 4.6, since parseInt doesn't handle decimals as floats cleanly)
        const isFloat = valAttr.includes(".");
        const value = isFloat ? parseFloat(valAttr) : parseInt(valAttr, 10);
        
        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
          },
          onUpdate: () => {
            if (isFloat) {
              target.innerText = obj.val.toFixed(1).replace(".", ",");
            } else {
              target.innerText = Math.floor(obj.val).toString();
            }
          }
        });
      });

      // 2. Entrance stagger animation for elements
      gsap.fromTo(
        elementsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      value: "15",
      suffix: "+",
      label: "Jahre Erfahrung",
      isFloat: false,
    },
    {
      value: "4.6",
      suffix: "",
      label: "Trustpilot, 29 Bewertungen",
      isFloat: true,
      hasStar: true,
    },
    {
      value: "20",
      range: "-50",
      label: "Seiten Erstanalyse, kostenfrei",
      isFloat: false,
    },
    {
      value: "100",
      suffix: "%",
      label: "Diskret und unverbindlich",
      isFloat: false,
    }
  ];

  return (
    <div ref={containerRef} className="relative z-30 -mt-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
      {/* Outer elegant "pill" container */}
      <div 
        className="bg-[#F7F4EF] rounded-[28px] md:rounded-[40px] p-6 md:p-10 border border-[#DB9C32]/15 shadow-[0_32px_80px_rgba(19,17,13,0.06)] backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#13110D]/10">
          
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              ref={(el) => { elementsRef.current[idx] = el; }}
              className="flex flex-col items-center justify-center text-center px-4 transition-all duration-500 ease-out group cursor-default"
            >
              {/* Stat Value Container */}
              <div className="flex items-baseline justify-center mb-2 font-display text-4xl md:text-5xl font-light text-[#13110D] tracking-tight transition-transform duration-500 ease-out group-hover:scale-105">
                
                {/* Simulated count slot */}
                <span className="stat-num" data-value={stat.value}>0</span>
                
                {stat.range && (
                  <span className="text-3xl md:text-4xl text-[#13110D]/80 font-display font-light">
                    {stat.range}
                  </span>
                )}

                {stat.suffix && (
                  <span className="text-2xl md:text-3xl text-[#DB9C32] ml-0.5 font-sans font-normal self-start md:self-auto">
                    {stat.suffix}
                  </span>
                )}

                {stat.hasStar && (
                  <Star 
                    size={22} 
                    fill="#DB9C32" 
                    strokeWidth={0} 
                    className="ml-1.5 self-center inline-block animate-pulse text-[#DB9C32]"
                    style={{ 
                      animationDuration: '3s',
                      filter: 'drop-shadow(0 0 6px rgba(219,156,50,0.45))'
                    }}
                  />
                )}
              </div>

              {/* Subtitle / Description text */}
              <div className="text-[#13110D]/60 text-[12px] md:text-[13px] font-sans font-medium tracking-wide max-w-[180px] leading-relaxed group-hover:text-[#13110D] transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
