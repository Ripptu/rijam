import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { easeApple, revealVariants } from "../utils/animations";

const faqData = [
  {
    question: "Ist die Erstanalyse wirklich kostenlos?",
    answer: "Ja, die Erstanalyse ist absolut kostenfrei und unverbindlich. Es ist wichtig für mich zu sehen, ob ich Ihnen wirklich helfen kann, bevor wir eine Zusammenarbeit beginnen."
  },
  {
    question: "Wie läuft eine mediale Beratung ab?",
    answer: "Wir kommunizieren diskret über einen Kanal Ihrer Wahl (Telefon, WhatsApp, Telegram). Ich verbinde mich mit Ihrer Energie und der Situation, um Klarheit zu schaffen und Lösungswege aufzuzeigen."
  },
  {
    question: "Gibt es eine Erfolgsgarantie bei Partnerrückführungen?",
    answer: "Seriöse energetische Arbeit gibt keine 100% Garantie, da der freie Wille eines Menschen immer eine Rolle spielt. Ich arbeite jedoch nur an Fällen, bei denen ich vorab energetisch sehe, dass ein Erfolg sehr wahrscheinlich ist."
  },
  {
    question: "Bleibt mein Anliegen anonym?",
    answer: "Absolut. Verschwiegenheit ist die oberste Regel meiner Arbeit. Alle Ihre Daten und Anliegen bleiben strikt zwischen uns."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-bg-dark-2 border-t border-black/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="text-center mb-16"
        >
          <div className="text-accent text-[10px] tracking-[0.2em] uppercase font-semibold mb-6">
            Fragen & Antworten
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-text-light">Häufig gestellt</h2>
        </motion.div>

        <div className="space-y-2">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: easeApple }}
                className="border-b border-border-subtle-light"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-display text-xl text-text-light font-light pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: easeApple }}
                    className="w-6 h-6 relative shrink-0 flex items-center justify-center"
                  >
                    <span className="absolute w-full h-[1px] bg-accent" />
                    <span className="absolute w-[1px] h-full bg-accent" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: easeApple }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-text-light-muted font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
