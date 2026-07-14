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
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-border-subtle-dark">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: easeApple, delay: 0.5 }}
              className="w-full h-full bg-accent origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: easeApple, delay: i * 0.2 }}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="mb-8 bg-bg-dark relative">
                  {/* Outline Number */}
                  <div className="font-display text-[100px] leading-none text-transparent" style={{ WebkitTextStroke: "1px var(--color-accent-soft)" }}>
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-light mb-4">{step.title}</h3>
                <p className="text-text-light-muted font-light leading-relaxed max-w-sm">
                  {step.text}
                </p>
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
