import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState, useEffect } from "react";

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
    setIsLightSection(latest > windowHeight * 0.85);
  });

  const navLinks = ["Leistungen", "Über Mich", "Ablauf", "FAQ"];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out ${isScrolled ? "pt-6 px-4" : "pt-0 px-0"}`}
    >
      <div 
        className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ease-out
        ${isScrolled 
          ? "h-16 px-6 md:px-8 rounded-full border shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-[12px] motion-reduce:backdrop-blur-none" 
          : "h-32 px-6 md:px-12 bg-transparent border-transparent"
        }
        ${isScrolled && isLightSection
          ? "bg-bg-dark/80 motion-reduce:bg-bg-dark border-border-subtle-light text-text-light"
          : isScrolled && !isLightSection
          ? "bg-bg-deep/80 motion-reduce:bg-bg-deep border-border-subtle-dark text-text-dark"
          : "text-text-dark"
        }`}
      >
        <div className="flex items-center gap-3">
          <Link to="/">
            <img 
              src="https://s1.directupload.eu/images/260714/xe4swedl.png" 
              alt="Medium Rijam Logo" 
              className={`w-auto transition-all duration-500 ease-out ${isScrolled ? "h-10" : "h-28"}`}
              loading="lazy"
              decoding="async" 
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`/#${link.toLowerCase().replace(/ /g, '-')}`} 
              className={`text-[13px] font-medium tracking-wide relative group overflow-hidden transition-colors duration-300
                ${isScrolled && isLightSection ? "text-text-light-muted hover:text-accent" : "text-text-dark-muted hover:text-accent"}
              `}
            >
              {link}
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-accent group-hover:w-full group-hover:left-0 transition-all duration-400 ease-out" />
            </a>
          ))}
        </nav>
        
        <a 
          href="/#kontakt" 
          className="px-6 py-2.5 rounded-full bg-gradient-to-br from-accent-soft to-accent text-text-light text-xs font-semibold uppercase tracking-wider hover:-translate-y-0.5 hover:brightness-110 shadow-[0_4px_12px_rgba(219,156,50,0.3)] transition-all duration-300"
        >
          Terminanfrage
        </a>
      </div>
    </motion.header>
  );
}
