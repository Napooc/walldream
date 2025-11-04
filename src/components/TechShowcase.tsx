import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Zap, Shield, Sparkles } from "lucide-react";
import techImg from "@/assets/tech-office.jpg";

const TechShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Cpu,
      title: "IA & Robotique Avancée",
      description: "Notre robot autonome utilise l'intelligence artificielle pour une précision parfaite",
    },
    {
      icon: Zap,
      title: "Impression Ultra-HD",
      description: "Résolution 4K+ pour des détails saisissants et des couleurs éclatantes",
    },
    {
      icon: Shield,
      title: "Matériaux Premium",
      description: "Encres écologiques et surfaces durables résistantes aux UV",
    },
    {
      icon: Sparkles,
      title: "Finitions Exceptionnelles",
      description: "Options mate, brillante, métallique pour un rendu unique",
    },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-secondary font-semibold">TECHNOLOGIE DE POINTE</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
              Le Robot<br />
              <span className="text-secondary">Wall Dream</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-12 leading-relaxed">
              Une révolution technologique au service de votre créativité. Notre robot d'impression murale combine 
              intelligence artificielle, précision mécanique et qualité d'image exceptionnelle pour transformer 
              chaque surface en chef-d'œuvre.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/90 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 group-hover:text-secondary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-primary-foreground/70">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {[
                { value: "99.9%", label: "Précision" },
                { value: "50m²", label: "Surface/Jour" },
                { value: "4K+", label: "Résolution" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                  <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            style={{ scale, opacity }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={techImg}
                alt="Robot Wall Dream en action"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              
              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-white/70">Support Expert</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">10 Ans</div>
                    <div className="text-sm text-white/70">Garantie Qualité</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
