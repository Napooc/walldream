import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sparkles, TrendingUp, Zap, MessageCircle, Clock, Eye } from "lucide-react";
import test1 from "@/assets/test1.jpg";
import test2 from "@/assets/img.jpg";
import test3 from "@/assets/test.jpg";
import test4 from "@/assets/comm.jpg";
import test5 from "@/assets/inve.jpg";
import test6 from "@/assets/vis.jpg";
const services = [
  {
    id: 1,
    icon: Eye,
    title: "Impact Visuel Immédiat",
    description: "Captivez instantanément avec des visuels monumentaux qui marquent les esprits",
    image: test1,
    color: "from-blue-500 to-cyan-500",
    details:
      "Notre technologie d'impression révolutionnaire transforme vos murs en véritables déclarations visuelles. Chaque projet est conçu pour créer un impact émotionnel immédiat, capturant l'essence de votre marque dans des formats monumentaux qui ne laissent personne indifférent. L'effet de présence est saisissant dès la première seconde.",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Identité de Marque Inégalée",
    description: "Forgez une identité visuelle puissante qui résonne avec votre audience",
    image: test2,
    color: "from-orange-500 to-red-500",
    details:
      "Construisez une présence de marque qui transcende l'ordinaire. Nos créations murales deviennent des extensions physiques de votre univers, créant une cohérence visuelle qui renforce votre positionnement. Chaque impression est une opportunité de raconter votre histoire de manière spectaculaire et mémorable.",
  },
  {
    id: 3,
    icon: Zap,
    title: "Expérience Lumineuse Captivante",
    description: "Des jeux de lumière spectaculaires qui transforment l'atmosphère",
    image: test3,
    color: "from-pink-500 to-purple-500",
    details:
      "Exploitez la magie de la lumière pour créer des ambiances immersives qui évoluent tout au long de la journée. Nos matériaux premium réagissent magnifiquement aux variations d'éclairage, offrant une dimension dynamique à vos espaces. L'effet est saisissant : vos murs deviennent des œuvres vivantes.",
  },
  {
    id: 4,
    icon: MessageCircle,
    title: "Communication Éloquente",
    description: "Transmettez vos messages avec une puissance visuelle inégalée",
    image: test4,
    color: "from-green-500 to-emerald-500",
    details:
      "La communication la plus efficace est celle qui transcende les mots. Nos impressions murales créent un langage visuel universel qui parle directement à l'émotion. Vos valeurs, votre vision, votre identité s'expriment dans une symphonie visuelle qui imprègne naturellement l'esprit de vos visiteurs.",
  },
  {
    id: 5,
    icon: Clock,
    title: "Investissement Pérenne",
    description: "Une valeur durable qui magnifie vos espaces année après année",
    image: test5,
    color: "from-yellow-500 to-amber-500",
    details:
      "Investissez dans l'excellence qui dure. Nos impressions utilisent des technologies de pointe et des matériaux d'exception garantissant une longévité remarquable. Résistantes aux UV, à l'usure et au temps, vos créations conservent leur éclat et leur impact pendant des années, offrant un retour sur investissement exceptionnel.",
  },
  {
    id: 6,
    icon: Sparkles,
    title: "Visibilité Extraordinaire",
    description: "Devenez une destination incontournable qui attire naturellement",
    image: test6,
    color: "from-indigo-500 to-violet-500",
    details:
      "Transformez vos espaces en véritables attractions visuelles qui génèrent du buzz organique. Vos installations deviennent des lieux Instagrammables qui attirent naturellement l'attention sur les réseaux sociaux. Créez une visibilité virale et positionnez-vous comme référence incontournable dans votre secteur.",
  },
];

const ServiceCard = ({ service, onClick }: { service: typeof services[0]; onClick: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      <div className="relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-card to-muted shadow-2xl hover:shadow-3xl transition-all duration-500">
        {/* Image Background */}
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
        </div>

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay`} />

        {/* Glassmorphic Icon */}
        <motion.div
          style={{ transformStyle: "preserve-3d", transform: "translateZ(75px)" }}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 overflow-visible"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            {/* Glow effect - constrained */}
            <div 
              className={`absolute -inset-2 bg-gradient-to-br ${service.color} blur-xl opacity-60 group-hover:opacity-100 transition-opacity rounded-xl sm:rounded-2xl`}
              style={{ clipPath: 'inset(0)' }}
            />
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 md:p-8" style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}>
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>
            <div className="flex items-center gap-3 text-secondary font-semibold group-hover:gap-5 transition-all duration-300">
              <span>Découvrir</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-secondary/50 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden" id="services">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-secondary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 sm:mb-6"
          >
            <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full border border-secondary/30">
              <span className="text-secondary font-semibold text-xs sm:text-sm">6 ATOUTS RÉVOLUTIONNAIRES</span>
            </div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8">
            <span className="text-gradient">L'Excellence</span>
            <br />
            <span className="text-foreground">En Impression Murale</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Découvrez comment nos solutions d'impression murale révolutionnaires transforment radicalement
            l'expérience de vos espaces professionnels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onClick={() => setSelectedService(service)} />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-muted border-2 border-secondary/20">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="relative h-80 -mx-6 -mt-6 mb-8 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedService.color} opacity-40 mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center shadow-2xl`}>
                      <selectedService.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
                <DialogTitle className="text-4xl font-extrabold text-gradient mb-4">
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription className="text-lg text-muted-foreground">
                  {selectedService.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-6">
                <p className="text-lg leading-relaxed text-foreground">{selectedService.details}</p>
                <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-6 border border-secondary/20">
                  <p className="text-sm text-muted-foreground italic">
                    "Wall Dream transforme chaque projet en une expérience visuelle exceptionnelle qui dépasse les attentes."
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
