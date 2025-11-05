import { motion } from "framer-motion";
import sushiImg from "@/assets/wall-dream-sushi.jpg";
import pizzaImg from "@/assets/wall-dream-pizza.jpg";
import nailsImg from "@/assets/wall-dream-nails.jpg";

const galleryItems = [
  {
    image: sushiImg,
    title: "Restauration Japonaise",
    category: "Restaurant",
  },
  {
    image: pizzaImg,
    title: "Pizzeria Moderne",
    category: "Restaurant",
  },
  {
    image: nailsImg,
    title: "Salon de Beauté",
    category: "Beauté & Bien-être",
  },
  {
    image: sushiImg,
    title: "Espace Commercial",
    category: "Commerce",
  },
  {
    image: pizzaImg,
    title: "Hôtel Boutique",
    category: "Hôtellerie",
  },
  {
    image: nailsImg,
    title: "Spa & Wellness",
    category: "Beauté & Bien-être",
  },
];

const Gallery = () => {
  return (
    <section id="portfolio" className="py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Nos Réalisations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment nous transformons les espaces professionnels avec nos impressions murales sur mesure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1 bg-secondary/90 text-primary text-sm font-semibold rounded-full mb-3">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
