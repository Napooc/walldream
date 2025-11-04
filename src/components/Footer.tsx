import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Wall Dream</h3>
            <p className="text-primary-foreground/70">
              L'impression murale professionnelle nouvelle génération
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-secondary transition-colors">Impression murale</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Design personnalisé</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Installation</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Maintenance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-secondary transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Nos réalisations</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Technologie</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-secondary transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Wall Dream. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
