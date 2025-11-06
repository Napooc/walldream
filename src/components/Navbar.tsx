import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const {
    scrollY
  } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      // Hide navbar on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const navLinks = [{
    name: "Accueil",
    href: "#home"
  }, {
    name: "Services",
    href: "#services"
  }, {
    name: "Portfolio",
    href: "#portfolio"
  }, {
    name: "Technologie",
    href: "#tech"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <motion.nav 
      style={{
        backgroundColor,
        y: isVisible ? 0 : -100,
      }} 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-xl shadow-2xl border-b border-border/50" : ""}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="flex items-center gap-3">
            <motion.div 
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-2xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all">
                <img 
                  src={logo} 
                  alt="Wall Dream Logo" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </motion.div>
            <span className={`text-2xl font-bold transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
              Wall Dream
            </span>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => <motion.a key={link.name} href={link.href} onClick={e => {
            e.preventDefault();
            const target = document.querySelector(link.href);
            target?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} className={`text-sm font-medium transition-all hover:scale-110 relative group cursor-pointer ${isScrolled ? "text-foreground" : "text-white"}`}>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </motion.a>)}
          </div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className={`rounded-full ${isScrolled ? "text-foreground" : "text-white hover:bg-white/20"}`}>
              Connexion
            </Button>
            <Button className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-primary rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Devis Gratuit
            </Button>
          </motion.div>

          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2 rounded-xl ${isScrolled ? "text-foreground" : "text-white"}`}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div initial={false} animate={{
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0
    }} className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-6 space-y-4">
          {navLinks.map(link => <a key={link.name} href={link.href} className="block py-3 text-foreground font-medium hover:text-secondary transition-colors border-b border-border/50" onClick={e => {
          e.preventDefault();
          const target = document.querySelector(link.href);
          target?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          setIsOpen(false);
        }}>
              {link.name}
            </a>)}
          <div className="pt-4 space-y-3">
            
            <Button className="w-full bg-gradient-to-r from-secondary to-accent text-primary rounded-full">
              Devis Gratuit
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.nav>;
};
export default Navbar;