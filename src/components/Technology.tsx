import { motion } from "framer-motion";
import { Cpu, Palette, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Technologie de Pointe",
    description: "Notre robot d'impression utilise les dernières avancées technologiques pour des résultats parfaits",
  },
  {
    icon: Palette,
    title: "Qualité d'Image HD",
    description: "Des impressions ultra-haute définition qui capturent chaque détail avec précision",
  },
  {
    icon: Zap,
    title: "Installation Rapide",
    description: "Processus d'impression et d'installation efficace pour minimiser les interruptions",
  },
  {
    icon: Shield,
    title: "Matériaux Durables",
    description: "Encres et matériaux premium résistants aux UV et à l'usure du temps",
  },
];

const Technology = () => {
  return (
    <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Une Technologie Révolutionnaire
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Wall Dream combine innovation technologique et savoir-faire artisanal pour créer des impressions murales d'exception
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow"
                >
                  <Icon className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-3xl font-bold mb-6">
              Le Robot Wall Dream
            </h3>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Notre robot d'impression murale autonome représente le summum de l'innovation dans le domaine de la décoration d'intérieur. 
              Équipé de capteurs de haute précision et d'un système d'impression révolutionnaire, il transforme n'importe quelle surface 
              en une œuvre d'art exceptionnelle. Mobilité, précision et qualité se combinent pour offrir des résultats qui dépassent 
              toutes les attentes.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">4K</div>
                <div className="text-sm text-primary-foreground/70">Résolution HD</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-primary-foreground/70">Autonome</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-sm text-primary-foreground/70">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
