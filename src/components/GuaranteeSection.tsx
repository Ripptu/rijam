import { motion } from "motion/react";
import { easeApple, revealVariants } from "../utils/animations";
import { Check } from "lucide-react";

export function GuaranteeSection() {
  const points = [
    "Kostenlose Erstanalyse",
    "Zufriedenheits-/Geld-zurück-Garantie",
    "Keine Vorkasse / keine versteckten Kosten",
    "Diskret und vertraulich"
  ];

  return (
    <section className="py-24 bg-bg-dark-2 text-text-light border-t border-border-subtle-light">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="border border-border-subtle-light rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 bg-bg-dark"
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-display font-light mb-8">
              Mein Versprechen an Sie
            </h2>
            <ul className="space-y-4">
              {points.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: easeApple, delay: 0.3 + (i * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 w-5 h-5 rounded-full border border-accent/30 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-accent" strokeWidth={2} />
                  </div>
                  <span className="text-text-light-muted font-light">{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="flex-shrink-0 w-full md:w-auto">
            <a href="#kontakt" className="block w-full md:w-auto text-center px-10 py-4 rounded-full border border-black/20 text-text-light text-sm hover:bg-black/5 transition-colors duration-300">
              Zum sicheren Kontakt
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
