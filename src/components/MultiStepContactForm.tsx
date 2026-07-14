import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const options = [
  "Partnerrückführung",
  "Kartenlegen",
  "Lebensberatung",
  "Blockadenlösung",
  "Sonstiges",
];

export function MultiStepContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    topic: "",
    name: "",
    contact: "",
  });

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleTopicSelect = (topic: string) => {
    setFormData({ ...formData, topic });
    handleNext();
  };

  return (
    <div className="bg-bg-dark-2 p-8 md:p-12 rounded-3xl border border-border-subtle-light min-h-[420px] flex flex-col justify-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full"
          >
            <h3 className="font-display text-3xl font-light mb-8 text-text-light">
              Was ist Ihr Anliegen?
            </h3>
            <div className="flex flex-col gap-3">
              {options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleTopicSelect(opt)}
                  className="w-full text-left px-6 py-4 rounded-xl border border-border-subtle-light hover:border-accent hover:bg-bg-dark transition-all duration-300 group flex items-center justify-between"
                >
                  <span className="text-text-light-muted group-hover:text-text-light transition-colors">{opt}</span>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full"
          >
            <h3 className="font-display text-3xl font-light mb-2 text-text-light">
              Wie dürfen wir Sie ansprechen?
            </h3>
            <p className="text-text-light-muted mb-8 text-sm">Geben Sie bitte Ihren Namen ein.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-8">
              <div className="relative group">
                <input 
                  type="text" 
                  autoFocus
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border-subtle-light py-4 px-0 text-text-light text-xl focus:outline-none focus:border-accent transition-all duration-300 peer placeholder-transparent"
                  placeholder="Ihr Name"
                />
                <label className="absolute left-0 -top-4 text-xs uppercase tracking-widest text-text-light-muted transition-all duration-300 peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent">
                  Vor- und Nachname
                </label>
              </div>
              <div className="flex justify-between items-center mt-8">
                <button type="button" onClick={() => setStep(1)} className="text-text-light-muted hover:text-text-light text-sm underline underline-offset-4 transition-colors">
                  Zurück
                </button>
                <button type="submit" disabled={!formData.name} className="px-8 py-3 rounded-full bg-gradient-to-br from-accent-soft to-accent text-text-light font-semibold uppercase tracking-wider text-xs hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  Weiter
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full"
          >
            <h3 className="font-display text-3xl font-light mb-2 text-text-light">
              Wie können wir Sie erreichen?
            </h3>
            <p className="text-text-light-muted mb-8 text-sm">E-Mail oder Telefonnummer.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-8">
              <div className="relative group">
                <input 
                  type="text" 
                  autoFocus
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full bg-transparent border-b border-border-subtle-light py-4 px-0 text-text-light text-xl focus:outline-none focus:border-accent transition-all duration-300 peer placeholder-transparent"
                  placeholder="Kontakt"
                />
                <label className="absolute left-0 -top-4 text-xs uppercase tracking-widest text-text-light-muted transition-all duration-300 peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent">
                  E-Mail / Telefon
                </label>
              </div>
              <div className="flex justify-between items-center mt-8">
                <button type="button" onClick={() => setStep(2)} className="text-text-light-muted hover:text-text-light text-sm underline underline-offset-4 transition-colors">
                  Zurück
                </button>
                <button type="submit" disabled={!formData.contact} className="px-8 py-3 rounded-full bg-gradient-to-br from-accent-soft to-accent text-text-light font-semibold uppercase tracking-wider text-xs hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                  Anfrage senden
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full text-center flex flex-col items-center justify-center py-12"
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-3xl font-light mb-4 text-text-light">
              Vielen Dank, {formData.name.split(' ')[0]}!
            </h3>
            <p className="text-text-light-muted text-lg max-w-[280px] mx-auto">
              Ihre Anfrage ist eingegangen. Wir melden uns in Kürze bei Ihnen bezüglich {formData.topic.toLowerCase()}.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
