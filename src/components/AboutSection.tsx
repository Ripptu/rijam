import { motion } from "motion/react";
import { easeApple, revealVariants } from "../utils/animations";

export function AboutSection() {
  const tags = ["Respekt", "Ehrlichkeit", "Empathie", "Diskretion"];

  return (
    <section id="über-mich" className="py-24 md:py-32 bg-bg-dark border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: easeApple }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-[62%_38%_55%_45%/55%_45%_55%_45%] overflow-hidden shadow-xl bg-bg-dark-2">
              <img 
                src="https://s1.directupload.eu/images/260714/vnxyq3np.webp" 
                alt="Medium Rijam Portrait"
                className="w-full h-full object-cover sepia-[0.15] contrast-[1.05] brightness-95"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: easeApple }}
              className="absolute -bottom-8 -right-4 md:right-8 bg-bg-dark-2 border border-border-subtle-light shadow-[0_30px_60px_rgba(0,0,0,0.4)] rounded-full px-6 py-4 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="font-display text-2xl text-text-light font-medium">15+</div>
                <div className="text-[10px] uppercase tracking-widest text-text-light-muted mt-1 font-semibold">Jahre</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <div className="text-accent text-[10px] tracking-[0.2em] uppercase font-semibold mb-6">
              Über Rijam
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-text-light leading-[1.15]">
              Ein erfahrener Begleiter, kein leeres Versprechen.
            </h2>
            
            <div className="space-y-6 text-text-light-muted text-lg font-light leading-relaxed mb-12">
              <p>
                Seit über 15 Jahren widme ich mein Leben der spirituellen Arbeit. Meine Gabe ist es, Dinge zu sehen, die im Verborgenen liegen, und Menschen wieder in ihre eigene Kraft zu führen.
              </p>
              <p>
                Ich arbeite nicht mit leeren Versprechungen. Jede Beratung basiert auf Aufrichtigkeit und echtem Mitgefühl. Wenn ich eine Situation analysiere, sage ich Ihnen genau das, was ich sehe – respektvoll und ehrlich.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + (i * 0.1), ease: easeApple }}
                  className="px-5 py-2 rounded-full border border-border-subtle-light text-text-light-muted text-[10px] tracking-widest uppercase font-semibold"
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
