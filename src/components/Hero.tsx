import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import sushiImg from "@/assets/wall-dream-sushi.jpg";
import pizzaImg from "@/assets/wall-dream-pizza.jpg";
import nailsImg from "@/assets/wall-dream-nails.jpg";

const heroImages = [
  {
    src: sushiImg,
    alt: "Impression murale de sushis dans un restaurant",
    title: "Transformez vos espaces",
  },
  {
    src: pizzaImg,
    alt: "Impression murale de pizza dans un restaurant",
    title: "Créez l'impossible",
  },
  {
    src: nailsImg,
    alt: "Impression murale de manucure dans un salon",
    title: "Captivez vos clients",
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <img
            src={heroImages[currentImage].src}
            alt={heroImages[currentImage].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Wall Dream
            </h1>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentImage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-4xl text-white/90 mb-8 font-light"
              >
                {heroImages[currentImage].title}
              </motion.p>
            </AnimatePresence>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
              L'impression murale professionnelle qui révolutionne vos espaces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6 rounded-full shadow-glow"
              >
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full"
              >
                Demander un devis
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? "w-12 bg-secondary" : "w-2 bg-white/50"
            }`}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
