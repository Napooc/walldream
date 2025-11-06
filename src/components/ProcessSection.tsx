import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Palette, Cpu, CheckCircle } from "lucide-react";
import officeImg from "@/assets/office-mural.jpg";

const steps = [
  {
    icon: Lightbulb,
    title: "Consultation & Vision",
    description: "Nous explorons ensemble votre vision, analysons votre espace et définissons l'impact recherché",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Palette,
    title: "Design Sur Mesure",
    description: "Nos designers créent des concepts uniques qui reflètent parfaitement votre identité",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Cpu,
    title: "Impression Robotisée",
    description: "Notre technologie de pointe imprime avec une précision millimétrique en haute définition",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: CheckCircle,
    title: "Installation & Finitions",
    description: "Nos experts garantissent une installation impeccable et des finitions parfaites",
    color: "from-green-500 to-emerald-500",
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="processus" ref={sectionRef} className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[400px] md:h-[500px] lg:h-[600px] hidden lg:block"
      >
        <div className="relative w-full h-full rounded-l-[2rem] lg:rounded-l-[3rem] overflow-hidden shadow-2xl">
          <img src={officeImg} alt="Bureau moderne avec impression murale" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full">
            <span className="text-primary font-semibold text-xs sm:text-sm">NOTRE PROCESSUS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight">
            De l'Idée à<br />
            <span className="text-gradient">La Réalité</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Un processus maîtrisé de bout en bout pour transformer votre vision en une réalité époustouflante
          </p>
        </motion.div>

        <div className="max-w-2xl space-y-6 sm:space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="flex gap-4 sm:gap-6 items-start">
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-xl opacity-50 group-hover:opacity-100 transition-opacity`} />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-card to-muted border-2 border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-foreground" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-1 sm:pt-2">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="ml-8 sm:ml-10 mt-3 sm:mt-4 mb-3 sm:mb-4 h-8 sm:h-12 w-0.5 bg-gradient-to-b from-border to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
