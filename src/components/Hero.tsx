import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import sushiImg from "@/assets/wall-dream-sushi.jpg";
import pizzaImg from "@/assets/wall-dream-pizza.jpg";
import nailsImg from "@/assets/wall-dream-nails.jpg";

const heroImages = [
  {
    src: sushiImg,
    alt: "Impression murale gastronomique haute définition",
    title: "L'Art Mural",
    subtitle: "Qui Éveille Les Sens",
  },
  {
    src: pizzaImg,
    alt: "Design mural contemporain pour restaurant",
    title: "Créez L'Extraordinaire",
    subtitle: "Au-Delà De L'Imagination",
  },
  {
    src: nailsImg,
    alt: "Impression murale élégante pour salon de beauté",
    title: "L'Élégance Visuelle",
    subtitle: "Qui Fascine Et Inspire",
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden" id="home">
      {/* Animated Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/20 to-primary/50 z-10" />
            <img
              src={heroImages[currentImage].src}
              alt={heroImages[currentImage].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-6 flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-secondary" />
              </motion.div>
              <span className="text-secondary text-lg font-semibold tracking-wider uppercase">
                Innovation • Précision • Excellence
              </span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-7xl md:text-9xl font-extrabold text-white mb-6 leading-none">
                  {heroImages[currentImage].title}
                </h1>
                <p className="text-3xl md:text-5xl text-white/90 font-light mb-4 italic">
                  {heroImages[currentImage].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl leading-relaxed"
            >
              Révolutionnez vos espaces avec notre technologie d'impression murale robotisée.
              Transformez chaque surface en une œuvre d'art immersive qui captive et inspire.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_100%] hover:bg-[position:100%_0] text-primary text-lg px-10 py-8 rounded-full shadow-2xl shadow-secondary/50 transition-all duration-500 hover:scale-105 hover:shadow-3xl"
              >
                <Zap className="mr-2 h-6 w-6 animate-pulse" />
                Découvrir Nos Solutions
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 text-lg px-10 py-8 rounded-full transition-all duration-300 hover:scale-105"
              >
                Voir Le Portfolio
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-20 grid grid-cols-3 gap-8 max-w-2xl"
            >
              {[
                { value: "500+", label: "Projets Réalisés" },
                { value: "98%", label: "Clients Satisfaits" },
                { value: "24h", label: "Service Express" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-gradient-accent mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Image Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className="group relative"
          >
            <div
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentImage ? "w-16 bg-secondary" : "w-8 bg-white/30 hover:bg-white/50"
              }`}
            />
            {index === currentImage && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-secondary rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-sm font-light">Explorez</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-secondary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
