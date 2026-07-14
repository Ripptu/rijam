import { motion } from "motion/react";
import { easeApple, revealVariants } from "../utils/animations";
import { MultiStepContactForm } from "./MultiStepContactForm";

export function ContactSection() {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-bg-dark text-text-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Lassen Sie uns sprechen.
            </h2>
            <p className="text-text-light-muted font-light text-lg mb-12 max-w-md">
              Wählen Sie den Weg, der sich für Sie am besten anfühlt. Ich freue mich darauf, Ihnen zu helfen.
            </p>

            <div className="space-y-4">
              <a href="#" className="block w-full px-8 py-5 rounded-xl border border-border-subtle-light hover:border-accent/50 hover:bg-bg-dark-2 transition-all duration-300 flex items-center justify-between group">
                <span className="font-display text-xl font-light">WhatsApp</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </a>
              <a href="#" className="block w-full px-8 py-5 rounded-xl border border-border-subtle-light hover:border-accent/50 hover:bg-bg-dark-2 transition-all duration-300 flex items-center justify-between group">
                <span className="font-display text-xl font-light">Telegram</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </a>
              <a href="#" className="block w-full px-8 py-5 rounded-xl border border-border-subtle-light hover:border-accent/50 hover:bg-bg-dark-2 transition-all duration-300 flex items-center justify-between group">
                <span className="font-display text-xl font-light">Telefon anrufen</span>
                <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Minimal Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeApple, delay: 0.2 }}
          >
            <MultiStepContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
