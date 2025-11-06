import { motion } from "framer-motion";
import { Building2, Hotel, ShoppingBag, Briefcase } from "lucide-react";
import hotelImg from "@/assets/hotel-lobby.jpg";
import retailImg from "@/assets/retail-space.jpg";
import techImg from "@/assets/tech-office.jpg";
import officeImg from "@/assets/office-mural.jpg";

const industries = [
  {
    icon: Hotel,
    title: "Hôtellerie & Hospitalité",
    description: "Créez des ambiances immersives qui transforment l'expérience client",
    image: hotelImg,
    stats: "150+ Hôtels",
  },
  {
    icon: ShoppingBag,
    title: "Commerce & Retail",
    description: "Attirez et captivez avec des visuels qui stimulent l'engagement",
    image: retailImg,
    stats: "300+ Boutiques",
  },
  {
    icon: Briefcase,
    title: "Espaces de Travail",
    description: "Inspirez vos équipes avec des environnements stimulants",
    image: techImg,
    stats: "200+ Bureaux",
  },
  {
    icon: Building2,
    title: "Corporate & Entreprises",
    description: "Renforcez votre identité avec des installations professionnelles",
    image: officeImg,
    stats: "100+ Sièges Sociaux",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full border border-secondary/30">
            <span className="text-secondary font-semibold text-xs sm:text-sm">NOS SECTEURS D'EXPERTISE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8">
            Nous Transformons<br />
            <span className="text-gradient-accent">Tous Vos Espaces</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            De l'hôtellerie au retail, nous maîtrisons les spécificités de chaque secteur pour créer des installations sur mesure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:from-black/90 transition-all duration-500" />
                </div>

                <div className="relative h-full p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/90 transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-secondary/90 backdrop-blur-md rounded-full">
                      <span className="text-white font-semibold text-xs sm:text-sm">{industry.stats}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-secondary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/50 rounded-3xl transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
