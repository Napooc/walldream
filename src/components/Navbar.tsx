import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("#home");
  
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 0.98)"]);
  const blur = useTransform(scrollY, [0, 100], [0, 20]);
  
  const navLinks = [
    { name: "Accueil", href: "#home", icon: Sparkles },
    { name: "Services", href: "#services", icon: Zap },
    { name: "Portfolio", href: "#portfolio", icon: Sparkles },
    { name: "Technologie", href: "#tech", icon: Zap },
    { name: "Équipe", href: "#equipe", icon: Sparkles },
    { name: "Nos Vidéos", href: "#videos", icon: Zap },
    { name: "Contact", href: "#contact", icon: Sparkles }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Update active link based on scroll position
      const sections = navLinks.map(link => link.href);
      const currentSection = sections.find(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveLink(currentSection);
      
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveLink(href);
    }
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.nav 
      style={{
        backgroundColor,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
      }} 
      initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
          isScrolled 
            ? "shadow-2xl border-b border-border/30" 
            : "bg-gradient-to-b from-black/20 via-black/10 to-transparent"
        }`}
      >
        {/* Animated background particles */}
        {!isScrolled && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {[...Array(8)].map((_, i) => {
              // Use fixed values based on index to prevent random changes
              const baseX = (i * 12.5) % 100;
              const baseY = (i * 15) % 100;
              const moveX = (i % 3) * 20 - 20;
              const moveY = (i % 2) * 15 - 7.5;
              const duration = 2 + (i % 3);
              const delay = i * 0.3;
              
              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-secondary/40 rounded-full"
                  animate={{
                    x: [0, moveX, 0],
                    y: [0, moveY, 0],
                    opacity: [0, 0.6, 0],
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
        )}

        {/* Desktop Navbar */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 xl:px-6">
            <div className="flex items-center justify-between h-24 gap-4">
              {/* Logo Section */}
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="flex items-center gap-4 group flex-shrink-0 relative z-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="relative w-16 h-16 overflow-visible"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect - constrained */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 bg-gradient-to-r from-secondary via-accent to-secondary blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                    style={{ clipPath: 'inset(0)' }}
                  />
                  <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-xl ring-2 ring-white/20 group-hover:ring-secondary/50 transition-all z-10">
                    <img 
                      src={logo} 
                      alt="Wall Dream Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Border animation - constrained */}
                  <motion.div
                    className="absolute -inset-1 rounded-full border-2 border-secondary/30"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ clipPath: 'inset(0)' }}
                  />
                </motion.div>
                <div className="flex flex-col">
                  <span className={`text-2xl font-bold transition-colors whitespace-nowrap ${
                    isScrolled ? "text-primary" : "text-white"
                  }`}>
                    Wall Dream
                  </span>
                  {!isScrolled && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "100%" }}
                      className="h-0.5 bg-gradient-to-r from-secondary via-accent to-secondary mt-0.5"
                    />
                  )}
                </div>
              </motion.a>

              {/* Navigation Links - Flexible layout */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-1 flex-1 justify-center min-w-0 relative z-10"
              >
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = activeLink === link.href;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 group flex items-center gap-2 overflow-visible ${
                        isScrolled 
                          ? isActive
                            ? "text-secondary"
                            : "text-foreground hover:text-secondary" 
                          : isActive
                            ? "text-white"
                            : "text-white/80 hover:text-white"
                      }`}
                    >
                      <div className="relative w-4 h-4 flex-shrink-0 overflow-hidden">
                        <motion.div
                          animate={isActive ? { rotate: [0, 360] } : { rotate: 0 }}
                          transition={{ duration: 1, repeat: isActive ? Infinity : 0, ease: "linear" }}
                          className="w-full h-full"
                        >
                          <Icon className={`w-4 h-4 ${isActive ? "text-secondary" : ""}`} />
                        </motion.div>
                      </div>
                      <span className="relative z-10 whitespace-nowrap">{link.name}</span>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className={`absolute inset-0 rounded-lg ${
                            isScrolled
                              ? "bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20"
                              : "bg-white/10"
                          }`}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      
                      {/* Hover effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                          isScrolled
                            ? "bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10"
                            : "bg-white/5"
                        }`}
                      />
                      
                      {/* Bottom accent line */}
                      <motion.span
                        className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                          isActive ? "bg-secondary w-full" : "bg-secondary/50 w-0 group-hover:w-full"
                        }`}
                      />
                      
                      {/* Glow effect on active - constrained */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-lg bg-secondary/20 blur-sm -z-10"
                          animate={{ opacity: [0.3, 0.5, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          style={{ clipPath: 'inset(0)' }}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden">
      <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-24 relative">
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 relative z-10"
              >
            <motion.div 
                  className="relative w-14 h-14 group overflow-visible"
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.3 }}
            >
                  {/* Glow effect - constrained */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 bg-gradient-to-r from-secondary via-accent to-secondary blur-xl opacity-60 group-hover:opacity-100 transition-opacity rounded-full"
                    style={{ clipPath: 'inset(0)' }}
                  />
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-xl ring-2 ring-white/20 z-10">
                <img 
                  src={logo} 
                  alt="Wall Dream Logo" 
                      className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
                <span className={`text-2xl font-bold transition-colors ${
                  isScrolled ? "text-primary" : "text-white"
                }`}>
              Wall Dream
            </span>
              </motion.a>

              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
                className={`relative p-3 rounded-xl transition-all ${
                  isScrolled 
                    ? "text-foreground bg-white/10 hover:bg-white/20" 
                    : "text-white bg-white/10 hover:bg-white/20"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X size={24} />
          </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu size={24} />
          </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
        </div>
      </div>

          {/* Mobile Menu with enhanced design */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-white/98 backdrop-blur-xl border-t border-border/20"
              >
                <div className="container mx-auto px-6 py-6 space-y-1">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isActive = activeLink === link.href;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`relative flex items-center gap-3 py-3 px-4 font-medium rounded-xl transition-all overflow-hidden group ${
                          isActive
                            ? "text-secondary bg-secondary/10"
                            : "text-foreground hover:text-secondary hover:bg-secondary/5"
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? "text-secondary" : ""}`} />
                        <span>{link.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="mobileActive"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ type: "spring", bounce: 0.2 }}
                          />
                        )}
                        <motion.div
                          className="absolute right-0 top-0 bottom-0 w-0 bg-secondary/10 group-hover:w-full transition-all duration-300"
                        />
                      </motion.a>
                    );
                  })}
        </div>
      </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
