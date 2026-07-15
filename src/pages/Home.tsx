/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { StatsCounter } from "../components/StatsCounter";
import { ProblemSection } from "../components/ProblemSection";
import { ServicesSection } from "../components/ServicesSection";
import { AboutSection } from "../components/AboutSection";
import { ProcessSection } from "../components/ProcessSection";
import { GuaranteeSection } from "../components/GuaranteeSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FAQSection } from "../components/FAQSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { NoiseOverlay } from "../components/NoiseOverlay";
import { useIsDesktopPointer } from "../hooks/useIsDesktopPointer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const isDesktop = useIsDesktopPointer();

  useEffect(() => {
    // Check if we should initialize Lenis (only on desktop pointer)
    const initLenis = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    
    let lenis: Lenis | null = null;
    
    if (initLenis) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      lenis.on("scroll", ScrollTrigger.update);
    }

    const tick = (time: number) => {
      if (lenis) {
        lenis.raf(time * 1000);
      }
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-deep text-text-dark selection:bg-accent/30 selection:text-text-dark">
      <NoiseOverlay />
      <Header />
      <main>
        <Hero />
        <StatsCounter />
        <ProblemSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
