import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { useState } from "react";

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-32 bg-gradient-to-b from-primary via-primary-glow to-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
            <span className="text-white text-sm font-bold tracking-wider uppercase bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              Nos Réalisations
            </span>
            <Sparkles className="w-8 h-8 text-accent animate-pulse" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Découvrez Nos
            <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent mt-2">
              Créations Exceptionnelles
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'univers de Wall Dream et explorez nos projets les plus innovants
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary p-1 rounded-3xl">
              <div className="w-full h-full bg-black rounded-3xl overflow-hidden">
                {/* Placeholder for video */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary-glow to-primary flex items-center justify-center">
                  {!isPlaying ? (
                    <>
                      {/* Play button overlay */}
                      <motion.button
                        onClick={() => setIsPlaying(true)}
                        className="relative z-20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="absolute inset-0 bg-secondary rounded-full blur-2xl"
                        />
                        <div className="relative w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-2xl">
                          <Play className="w-10 h-10 text-white ml-1" fill="white" />
                        </div>
                      </motion.button>

                      {/* Decorative text */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-center"
                        >
                          <p className="text-white/60 text-lg mb-32">Cliquez pour découvrir</p>
                        </motion.div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      {/* Replace this with actual video embed */}
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                        title="Wall Dream Réalisations"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-secondary/30 rounded-full"
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    opacity: [0, 1, 0],
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

          {/* Bottom glow effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-gradient-to-t from-secondary/30 to-transparent blur-3xl"
          />
        </motion.div>

        {/* Stats or features below video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { value: "500+", label: "Projets Réalisés" },
            { value: "200+", label: "Clients Satisfaits" },
            { value: "15", label: "Années d'Expertise" },
            { value: "98%", label: "Taux de Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-gradient-accent mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
