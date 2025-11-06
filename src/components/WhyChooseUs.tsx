import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Lightbulb, 
  Palette, 
  Cpu, 
  CheckCircle,
  Sparkles
} from "lucide-react";

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Booster visue",
      description: "Nos prestations valorisent vos espaces, renforcent votre image de marque et augmentent votre visibilité auprès de vos clients.",
      color: "from-emerald-500 to-teal-500",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Shield,
      title: "Qualité garantie",
      description: "Nous utilisons des technologies d’impression de pointe afin d’assurer un rendu exceptionnel et durable.",
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Zap,
      title: "Installation rapide",
      description: "Notre équipe expérimentée assure une installation professionnelle et rapide, minimisant l'impact sur votre activité quotidienne tout en respectant les délais convenus.",
      color: "from-amber-500 to-orange-500",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: Users,
      title: "Accompagnement complet",
      description: "De la conception initiale à l'installation finale, notre équipe vous accompagne à chaque étape pour garantir que votre vision devienne réalité.",
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ];

  const processSteps = [
    {
      number: "1",
      icon: Lightbulb,
      title: "Consultation",
      description: "Échange initial pour comprendre vos besoins et votre vision. Nous analysons votre espace et définissons les objectifs du projet.",
      color: "from-yellow-400 to-orange-500",
      gradient: "from-yellow-400/20 to-orange-500/20",
    },
    {
      number: "2",
      icon: Palette,
      title: "Conception",
      description: "Notre équipe créative développe des concepts personnalisés adaptés à votre identité de marque et à vos contraintes techniques.",
      color: "from-pink-500 to-rose-500",
      gradient: "from-pink-500/20 to-rose-500/20",
    },
    {
      number: "3",
      icon: Cpu,
      title: "Production",
      description: "Impression haute qualité avec des technologies de pointe.",
      color: "from-blue-500 to-indigo-500",
      gradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
      number: "4",
      icon: CheckCircle,
      title: "Installation",
      description: "Pose professionnelle réalisée par nos équipes expérimentées, avec un contrôle qualité rigoureux à chaque étape.",
      color: "from-green-500 to-emerald-500",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section 
      id="why-choose-us" 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-secondary/20 via-accent/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(y, (v) => -v), opacity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent/20 via-secondary/20 to-accent/20 rounded-full blur-3xl"
        />
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="inline-flex items-center gap-3 mb-8 overflow-visible"
            >
              <div className="relative w-10 h-10 overflow-hidden">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full"
                >
                  <Sparkles className="w-10 h-10 text-secondary" />
                </motion.div>
              </div>
              <span className="text-foreground text-xs font-semibold tracking-[0.2em] uppercase bg-white/80 backdrop-blur-xl px-8 py-4 rounded-full border border-border/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                Pourquoi choisir Wall Dream ?
              </span>
              <div className="relative w-10 h-10 overflow-hidden">
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full"
                >
                  <Sparkles className="w-10 h-10 text-accent" />
                </motion.div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight"
            >
              <span className="block bg-gradient-to-r from-secondary via-white via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
                Une expertise reconnue
              </span>
              <span className="block text-foreground mt-2">
                au service de votre réussite visuelle
              </span>
            </motion.h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Glassmorphism card */}
                  <div className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-7 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Animated border */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-secondary transition-colors">
                        {benefit.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${benefit.color} rounded-full`}
                          animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            opacity: [0, 0.6, 0],
                          }}
                          transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-block mb-8 px-8 py-4 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full border border-secondary/30"
            >
              <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
                Notre Processus
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                De l'idée à la réalisation
              </span>
              <span className="block text-foreground mt-2 text-2xl md:text-3xl lg:text-4xl font-light">
                nous vous accompagnons à chaque étape pour garantir un résultat exceptionnel
              </span>
            </motion.h2>
          </div>

          {/* Process Steps */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-secondary opacity-20 hidden md:block" />

              <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                      className="relative"
                    >
                      <div className={`flex flex-col md:flex-row items-start gap-4 sm:gap-6 md:gap-8 ${
                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                      }`}>
                        {/* Step Number & Icon */}
                        <div className="relative flex-shrink-0">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.3 }}
                            className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl group cursor-pointer`}
                          >
                            {/* Animated ring */}
                            <motion.div
                              className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${step.color} opacity-50`}
                              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            
                            {/* Number */}
                            <span className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white text-foreground font-black text-sm sm:text-base md:text-xl flex items-center justify-center shadow-lg z-10">
                              {step.number}
                            </span>
                            
                            {/* Icon */}
                            <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white relative z-10" />
                            
                            {/* Glow effect */}
                            <motion.div
                              className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${step.color} blur-xl opacity-0 group-hover:opacity-60 transition-opacity`}
                            />
                          </motion.div>
                        </div>

                        {/* Content */}
                        <motion.div
                          whileHover={{ x: isEven ? 5 : -5 }}
                          className="flex-1 relative"
                        >
                          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl transition-opacity duration-500`} />
                            
                            <div className="relative z-10">
                              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-white transition-colors">
                                {step.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg group-hover:text-white/90 transition-colors">
                                {step.description}
                              </p>
                            </div>

                            {/* Decorative corner element */}
                            <div className={`absolute ${isEven ? 'top-0 right-0' : 'top-0 left-0'} w-20 h-20 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-bl-3xl rounded-tr-3xl transition-opacity`} />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;

