import { motion } from "motion/react";
import { easeApple, revealVariants } from "../utils/animations";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Kontaktaufnahme",
      text: "Sie schildern mir Ihr Anliegen vertraulich via WhatsApp, Telegram oder Anruf. Unverbindlich und diskret."
    },
    {
      number: "02",
      title: "Kostenlose Analyse",
      text: "Ich schaue mir Ihre energetische Situation an und prüfe, ob und wie ich Ihnen helfen kann. Ehrlichkeit steht hier an erster Stelle."
    },
    {
      number: "03",
      title: "Die Arbeit beginnt",
      text: "Wenn wir uns für eine Zusammenarbeit entscheiden, beginnen wir sofort mit den notwendigen energetischen Schritten."
    }
  ];

  return (
    <section id="ablauf" className="py-24 md:py-32 bg-bg-dark text-text-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="text-center mb-20 md:mb-28"
        >
          <div className="text-accent text-[10px] tracking-[0.2em] uppercase font-semibold mb-6">
            Der Weg
          </div>
          <h2 className="text-4xl md:text-5xl font-light">Einfach, transparent & klar</h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-border-subtle-light">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: easeApple, delay: 0.5 }}
              className="w-full h-full bg-accent origin-left"
            />
          </div>

          {/* Connecting Line (Mobile) */}
          <div className="lg:hidden absolute top-[60px] bottom-[60px] left-[45px] w-[1px] bg-border-subtle-light">
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: easeApple, delay: 0.5 }}
              className="w-full h-full bg-accent origin-top"
            />
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: easeApple, delay: i * 0.2 }}
                className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center relative z-10 group"
              >
                <div className="mb-0 lg:mb-8 bg-bg-dark relative flex-shrink-0 w-[90px] lg:w-auto flex justify-center z-10">
                  {/* Outline Number */}
                  <div className="font-display text-[60px] lg:text-[100px] leading-none text-transparent transition-colors duration-500 group-hover:text-accent/10" style={{ WebkitTextStroke: "1px var(--color-accent-soft)" }}>
                    {step.number}
                  </div>
                </div>
                
                <div className="pt-2 lg:pt-0 pl-6 lg:pl-0">
                  <h3 className="text-xl lg:text-2xl font-display font-light mb-2 lg:mb-4">{step.title}</h3>
                  <p className="text-text-light-muted font-light leading-relaxed max-w-sm">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeApple, delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <a href="#kontakt" className="px-10 py-4 rounded-full border border-black/20 text-text-light text-sm hover:bg-black/5 transition-colors duration-300">
            Kostenlose Erstanalyse starten
          </a>
        </motion.div>
      </div>
    </section>
  );
}
