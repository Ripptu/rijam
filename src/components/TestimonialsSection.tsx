import { motion } from "motion/react";
import { easeApple, revealVariants } from "../utils/animations";
import { Star } from "lucide-react";
import { TiltCard } from "./TiltCard";

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Nach 8 Monaten Trennung war ich am Ende. Rijam hat mir nicht nur Hoffung gegeben, sondern echte Resultate. Wir sind wieder zusammen und unsere Beziehung ist stärker als je zuvor.",
      author: "Sabine M.",
      initials: "SM"
    },
    {
      text: "Ich war anfangs sehr skeptisch. Aber die Präzision, mit der meine aktuelle Lebenssituation beschrieben wurde, war unglaublich. Sehr empfehlenswert und seriös.",
      author: "Thomas K.",
      initials: "TK"
    },
    {
      text: "Danke für die wundervolle Kartenlegung. Es hat mir so viel Klarheit für meinen beruflichen Weg gegeben. Ich fühle mich endlich wieder sicher in meinen Entscheidungen.",
      author: "Elena R.",
      initials: "ER"
    },
    {
      text: "Die Blockadenlösung war intensiv und befreiend. Ich spüre eine Leichtigkeit, die ich seit Jahren nicht mehr kannte. Ein großes Dankeschön für die einfühlsame Begleitung.",
      author: "Markus V.",
      initials: "MV"
    },
    {
      text: "Rijam verspricht nichts, was nicht gehalten werden kann. Die ehrliche Analyse am Anfang hat mich überzeugt. Wer echte Hilfe sucht, ist hier richtig.",
      author: "Julia S.",
      initials: "JS"
    },
    {
      text: "Vielen Dank für die diskrete und schnelle Hilfe. Meine Lebensenergie ist zurückgekehrt und die familiären Konflikte haben sich spürbar aufgelöst.",
      author: "Christian H.",
      initials: "CH"
    }
  ];

  return (
    <section id="erfahrungsberichte" className="py-24 md:py-32 bg-bg-dark border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={revealVariants}
          className="text-center mb-16 md:mb-24"
        >
          <div className="text-accent text-[10px] tracking-[0.2em] uppercase font-semibold mb-6">
            Erfahrungen
          </div>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-text-light">Worte, die berühren.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: easeApple, delay: i * 0.1 }}
              className="h-full"
            >
              <TiltCard className="bg-bg-dark-2 rounded-2xl p-8 border border-black/5 flex flex-col h-full shadow-lg h-full">
                <div className="font-display text-5xl text-accent opacity-50 mb-2 leading-none">"</div>
                
                <div className="flex gap-1 text-[#DB9C32] mb-6">
                  {[1,2,3,4,5].map(star => (
                    <Star 
                      key={star} 
                      size={14} 
                      fill="currentColor" 
                      strokeWidth={0} 
                      className="animate-pulse"
                      style={{ 
                        animationDuration: '2s', 
                        animationDelay: `${star * 0.15}s`,
                        filter: 'drop-shadow(0 0 4px rgba(219,156,50,0.5))'
                      }}
                    />
                  ))}
                </div>
                
                <p className="font-display italic text-text-light text-lg mb-8 flex-grow leading-relaxed">
                  {testimonial.text}
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full border border-accent/50 flex items-center justify-center text-accent text-sm font-medium tracking-wider">
                    {testimonial.initials}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-text-light-muted">
                    {testimonial.author}
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Trust Logos (Placeholder) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-black/5 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 text-text-light"
        >
          {/* In a real scenario, use actual SVG logos. Here we use text placeholders to represent them */}
          <div className="font-display text-xl tracking-widest">TRUSTPILOT</div>
          <div className="font-display text-xl tracking-widest">PROVENEXPERT</div>
          <div className="font-display text-xl tracking-widest">EXPERTE.DE</div>
        </motion.div>
      </div>
    </section>
  );
}
