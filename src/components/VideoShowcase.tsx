import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Play, Sparkles, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useState, useRef } from "react";

const VideoShowcase = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
  ];

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);
  const y = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    mouseX.set((e.clientX - rect.left) / width);
    mouseY.set((e.clientY - rect.top) / height);
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section id="videos" className="py-40 bg-gradient-to-b from-primary via-primary-glow to-primary relative overflow-hidden">
      {/* Sophisticated animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 120, 240, 360],
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-secondary/20 via-accent/15 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 240, 120, 0],
            x: [0, -100, 50, 0],
            y: [0, 80, -50, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-accent/20 via-secondary/15 to-accent/20 rounded-full blur-3xl"
        />
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Elegant header section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 overflow-hidden">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
              >
                <Sparkles className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-secondary" />
              </motion.div>
            </div>
            <span className="text-white/90 text-xs font-semibold tracking-[0.2em] uppercase bg-white/5 backdrop-blur-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              Nos Vidéos
            </span>
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 overflow-hidden">
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
              >
                <Sparkles className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-accent" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-white mb-6 sm:mb-8 leading-[0.9] tracking-tight"
          >
            <span className="block bg-gradient-to-r from-secondary via-white via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
              Nos Vidéos
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light tracking-wide px-4"
          >
            Découvrez nos projets les plus innovants à travers une expérience visuelle immersive
          </motion.p>
        </motion.div>

        {/* Main video showcase - Asymmetrical elegant layout */}
        <div className="relative max-w-7xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          {/* Floating video cards grid - Unique asymmetrical layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16">
            {/* Large featured video - Takes 7 columns */}
        <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 relative group"
            >
              {/* Floating card effect */}
              <motion.div
                style={{ x, y }}
                className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden"
              >
                {/* Multi-layer glassmorphism border */}
                <div className="absolute inset-0 rounded-[2.5rem] p-[2px] bg-gradient-to-br from-secondary/60 via-accent/60 to-secondary/60">
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tl from-white/10 to-transparent" />
                  <div className="w-full h-full rounded-[2.5rem] bg-black/40 backdrop-blur-2xl border border-white/10 relative overflow-hidden">
                    {/* Animated gradient overlay */}
                    <motion.div
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-accent/20 opacity-50"
                    />
                    
                    {/* Video container */}
                    <div className="relative w-full h-full">
                <video
                        className="w-full h-full object-contain"
                  controls
                  autoPlay
                  loop
                  muted
                        playsInline
                  key={currentVideo}
                >
                  <source src={videos[currentVideo]} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
                      
                      {/* Elegant overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.3)_100%)] pointer-events-none" />
            </div>
            
                    {/* Custom navigation controls */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                      <motion.button
                        onClick={prevVideo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-lg"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>
                      
                      <div className="flex gap-2">
              {videos.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                            className={`rounded-full transition-all duration-500 ${
                              currentVideo === index
                                ? "w-12 h-3 bg-gradient-to-r from-secondary to-accent shadow-[0_0_20px_rgba(255,0,150,0.5)]"
                                : "w-3 h-3 bg-white/40 hover:bg-white/60"
                            }`}
                />
              ))}
            </div>

                      <motion.button
                        onClick={nextVideo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-lg"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
                      {[...Array(15)].map((_, i) => {
                        // Use fixed values based on index to prevent random changes
                        const baseX = (i * 6.67) % 100;
                        const baseY = (i * 8) % 100;
                        const moveX = ((i % 4) * 30) - 45;
                        const moveY = ((i % 3) * 25) - 25;
                        const duration = 3 + (i % 4);
                        const delay = i * 0.2;
                        
                        return (
                <motion.div
                  key={i}
                            className="absolute w-1 h-1 bg-secondary/40 rounded-full"
                  animate={{
                              x: [0, moveX, 0],
                              y: [0, moveY, 0],
                              opacity: [0, 1, 0.5, 0],
                              scale: [0, 1, 0],
                  }}
                  transition={{
                              duration,
                    repeat: Infinity,
                              delay,
                              ease: "easeInOut",
                  }}
                  style={{
                              left: `${baseX}%`,
                              top: `${baseY}%`,
                  }}
                />
                        );
                      })}
                    </div>
            </div>
          </div>

                {/* Glow effect - constrained */}
          <motion.div
            animate={{
                    opacity: isHovered ? [0.4, 0.7, 0.4] : 0.3,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-4 bg-gradient-to-r from-secondary/30 via-accent/30 to-secondary/30 rounded-[2.5rem] blur-2xl -z-10"
                  style={{ clipPath: 'inset(0)' }}
                />
              </motion.div>
            </motion.div>

            {/* Side videos - Takes 5 columns, stacked */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {videos.map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => setCurrentVideo(index)}
                  className={`relative h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group ${
                    currentVideo === index ? "ring-2 ring-secondary ring-offset-2 sm:ring-offset-4 ring-offset-primary" : ""
                  }`}
                >
                  {/* Glassmorphism card */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl p-[1.5px] bg-gradient-to-br from-secondary/50 via-accent/50 to-secondary/50">
                    <div className="w-full h-full rounded-2xl sm:rounded-3xl bg-black/30 backdrop-blur-xl border border-white/10 relative overflow-hidden">
                      <video
                        className="w-full h-full object-contain"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source src={src} type="video/mp4" />
                      </video>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Play indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center"
                        >
                          <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        </motion.div>
                      </div>

                      {/* Number badge */}
                      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Glow on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl blur-xl -z-10"
          />
        </motion.div>
              ))}
            </div>
          </div>

          {/* Elegant stats section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
          >
            {[
              { value: "500+", label: "Projets Réalisés", color: "from-secondary to-accent" },
              { value: "200+", label: "Clients Satisfaits", color: "from-accent to-secondary" },
              { value: "15", label: "Années d'Expertise", color: "from-secondary via-accent to-secondary" },
              { value: "98%", label: "Taux de Satisfaction", color: "from-accent via-secondary to-accent" },
          ].map((stat, index) => (
            <motion.div
              key={index}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative group"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                {stat.value}
              </div>
                  <div className="text-white/70 text-sm font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
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

export default VideoShowcase;
