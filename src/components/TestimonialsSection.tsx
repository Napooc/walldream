import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import retailImg from "@/assets/retail-space.jpg";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice Marketing",
    company: "Hôtel Le Prestige",
    image: retailImg,
    content: "Wall Dream a complètement transformé notre lobby. L'impression murale est d'une qualité exceptionnelle et crée une ambiance luxueuse qui impressionne chaque client. Un investissement qui a dépassé toutes nos attentes.",
    rating: 5,
  },
  {
    name: "Marc Dubois",
    role: "CEO",
    company: "TechStart Innovation",
    image: retailImg,
    content: "La technologie robotisée de Wall Dream est impressionnante. Notre nouveau siège social affiche désormais des visuels époustouflants qui inspirent nos équipes au quotidien. Service impeccable et résultat magnifique.",
    rating: 5,
  },
  {
    name: "Émilie Laurent",
    role: "Propriétaire",
    company: "Boutique Élégance",
    image: retailImg,
    content: "J'ai été bluffée par la précision et la beauté du rendu. Mes clients adorent prendre des photos devant notre nouveau mur artistique. Cela a créé un véritable buzz sur les réseaux sociaux!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full border border-secondary/30">
            <span className="text-secondary font-semibold text-xs sm:text-sm">TÉMOIGNAGES CLIENTS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8">
            Ils Nous Ont<br />
            <span className="text-gradient">Fait Confiance</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Découvrez les retours de nos clients qui ont transformé leurs espaces avec Wall Dream
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-secondary/50">
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-accent rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Quote className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>

                <div className="flex gap-1 mb-4 sm:mb-6 mt-2 sm:mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-foreground mb-6 sm:mb-8 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-foreground text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs sm:text-sm font-semibold text-secondary truncate">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
