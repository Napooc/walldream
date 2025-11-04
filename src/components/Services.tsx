import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sparkles, TrendingUp, Zap, MessageCircle, Clock, Eye } from "lucide-react";
import sushiImg from "@/assets/wall-dream-sushi.jpg";
import pizzaImg from "@/assets/wall-dream-pizza.jpg";
import nailsImg from "@/assets/wall-dream-nails.jpg";

const services = [
  {
    id: 1,
    icon: Eye,
    title: "Impact visuel immédiat",
    description: "Attirez l'attention instantanément avec des visuels grand format captivants",
    image: sushiImg,
    details:
      "Nos impressions murales créent un impact visuel immédiat qui capte l'attention de vos clients dès leur entrée. La taille imposante et la qualité exceptionnelle de nos réalisations transforment instantanément l'atmosphère de votre espace commercial. Chaque impression est conçue pour maximiser l'impact émotionnel et créer une première impression inoubliable.",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Image de marque forte",
    description: "Renforcez votre identité visuelle avec des créations uniques",
    image: pizzaImg,
    details:
      "Développez une image de marque forte et cohérente grâce à nos impressions murales personnalisées. Nous travaillons avec vous pour créer des visuels qui reflètent parfaitement vos valeurs et votre identité. Chaque projet est une opportunité de renforcer votre positionnement et de vous démarquer de la concurrence avec des créations visuelles mémorables.",
  },
  {
    id: 3,
    icon: Zap,
    title: "Effet lumineux captivant",
    description: "Créez une ambiance unique avec des jeux de lumière spectaculaires",
    image: nailsImg,
    details:
      "L'effet lumineux captivant de nos impressions transforme vos espaces en environnements immersifs. La qualité de nos matériaux et de nos encres permet des rendus éclatants qui réagissent magnifiquement à l'éclairage. Créez des ambiances uniques qui évoluent au fil de la journée et captivent vos visiteurs à chaque instant.",
  },
  {
    id: 4,
    icon: MessageCircle,
    title: "Communication silencieuse",
    description: "Transmettez vos messages de manière élégante et efficace",
    image: sushiImg,
    details:
      "La communication silencieuse par l'image est la plus puissante. Nos impressions murales transmettent vos messages sans effort, créant une communication visuelle élégante et impactante. Vos clients absorbent naturellement vos valeurs et votre univers sans avoir besoin de mots, dans une expérience immersive totale.",
  },
  {
    id: 5,
    icon: Clock,
    title: "Investissement durable",
    description: "Une solution pérenne qui valorise vos espaces sur le long terme",
    image: pizzaImg,
    details:
      "Nos impressions murales représentent un investissement durable dans l'aménagement de vos espaces. Grâce à des matériaux de haute qualité et des techniques d'impression avancées, vos créations conservent leur éclat et leur impact pendant des années. Un investissement rentable qui valorise votre espace jour après jour.",
  },
  {
    id: 6,
    icon: Sparkles,
    title: "Visibilité accrue",
    description: "Démarquez-vous et attirez plus de clients grâce à un design unique",
    image: nailsImg,
    details:
      "Augmentez significativement votre visibilité avec des installations qui ne passent pas inaperçues. Nos impressions murales transforment vos espaces en véritables destinations visuelles qui attirent naturellement l'attention. Créez le buzz sur les réseaux sociaux et devenez une référence incontournable dans votre secteur.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Les 6 Atouts d'une Impression Murale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment nos solutions d'impression murale transforment vos espaces professionnels
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedService(service)}
                className="group relative bg-card rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="mt-6 flex items-center text-secondary font-semibold group-hover:gap-3 gap-2 transition-all">
                    <span>En savoir plus</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <DialogTitle className="text-3xl font-bold text-gradient">
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground pt-2">
                  {selectedService.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
                <p className="text-lg leading-relaxed text-foreground">{selectedService.details}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
