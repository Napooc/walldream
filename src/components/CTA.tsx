import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Prêt à Transformer Votre Espace ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment Wall Dream peut 
              révolutionner l'image de votre entreprise avec nos impressions murales professionnelles.
            </p>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">Téléphone</div>
                  <div className="text-muted-foreground">+33 1 23 45 67 89</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">contact@walldream.fr</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">Adresse</div>
                  <div className="text-muted-foreground">Paris, France</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Demander un Devis</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet</label>
                <Input placeholder="Votre nom" className="rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="votre@email.com" className="rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <Input type="tel" placeholder="+33 1 23 45 67 89" className="rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Décrivez votre projet</label>
                <Textarea 
                  placeholder="Parlez-nous de votre projet d'impression murale..." 
                  className="rounded-xl min-h-32"
                />
              </div>
              <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                Envoyer la demande
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
