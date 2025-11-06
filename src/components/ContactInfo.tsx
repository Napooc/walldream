import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ContactInfo = () => {
  const [showWhatsAppDialog, setShowWhatsAppDialog] = useState(false);

  const handleWhatsAppClick = (country: "france" | "suisse") => {
    const numbers = {
      france: "33774598627",
      suisse: "41778083270",
    };
    window.open(`https://wa.me/${numbers[country]}`, "_blank");
    setShowWhatsAppDialog(false);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="text-secondary text-sm font-bold tracking-wider uppercase bg-secondary/10 px-6 py-3 rounded-full">
              Contactez-Nous
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Prêt à Transformer
            <span className="block text-gradient-accent mt-2">Votre Espace ?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour donner vie à vos projets les plus ambitieux
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {/* Email Card */}
          <motion.a
            href="mailto:walldream2025@gmail.com"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative overflow-hidden bg-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-secondary/50">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <Mail className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  Email
                </h3>
                <p className="text-muted-foreground mb-4">Envoyez-nous un message</p>
                <p className="text-lg font-semibold text-secondary break-all">
                  walldream2025@gmail.com
                </p>
              </div>
            </div>
          </motion.a>

          {/* France Phone Card */}
          <motion.a
            href="tel:+33774598627"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden bg-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-secondary/50">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <Phone className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  France
                </h3>
                <p className="text-muted-foreground mb-4">Appelez-nous en France</p>
                <p className="text-lg font-semibold text-secondary">
                  07 74 59 86 27
                </p>
              </div>
            </div>
          </motion.a>

          {/* Suisse Phone Card */}
          <motion.a
            href="tel:+41778083270"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="relative overflow-hidden bg-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-secondary/50">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <Phone className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  Suisse
                </h3>
                <p className="text-muted-foreground mb-4">Appelez-nous en Suisse</p>
                <p className="text-lg font-semibold text-secondary">
                  +41 77 808 32 70
                </p>
              </div>
            </div>
          </motion.a>
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <Button
            onClick={() => setShowWhatsAppDialog(true)}
            size="lg"
            className="group relative bg-gradient-to-r from-secondary via-accent to-secondary bg-[length:200%_100%] hover:bg-[position:100%_0] text-white text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
            <MessageCircle className="w-7 h-7 mr-3" />
            Contactez-nous sur WhatsApp
          </Button>

          <p className="text-muted-foreground mt-6 text-lg">
            Réponse rapide et personnalisée garantie
          </p>
        </motion.div>
      </div>

      {/* WhatsApp Country Selection Dialog */}
      <Dialog open={showWhatsAppDialog} onOpenChange={setShowWhatsAppDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center mb-4">
              Choisissez votre pays
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Button
              onClick={() => handleWhatsAppClick("france")}
              className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-white text-lg py-6 rounded-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              France - 07 74 59 86 27
            </Button>
            <Button
              onClick={() => handleWhatsAppClick("suisse")}
              className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-white text-lg py-6 rounded-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Suisse - +41 77 808 32 70
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactInfo;
