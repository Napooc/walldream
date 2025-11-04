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
    <section className="py-32 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full border border-secondary/30">
            <span className="text-secondary font-semibold">NOS SECTEURS D'EXPERTISE</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-extrabold mb-8">
            Nous Transformons<br />
            <span className="text-gradient-accent">Tous Vos Espaces</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            De l'hôtellerie au retail, nous maîtrisons les spécificités de chaque secteur pour créer des installations sur mesure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:from-black/90 transition-all duration-500" />
                </div>

                <div className="relative h-full p-10 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/90 transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="px-4 py-2 bg-secondary/90 backdrop-blur-md rounded-full">
                      <span className="text-white font-semibold text-sm">{industry.stats}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-white/80 text-lg mb-6 leading-relaxed">
                      {industry.description}
                    </p>
                    <motion.div
                      className="inline-flex items-center gap-2 text-secondary font-semibold"
                      whileHover={{ gap: 12 }}
                    >
                      <span>Explorer</span>
                      <span>→</span>
                    </motion.div>
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
